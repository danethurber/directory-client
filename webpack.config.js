var path = require('path');

var config = require('config');
var webpack = require('webpack');

var ManifestPlugin = require('webpack-manifest-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var env = process.env.NODE_ENV;

var webpackConfig = {
  devtool: 'inline-source-map',

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
        test: /[\/]angular\.js$/,
        loader: 'exports?angular'
      },
      {
        test: /[\/]angular-route\.js$/,
        loader: 'exports?angular.module(\'ngRoute\');'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass?outputStyle=expanded&includePaths[]=./node_modules/foundation/scss')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.html$/,
        loader: 'ng-cache?prefix=[dir]/[dir]'
      },
    ],
    postLoaders: []
  },

  plugins: [
    new ExtractTextPlugin('[name].[hash].css'),
    new ManifestPlugin()
  ],

  resolve: {
    root: [
      path.join(__dirname, 'node_modules')
    ],
    modulesDirectories: [
      path.join(__dirname, 'node_modules')
    ],
    extensions: ['', '.js', '.scss', '.css', '.html'],
  }
};

if(env === 'production') {
  webpackConfig.devtool = 'source-map';
  webpackConfig.plugins.push(new webpack.optimize.DedupePlugin());
  webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = webpackConfig;
