module.exports = function(env, argv) {
  const config = {
  target: 'electron-renderer',
  entry: './src/main.js',
  output: './bundle.js',
//  devtool: 'source-map',
};
return config;
}