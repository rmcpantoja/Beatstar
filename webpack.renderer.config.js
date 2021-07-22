module.exports = function(env, argv) {
  const config = {
  target: 'electron-renderer',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
};
return config;
}