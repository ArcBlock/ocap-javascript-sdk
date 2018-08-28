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
}

module.exports = OCAPClient;
