const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './lib/browser.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'lib'),
  },
};
