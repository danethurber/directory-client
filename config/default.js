require('dotenv').load();

var path = require('path');

module.exports = {
  assets: {
    entryDir: path.join(__dirname, '../client'),
    publicPath: '/assets/',
    publicDir: path.join(__dirname, '../public/assets')
  },
  server: {
    port: process.env.PORT || 3000
  }
};
