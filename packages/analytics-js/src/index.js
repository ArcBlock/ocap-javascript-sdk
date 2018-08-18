const BaseSDK = require('@arcblock/sdk-util');
const schema = require('./schema.json');

class AnalyticsSDK extends BaseSDK {
  constructor() {
    super({
      dataSource: 'analytics',
      httpBaseUrl: 'https://api.arcblock.io/analytics/playground',
      enableQuery: false,
      enableSubscription: false,
      enableMutation: true,
    });
  }

  _getSchema() {
    return schema;
  }

  _getIgnoreFields() {
    return [];
  }
}

module.exports = AnalyticsSDK;
