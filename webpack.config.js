const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require("webpack")
const path = require('path')
const config = require('./config.json')
const port = config.port || 5000

module.exports = {
  entry: [
      './app/index.jsx'
    ]
  ,
  output: {
    path: __dirname + "\\build",
    filename: 'index.js',
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
    new ExtractTextPlugin("[name].css"),
  ]
}
