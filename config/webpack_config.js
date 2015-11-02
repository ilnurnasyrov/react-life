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
  }
};
