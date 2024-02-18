const webpack = require("webpack");
const path = require("path");
const port = process.env.port || 5000;
const htmlwebpackplugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/pages/global.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
    ],
  },
  devServer: {
    port: port,
    open: true,
    historyApiFallback: false,
  },
  plugins: [new htmlwebpackplugin({ template: "./public/index.html" })],
};