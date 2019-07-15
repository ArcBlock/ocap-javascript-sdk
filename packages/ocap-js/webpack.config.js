const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './dist/browser.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'OCAPClient',
    libraryTarget: 'window',
  },
};
