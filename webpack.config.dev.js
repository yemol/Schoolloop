var webpack = require("webpack")
var path = require("path")
var port = process.env.PORT || 8000

module.exports = {
  context: __dirname,
  entry: [
    'webpack-hot-middleware/client?path=/build/',
    './client.jsx'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: "/build/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: [ 'babel-loader?stage=0' ],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        // loader: ExtractTextPlugin.extract("style-loader", "css!less?outputStyle=expanded")
        loader: 'style!css?importLoaders=2&sourceMap!less?outputStyle=expanded&sourceMap'
      }
    ],
  },
  devtool: '#source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
};
