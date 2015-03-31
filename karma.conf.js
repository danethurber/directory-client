var path = require('path');
var config = require('config');
var webpackConfig = require('./webpack.config');

var env = process.env.NODE_ENV;

var defaults = {
  basePath: config.paths.root,

  frameworks: ['jasmine'],

  browsers: ['Chrome'],

  files: [
    'client/javascripts/app.js',
    'node_modules/angular-mocks/angular-mocks.js',
    'client/javascripts/**/*.spec.js'
  ],

  preprocessors: {
    'client/javascripts/app.js': ['webpack'],
    '**/*.spec.js': ['babel']
  },

  webpack: {
    cache: true,
    resolve: webpackConfig.resolve,
    module: webpackConfig.module
  },

  exclude: [
    '*.html'
  ],

  reporters: ['progress', 'coverage'],

  coverageReporter: {
    dir: path.join(config.paths.root, 'coverage'),

    subdir: function (browser) {
      return browser.toLowerCase().split(/[ /-]/)[0];
    },

    reporters: [
      { type: 'cobertura', file: 'cobertura.xml' },
      { type: 'text', file: 'text.txt' },
      { type: 'text-summary', file: 'text-summary.txt' },
      { type: 'html' }
    ]
  },

  autoWatch: true,
  singleRun: false,

  colors: true
};

defaults.webpack.module.postLoaders = [{
  test: /\.js$/,
  exclude: /(.spec|vendor|node_modules)/,
  loader: 'istanbul-instrumenter'
}];

if(env === 'ci') {
  defaults.autoWatch = false;
  defaults.singleRun = true;
  defaults.reporters = ['spec'];
  defaults.browsers = ['PhantomJS'];
}

module.exports = function(karmaConfig) {
  defaults.logLevel = karmaConfig.LOG_INFO;
  karmaConfig.set(defaults);
};
