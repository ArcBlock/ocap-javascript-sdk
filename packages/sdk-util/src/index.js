const axios = require('axios');
const { print, parse } = require('graphql');
const { getQueryBuilders, getMutationBuilders, getSubscriptionBuilders } = require('./util');

const debug = require('debug')('BaseClient');

class BaseClient {
  constructor(config) {
    if (!config.dataSource) {
      throw new Error('BaseClient requires dataSource config');
    }

    if (config.httpBaseUrl) {
      throw Error('config.httpBaseUrl is deprecated');
    }
    if (config.socketBaseUrl) {
      throw Error('config.socketBaseUrl is deprecated');
    }

    this.config = Object.assign(
      {
        httpEndpoint: ds => `https://ocap.arcblock.io/api/${ds}`,
        socketEndpoint: ds => `wss://ocap.arcblock.io/api/${ds}/socket`,
        enableQuery: true,
        enableSubscription: true,
        enableMutation: true,
      },
      config
    );

    this.schema = this._getSchema(this.config.dataSource);
    if (!this.schema) {
      throw new Error(`BaseClient: unsupported dataSource ${this.config.dataSource}`);
    }

    if (this.config.enableQuery) {
      this.generateQueryFns(this.schema);
    }

    if (this.config.enableSubscription) {
      this.generateSubscriptionFns(this.schema);
      this.subscriptions = {}; // event emitter objects
    }

    if (this.config.enableMutation) {
      this.generateMutationFns(this.schema);
    }
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
   * @memberof BaseClient
   * @return Promise
   */
  doRawQuery(query) {
    try {
      const cleanQuery = print(parse(query));
      return this._doRequest(cleanQuery);
    } catch (err) {
      throw new Error(`BaseClient: invalid raw query ${err.message || err.toString()}`);
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
        const query = builders[key](this._sanitizeArgs(args));
        const result = await this._doRequest(query);
        const pagedResult = this._getPagedResults({
          result,
          queryBuilder: builders[key],
          args,
          dataKey: key,
        });

        return pagedResult;
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
        const query = builders[key](this._sanitizeArgs(args));
        return this.doRawSubscription(query);
      };

      subscriptionFn.type = 'subscription';
      subscriptionFn.args = builders[key].args;
      subscriptionFn.builder = builders[key];

      this[key] = subscriptionFn;
    });
  }

  async doRawSubscription(query) {
    debug('doSubscription.query', query);
    const queryId = this._getQueryId(query);
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
          const EventEmitter = this._getEventImplementation();
          this.subscriptions[queryId] = new EventEmitter();
          this.subscriptions[queryId].subscriptionId = res.subscriptionId;

          resolve(this.subscriptions[queryId]);
        })
        .receive('error', err => {
          debug('subscription error', err);
          reject(err);
        });
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
        const query = builders[key](this._sanitizeArgs(args));
        return this._doRequest(query);
      };

      mutationFn.type = 'mutation';
      mutationFn.args = builders[key].args;
      mutationFn.builder = builders[key];

      this[key] = mutationFn;
    });
  }

  /**
   * Send a request to ocap service
   *
   * @param {*} query
   * @return Promise
   * @memberof BaseClient
   */
  async _doRequest(query) {
    debug('doRequest.query', query);
    const httpEndpoint =
      typeof this.config.httpEndpoint === 'function'
        ? this.config.httpEndpoint(this.config.dataSource)
        : this.config.httpEndpoint;

    // TODO: support user authentication and authorization through headers
    const res = await axios.post(httpEndpoint, { query });

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
   * @memberof BaseClient
   */
  async _ensureSubscriptionChannel() {
    if (this.channel && this.channel.isJoined()) {
      return Promise.resolve(this.channel);
    }

    const socketEndpoint =
      typeof this.config.socketEndpoint === 'function'
        ? this.config.socketEndpoint(this.config.dataSource)
        : this.config.socketEndpoint;

    const Socket = this._getSocketImplementation();
    this.socket = new Socket(socketEndpoint, this._getSocketOptions());
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
    this.socket.onConnError(err => {
      debug('socket.reconnect.onConnError', err);
      Object.keys(this.subscriptions).forEach(queryId => {
        this.subscriptions[queryId].emit('error', err);
      });
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
   * @memberof BaseClient
   */
  _getApiList(type) {
    return Object.keys(this).filter(x => typeof this[x] === 'function' && this[x].type === type);
  }

  _sanitizeArgs(args) {
    return args;
  }

  /**
   * Make a paginated query
   *
   * @param {Object} { data, queryBuilder, args, type }
   * @returns Object with possible `next` method
   * @memberof BaseClient
   */
  _getPagedResults({ result, queryBuilder, args, dataKey }) {
    if (
      result[dataKey] &&
      result[dataKey].page &&
      result[dataKey].page.next &&
      result[dataKey].page.cursor
    ) {
      result.next = async () => {
        const newArgs = Object.assign({}, args, {
          paging: { cursor: result[dataKey].page.cursor },
        });
        const query = queryBuilder(newArgs);
        const newResult = await this._doRequest(query);
        return this._getPagedResults({
          result: newResult,
          queryBuilder,
          args: newArgs,
          dataKey,
        });
      };
    }

    return result;
  }

  _getSchema() {
    throw new Error('_getSchema must be implemented in sub class');
  }

  _getIgnoreFields() {
    throw new Error('_getIgnoreFields must be implemented in sub class');
  }

  _getSocketImplementation() {
    throw new Error('_getSocketImplementation must be implemented in sub class');
  }

  _getSocketOptions() {
    throw new Error('_getSocketOptions must be implemented in sub class');
  }

  _getEventImplementation() {
    throw new Error('_getEventImplementation must be implemented in sub class');
  }

  _getQueryId() {
    throw new Error('_getQueryId must be implemented in sub class');
  }
}

module.exports = BaseClient;
