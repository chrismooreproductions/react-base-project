const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.app.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    proxy: { '/api/**': { target: 'http://localhost:3001', secure: false } },
  },
});
