var HtmlWebpackPlugin = require("html-webpack-plugin");

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
