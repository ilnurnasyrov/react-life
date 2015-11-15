var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

module.exports = {
  entry: "./app/application.js",
  output: {
    path: "build",
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Game of Life"
    })
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
          loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  }
};
