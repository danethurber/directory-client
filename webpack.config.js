var path = require('path');

var config = require('config');
var webpack = require('webpack');

var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {
    app: path.join(config.assets.entryDir, 'javascripts', 'app')
  },

  output: {
    publicPath: config.assets.publicPath,
    path: config.assets.publicDir,
    filename: '[name].[hash].js',
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

  plugins: [
    new ManifestPlugin()
  ],

  resolve: {
    extensions: ['', '.js']
  }
};
