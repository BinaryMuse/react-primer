var webpack = require("webpack");

var plugins = [
  // require 'react/addons' when we require 'react'
  new webpack.NormalModuleReplacementPlugin(/^react$/, 'react/addons'),
  new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
];

if (process.env.NODE_ENV === "production") {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  }));
}

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
      { test: /\.jsx$/, loader: "jsx?harmony&sourceMap" }
    ]
  },
  plugins: plugins
};
