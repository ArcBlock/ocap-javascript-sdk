const fs = require('fs');
const path = require('path');
const axios = require('axios');
const EventEmitter = require('events');
const { Socket } = require('phoenix-channels');
const { print, parse } = require('graphql');
const { name } = require('../package.json');
const debug = require('debug')(name);

const { md5, getQueryBuilders, getMutationBuilders, getSubscriptionBuilders } = require('./helper');

class OCAPClient {
  constructor(config) {
    if (!config.dataSource) {
      throw new Error('OCAPClient requires dataSource config');
    }

    this.config = Object.assign(
      {
	httpBaseUrl: 'https://ocap.arcblock.io/api',
	socketBaseUrl: ds => `wss://ocap.arcblock.io/api/${ds}/socket`,
      },
      config
    );

    const schemaFilePath = path.join(__dirname, 'schema', `${this.config.dataSource}.json`);
    if (fs.existsSync(schemaFilePath) === false) {
      throw new Error(`OCAPClient: unsupported dataSource ${this.config.dataSource}`);
    }

    this.schema = require(schemaFilePath);
    this.generateQueryFns(this.schema);
    this.generateMutationFns(this.schema);
    this.generateSubscriptionFns(this.schema);

    this.subscriptions = {}; // event emitter objects
  }

  getQueries() {
    return this._getApiList('query');
  }

  getSubscriptions() {
    return this._getApiList('subscription');
  }

  getMutations() {
    return this._getApiList('mutation');
  }

  /**
   * Send raw query to ocap and return results
   *
   * @param {*} query
   * @memberof OCAPClient
   * @return Promise
   */
  doRawQuery(query) {
    try {
      const cleanQuery = print(parse(query));
      return this._doRequest(cleanQuery);
    } catch (err) {
      throw new Error(`OCAPClient: invalid raw query ${err.message || err.toString()}`);
    }
  }

  generateQueryFns() {
    const { types, queryType } = this.schema;
    if (!queryType) {
      return;
    }

    const builders = getQueryBuilders({
      types,
      rootName: queryType.name,
      ignoreFields: this._getIgnoreFields.bind(this),
    });

    Object.keys(builders).forEach(key => {
      const queryFn = async args => {
	const query = builders[key](args);
	return this._doRequest(query);
      };

      queryFn.type = 'query';
      queryFn.args = builders[key].args;
      queryFn.builder = builders[key];

      this[key] = queryFn;
    });
  }

  generateSubscriptionFns() {
    const { types, subscriptionType } = this.schema;
    if (!subscriptionType) {
      return;
    }

    const builders = getSubscriptionBuilders({
      types,
      rootName: subscriptionType.name,
      ignoreFields: this._getIgnoreFields.bind(this),
    });

    Object.keys(builders).forEach(key => {
      const subscriptionFn = async args => {
	const query = builders[key](args);
	const queryId = md5(query);
	if (this.subscriptions[queryId]) {
	  return Promise.resolve(this.subscriptions[queryId].emitter);
	}

	const channel = await this._ensureSubscriptionChannel();
	return new Promise((resolve, reject) => {
	  channel
	    .push('doc', { query })
	    .receive('ok', res => {
	      debug('subscription success', { queryId, res });

	      // create a new EventEmitter for each subscription
	      this.subscriptions[queryId] = new EventEmitter();
	      this.subscriptions[queryId].subscriptionId = res.subscriptionId;

	      resolve(this.subscriptions[queryId]);
	    })
	    .receive('error', err => {
	      debug('subscription error', err);
	      reject(err);
	    });
	});
      };

      subscriptionFn.type = 'subscription';
      subscriptionFn.args = builders[key].args;
      subscriptionFn.builder = builders[key];

      this[key] = subscriptionFn;
    });
  }

  generateMutationFns() {
    const { types, mutationType } = this.schema;
    if (!mutationType) {
      return;
    }

    const builders = getMutationBuilders({
      types,
      rootName: mutationType.name,
      ignoreFields: this._getIgnoreFields.bind(this),
    });

    Object.keys(builders).forEach(key => {
      const mutationFn = async args => {
	// TODO: implement mutation logic
	const query = builders[key](args);
	return this._doRequest(query);
      };

      mutationFn.type = 'mutation';
      mutationFn.args = builders[key].args;
      mutationFn.builder = builders[key];

      this[key] = mutationFn;
    });
  }

  /**
   * Get ignored field lists that need to be excluded when build graphql queries
   * These fields are ignored because they may cause query failure
   *
   * @param {Type} t
   * @return Array
   */
  _getIgnoreFields(t) {
    const ignoreFields = ['merkleRoot', 'data.merkleRoot'];
    ignoreFields.push('txsSent', 'txsReceived');
    if (t.name.toLowerCase().indexOf('block') >= 0) {
      ignoreFields.push('miner.txsSent', 'miner.txsReceived');
      ignoreFields.push('data.miner.txsSent', 'data.miner.txsReceived');
      if (this.config.dataSource === 'eth') {
	ignoreFields.push('total', 'numberTxs');
	ignoreFields.push('data.total', 'data.numberTxs');
      }
    }

    if (this.config.dataSource === 'eth') {
      ignoreFields.push(
	'parent',
	'to.txsSent',
	'from.txsSent',
	'to.txsReceived',
	'from.txsReceived'
      );
      ignoreFields.push('data.to.txsSent', 'data.from.txsReceived');
      ignoreFields.push('author', 'transactions.data.parent');
      ignoreFields.push('data.author', 'data.transactions.data.parent');
    }

    return Object.keys(
      ignoreFields.reduce((memo, x) => {
	memo[x] = true;
	return memo;
      }, {})
    );
  }

  /**
   * Send a request to ocap service
   *
   * @param {*} query
   * @return Promise
   * @memberof OCAPClient
   */
  async _doRequest(query) {
    debug('doRequest.query', query);
    const url = `${this.config.httpBaseUrl}/${this.config.dataSource}`;

    // TODO: support user authentication and authorization through headers
    const res = await axios.post(url, { query });

    debug('doRequest.response', {
      status: res.statusCode,
      data: res.data.data,
      errors: res.data.errors,
    });

    if (res.status === 200) {
      return res.data.data;
    }

    throw new Error(`doRequest.error: ${res.status}`);
  }

  /**
   * Ensure we have a open socket connection and act as switcher on message received
   *
   * @returns Promise
   * @memberof OCAPClient
   */
  async _ensureSubscriptionChannel() {
    if (this.channel && this.channel.isJoined()) {
      return Promise.resolve(this.channel);
    }

    const socketBaseUrl =
      typeof this.config.socketBaseUrl === 'function'
	? this.config.socketBaseUrl(this.config.dataSource)
	: this.config.socketBaseUrl;

    this.socket = new Socket(socketBaseUrl);
    this.socket.connect();
    this.socket.onMessage(({ event, payload }) => {
      debug('socket.onMessage', { event, payload });
      if (event === 'subscription:data') {
	const queryId = Object.keys(this.subscriptions).find(
	  x => this.subscriptions[x].subscriptionId === payload.subscriptionId
	);
	if (queryId) {
	  debug('subscription.onMessage', { queryId, subscriptionId: payload.subscriptionId });
	  this.subscriptions[queryId].emit('data', payload.result.data);
	}
      }
    });

    // auto reconnect on error
    this.socket.onConnError(() => {
      debug('socket.reconnect.onConnError');
      setTimeout(() => {
	this.socket.connect();
      }, 1000);
    });

    this.channel = this.socket.channel('__absinthe__:control');
    return new Promise((resolve, reject) => {
      this.channel
	.join()
	.receive('ok', res => {
	  debug('Channel join success', res);
	  resolve(this.channel);
	})
	.receive('error', err => {
	  debug('Channel join error', err);
	  reject(err);
	});
    });
  }

  /**
   * Generate list of methods with certain type
   *
   * @param {*} type
   * @returns
   * @memberof OCAPClient
   */
  _getApiList(type) {
    return Object.keys(this).filter(x => typeof this[x] === 'function' && this[x].type === type);
  }
}

module.exports = OCAPClient;
