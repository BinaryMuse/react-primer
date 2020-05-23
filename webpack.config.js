const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin

const isProd = process.env.NODE_ENV === "production"

module.exports = {
  cache: true,
  mode: isProd ? "production" : "development",
  entry: {
    app: "./index.jsx",
    // vendor: ["react", "react-dom", "react-prism"],
  },
  output: {
    path: __dirname + "/build",
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.bundle.js",
  },
  optimization: {
    minimize: isProd,
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          enforce: true,
        },
      },
    },
    runtimeChunk: true,
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  // plugins: [new BundleAnalyzerPlugin()],
}
