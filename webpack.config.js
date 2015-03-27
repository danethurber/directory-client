var path = require('path');

var config = require('config');
var webpack = require('webpack');

var ManifestPlugin = require('webpack-manifest-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [
      path.join(config.assets.entryDir, 'javascripts', 'app'),
      path.join(config.assets.entryDir, 'stylesheets', 'app')
    ]
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
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass?outputStyle=expanded')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('[name].[hash].css'),
    new ManifestPlugin()
  ],

  resolve: {
    root: [
      path.join(__dirname, 'node_modules')
    ],
    extensions: ['', '.js', '.scss', '.css']
  }
};
