const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  context: resolve(__dirname, '../client'),
  devtool: 'inline-source-map',
  resolve: {
    modules: [resolve(__dirname, '../client'), 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: 'file-loader',
    }, {
      test: /\.(eot|woff|woff2|svg|ttf)([?]?.*)$/,
      use: 'file-loader',
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: '../dist/index.html',
    }),
  ],
};
