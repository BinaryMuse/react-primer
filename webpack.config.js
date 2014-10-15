var webpack = require("webpack");

module.exports = {
  cache: true,
  entry: {
    app: "./index.jsx",
    vendor: ["react/addons"]
  },
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  module: {
    loaders: [
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.jsx$/, loader: "jsx?harmony" }
    ]
  },
  plugins: [
    // require 'react/addons' when we require 'react'
    new webpack.NormalModuleReplacementPlugin(/^react$/, 'react/addons'),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ]
};
