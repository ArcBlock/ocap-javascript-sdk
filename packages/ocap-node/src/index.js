const md5 = require('blueimp-md5');
const schemas = require('@arcblock/ocap-schema');
const { Socket } = require('phoenix-channels');
const OCAPClientBase = require('./base');
const { name } = require('../package.json');
const debug = require('debug')(name);

class OCAPClient extends OCAPClientBase {
  _getSchema(dataSource) {
    return schemas[dataSource];
  }

  _getQueryId(query) {
    return md5(query);
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
}

module.exports = OCAPClient;
