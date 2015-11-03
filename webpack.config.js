const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require("webpack")
const path = require('path')

module.exports = {
  entry: {
    index: './app/index.jsx',
    // index: "./app/index.less"
  },
  output: {
    path: __dirname + "/build",
    filename: '[name].js'
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: [ 'babel-loader?stage=0' ],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css!less?outputStyle=expanded")
        // loader: "style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!less?outputStyle=expanded&sourceMap"
      },
      {
        test: /\.js$/,
        loaders: [ 'react-hot', 'babel' ]
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
}
