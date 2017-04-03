const webpack = require('webpack');
const merge = require('webpack-merge');
const cssnano = require('cssnano');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(require('./webpack.base.config'), {
  entry: './index.jsx',
  module: {
    rules: [{
      test: /\.s?css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
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
                      browsers: ['last 2 versions', 'ie > 9'],
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
      }),
    }],
  },
  plugins: [
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 10000 }),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 15 }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        hoist_funs: true,
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        comparisons: true,
        warnings: true,
        loops: true,
        drop_debugger: true,
      },
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true,
    }),
  ],
});
