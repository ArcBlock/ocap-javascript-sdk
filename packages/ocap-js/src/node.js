const crypto = require('crypto');
const qs = require('querystring');
const EventEmitter = require('events');
const { Socket } = require('phoenix-channels');
const OCAPBaseClient = require('./base');

const sortObjectKeys = params => {
  return Object.keys(params)
    .filter(x => !!params[x])
    .sort()
    .reduce((obj, key) => {
      if (params[key] && typeof params[key] === 'object') {
        obj[key] = sortObjectKeys(params[key]);
      } else {
        obj[key] = params[key];
      }
      return obj;
    }, {});
};

class OCAPClient extends OCAPBaseClient {
  _getSocketImplementation() {
    return Socket;
  }

  _getSocketOptions() {
    return {};
  }

  _getEventImplementation() {
    return EventEmitter;
  }

  _getAuthHeaders(query, variables) {
    const { accessKey, accessSecret } = this.config;
    if (!accessKey || !accessSecret) {
      return {};
    }

    const timestamp = Math.floor(Date.now() / 1000);
    const hmac = crypto.createHmac('sha256', accessSecret);

    // Force param order to achieve consistent signature
    const params = { accessKey, query: { query, variables }, timestamp };
    const sortedParams = sortObjectKeys(params);
    sortedParams.query = JSON.stringify(sortedParams.query);

    hmac.update(qs.stringify(sortedParams));

    const digest = hmac.digest('base64');
    return {
      Authorization: `AB1-HMAC-SHA256 access_key=${accessKey},timestamp=${timestamp},signature=${digest}`,
    };
  }
}

module.exports = OCAPClient;
