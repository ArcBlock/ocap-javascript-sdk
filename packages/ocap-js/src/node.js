const crypto = require('crypto');
const qs = require('querystring');
const EventEmitter = require('events');
const { Socket } = require('phoenix-channels');
const OCAPBaseClient = require('./base');

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

  _getAuthHeaders(query) {
    const { accessKey, accessSecret } = this.config;
    if (!accessKey || !accessSecret) {
      return {};
    }

    const timestamp = Math.floor(Date.now() / 1000);
    const hmac = crypto.createHmac('sha256', accessSecret);

    // Force param order to achieve consistent signature
    const params = { accessKey, query, timestamp };
    const sortedParams = Object.keys(params)
      .sort()
      .reduce((obj, key) => {
        obj[key] = params[key];
        return obj;
      }, {});

    hmac.update(qs.stringify(sortedParams));

    const digest = hmac.digest('base64');
    return {
      Authorization: `AB1-HMAC-SHA256 access_key=${accessKey},timestamp=${timestamp},signature=${digest}`,
    };
  }
}

module.exports = OCAPClient;
