const obfuscator = require('./webpack.obfuscator.config');

module.exports = {
  devtool: 'source-map',
  target: 'electron-main',
  entry: './src/index.js',
  module: {
    rules: require('./webpack.rules'),
  },

}