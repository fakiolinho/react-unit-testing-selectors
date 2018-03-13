/* eslint-disable */
const { join } = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const autoprefixer = require("autoprefixer");

module.exports = merge(require("./webpack.base.config"), {
  entry: ["babel-polyfill", "./index.jsx"],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins() {
                return [
                  autoprefixer({
                    browsers: ["last 2 versions", "ie > 9"]
                  })
                ];
              }
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    port: 3001,
    contentBase: join(__dirname, "../dist"),
    historyApiFallback: false,
    hot: true
  }
});
