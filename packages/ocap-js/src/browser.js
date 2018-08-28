const EventEmitter = require('wolfy87-eventemitter');
const { Socket } = require('phoenix');
const OCAPBaseClient = require('./base');

class OCAPBrowserClient extends OCAPBaseClient {
  _getSocketImplementation() {
    return Socket;
  }

  _getSocketOptions() {
    // eslint-disable-next-line
    return { transport: WebSocket };
  }

  _getEventImplementation() {
    return EventEmitter;
  }
}

module.exports = OCAPBrowserClient;
