var path = require('path');

var config = require('config');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: path.join(config.assets.entryDir, 'javascripts', 'app')
  },

  output: {
    publicPath: config.assets.publicPath,
    path: config.assets.publicDir,
    filename: '[name].js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['', '.js']
  }
};
