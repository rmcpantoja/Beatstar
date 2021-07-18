const obfuscator = require('./webpack.obfuscator.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { config } = require('dotenv');

module.exports = async(env) => {

  const configuration = {
    devtool: 'source-map',
    entry: './src/electron/main.js',
    // Put your normal webpack config below here
    module: {
      rules: require('./webpack.rules'),
      plugins: [
        new CopyWebpackPlugin({
          patterns: [
            {
              from: 'sounds/*',
              to: 'sounds/[name][ext]'
            },
            {
              from: 'documentation/*',
              to: '[name][ext]'
            },
          ],
        })
      ]
    },
  };
  if (env.NODE_ENV !== 'development') {
    config.plugins.push(obfuscator);
  }
  console.log(' hi webpack');
  return configuration;
};