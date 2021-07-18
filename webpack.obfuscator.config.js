const WebpackObfuscator = require('webpack-obfuscator');

const obfuscator = new WebpackObfuscator({
  compact: true,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 1,
  debugProtection: true,
  disableConsoleOutput: true,
  selfDefending: true,
  simplify: true,
});

module.exports = obfuscator;
