const schemas = require('@arcblock/ocap-schema');
const md5 = require('blueimp-md5');
const BaseClient = require('@arcblock/sdk-util');

class OCAPBaseClient extends BaseClient {
  _getSchema(dataSource) {
    return schemas[dataSource];
  }

  _getQueryId(query) {
    return md5(query);
  }

  /**
   * Strip `0x` prefix from eth arguments
   *
   * @param {*} args
   * @memberof OCAPClient
   */
  _sanitizeArgs(args) {
    if (args && typeof args === 'object' && this.config.dataSource === 'eth') {
      const possibleKeys = ['hash', 'address'];
      Object.keys(args).forEach(key => {
        if (possibleKeys.includes(key)) {
          args[key] = args[key].toLowerCase();
          if (args[key].startsWith('0x')) {
            args[key] = args[key].slice(2);
          }
        }
      });
    }

    return args;
  }

  /**
   * Get ignored field lists that need to be excluded when build graphql queries
   * These fields are ignored because they may cause query failure
   *
   * @param {Type} t
   * @return Array
   */
  _getIgnoreFields() {
    const ignoreFields = [];
    ignoreFields.push('miner.txsSent', 'miner.txsReceived');
    ignoreFields.push('to.txsSent', 'to.txsReceived');
    ignoreFields.push('from.txsSent', 'from.txsReceived');
    ignoreFields.push('data.miner.txsSent', 'data.miner.txsReceived');
    ignoreFields.push('data.to.txsSent', 'data.to.txsReceived');
    ignoreFields.push('data.from.txsSent', 'data.from.txsReceived');
    ignoreFields.push('data.txsSent.data.parent', 'data.txsReceived.data.parent');
    ignoreFields.push('parent', 'data.parent.transactions', 'transactions.data.parent');
    ignoreFields.push('data.author', 'data.transactions.data.parent');

    const fields = Object.keys(
      ignoreFields.reduce((memo, x) => {
        memo[x] = true;
        return memo;
      }, {})
    );

    return fields;
  }
}

module.exports = OCAPBaseClient;
