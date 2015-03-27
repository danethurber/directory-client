import path from 'path';

import config from 'config';
import Hapi from 'hapi';
import handlebars from 'handlebars';


let server = new Hapi.Server();
server.connection({ port: config.server.port });

server.views({
  engines: {
    'html': {
      module: handlebars,
      compileMode: 'sync'
    }
  },
  compileMode: 'async',
  relativeTo: __dirname,
  path: './views',
  layout: 'application',
  layoutPath: './views/layouts',
  helpersPath: './views/helpers'
});

server.route({
  method: 'GET',
  path: config.assets.publicPath + '{param*}',
  handler: {
    directory: {
      path: config.assets.publicDir
    }
  }
});

server.route({
  method: 'GET',
  path:'/',
  handler (request, reply) {
    reply.view('index');
  }
});

export default server;
