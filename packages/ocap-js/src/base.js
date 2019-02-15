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
    ignoreFields.push(/\.raw$/, /.logs$/, /\.logsBloom$/);
    ignoreFields.push(
      'transactions.data.raw',
      'transactions.data.parent',
      'transactions.data.logsBloom'
    );
    ignoreFields.push(
      'txsReceived.data.raw',
      'txsReceived.data.parent',
      'txsReceived.data.logsBloom'
    );
    ignoreFields.push('miner.transactions');
    ignoreFields.push('to.transactions');
    ignoreFields.push('from.transactions');
    ignoreFields.push('data.miner.transactions');
    ignoreFields.push('data.to.transactions');
    ignoreFields.push('data.from.transactions');
    ignoreFields.push('data.transactions.data.parent');
    ignoreFields.push('parent', 'data.parent.transactions', 'transactions.data.parent');
    ignoreFields.push('data.author', 'data.transactions.data.parent');
    ignoreFields.push('uncles', 'data.uncles', 'transactions.data.uncles');
    ignoreFields.push('logs', 'data.logs', 'transactions.data.logs');
    ignoreFields.push('traces', 'data.traces', 'transactions.data.traces');
    ignoreFields.push('creates', 'data.creates', 'transactions.data.creates');

    return ignoreFields;
  }
}

module.exports = OCAPBaseClient;
