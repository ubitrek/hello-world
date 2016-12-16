var webpack = require('webpack');
var path = require('path');

var outputPath = __dirname + '/public';

module.exports = {
  debug: 'true',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: outputPath,
    pathinfo: "true",
    publicPath: 'http://localhost/scripts/',
    filename: 'bundle.js',
    sourceMapFilename: "bundle.js.map"
  },
  devServer: {
    inline: 'true',
    contentBase: './public',
    port: 80
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.css$|\.jpe?g$|\.gif$|\.png|\.ico$/, loader: 'file?name=[path][name].[ext]' },
      { test: /\.html$/, loader: 'raw' }
    ]
  }
}
