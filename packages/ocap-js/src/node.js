const schemas = require('@arcblock/ocap-schema');
const md5 = require('blueimp-md5');
const EventEmitter = require('events');
const { Socket } = require('phoenix-channels');
const BaseClient = require('@arcblock/sdk-util');

class OCAPClient extends BaseClient {
  _getSchema(dataSource) {
    return schemas[dataSource];
  }

  _getQueryId(query) {
    return md5(query);
  }

  _getSocketImplementation() {
    return Socket;
  }

  _getEventImplementation() {
    return EventEmitter;
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
}

module.exports = OCAPClient;
