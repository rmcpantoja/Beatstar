const obfuscator = require('./webpack.obfuscator.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { config } = require('dotenv');

module.exports = async (env) => {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  const config = {
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
  return config
};