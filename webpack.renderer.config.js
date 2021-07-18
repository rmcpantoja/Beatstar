const rules = require('./webpack.rules');
const { name } = require('./package.json');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  // Put your normal webpack config below here
  target: 'electron-renderer',
  devtool: 'source-map',
  module: {
    rules,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'sounds'),
          to: path.resolve(__dirname, '.webpack/renderer/sounds')
        },
        {
          from: path.resolve(__dirname, 'documentation'),
          to: path.resolve(__dirname, '.webpack/renderer')
        },
      ],
    })
  ]

};
