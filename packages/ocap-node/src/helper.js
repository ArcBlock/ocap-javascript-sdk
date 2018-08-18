const crypto = require('crypto');

const md5 = key =>
  crypto
    .createHash('md5')
    .update(key)
    .digest('hex');

module.exports = {
  md5,
};
