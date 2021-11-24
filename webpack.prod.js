const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "[name].[contenthash].bundle.js",
    assetModuleFilename: "images/[name].[hash][ext]",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [new MiniCSSExtractPlugin({ filename: "[name].[contenthash].css" })],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCSSExtractPlugin.loader, // 3. Extract css into files
          "css-loader", // 2. Turns css into javascript
          "sass-loader", // 1. Turns sass into css
        ],
      },
    ],
  },
});
