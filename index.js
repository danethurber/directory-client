require('babel/register');
require('dotenv').load();

var server = require('./server');

server.start(function() {
  console.info('Server running at: ', this.info.uri);
}.bind(server));
