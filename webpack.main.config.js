const obfuscator = require('./webpack.obfuscator.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  devtool: 'source-map',
  target: 'node',
  entry: './src/electron/main.js',
  module: {
    rules: require('./webpack.rules'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'sounds/*',
          to: '.webpack/renderer/sounds/[name][ext]'
        },
        {
          from: 'documentation/*',
          to: '.webpack/renderer/[name][ext]'
        },
      ],
    })
  ]
}