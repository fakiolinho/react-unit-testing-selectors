const webpack = require('webpack');
const cssnano = require('cssnano');

module.exports = require('./webpack.base.config')({
  entry: [
    'webpack-hot-middleware/client',
    './index.jsx',
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins() {
              return [
                cssnano({
                  autoprefixer: {
                    add: true,
                    remove: true,
                    browsers: ['last 2 versions'],
                  },
                  discardComments: {
                    removeAll: true,
                  },
                  discardDuplicates: true,
                  discardUnused: false,
                  mergeIdents: false,
                  reduceIdents: false,
                  safe: true,
                  sourcemap: true,
                }),
              ];
            },
          },
        },
        'sass-loader',
      ],
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: 'file-loader',
    }, {
      test: /\.(eot|woff|woff2|svg|ttf)([?]?.*)$/,
      use: 'file-loader',
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});
