const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './dist',
    port: 3000,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};