require('dotenv').load();

var path = require('path');

var paths = {};
paths.root = path.join(__dirname, '..')

module.exports = {
  paths: paths,

  assets: {
    entryDir: path.join(paths.root, 'client'),
    publicPath: '/assets/',
    publicDir: path.join(paths.root, 'public/assets')
  },

  server: {
    port: process.env.PORT || 3000
  },

  api: {
    protocol: process.env.API_PROTOCOL || 'http',
    domain: process.env.API_DOMAIN || 'localhost:3001'
  }
};
