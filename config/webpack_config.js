var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/application.js",
  output: {
      path: "build",
      filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React TODO"
    })
  ],
  module: {
    loaders: [
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
