const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './lib/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'OCAPAnalytics',
    libraryTarget: 'window',
  },
};
