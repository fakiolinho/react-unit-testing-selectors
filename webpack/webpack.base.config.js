const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = options => ({
  entry: options.entry,
  output: Object.assign({
    filename: 'bundle.js',
    path: resolve(__dirname, '../dist'),
    publicPath: '/',
  }, options.output),
  context: resolve(__dirname, '../client'),
  devtool: 'inline-source-map',
  module: options.module,
  resolve: {
    modules: [resolve(__dirname, '../client'), 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  plugins: options.plugins.concat([
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: '../dist/index.html',
    })
  ]),
});
