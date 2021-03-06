import path from 'path';

import config from 'config';
import Hapi from 'hapi';
import handlebars from 'handlebars';


let server = new Hapi.Server();

server.connection({ port: config.server.port });

server.register({
    register: require('good'),
    options: {
      reporters: [{
        reporter: require('good-console'),
        args:[{ log: '*', response: '*' }]
      }]
    }
}, function (err) {
  if (err)
    console.error(err);
});

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
  method: '*',
  path: '/api/{path*}',
  handler: {
    proxy: {
      mapUri: function(req, cb){
        let {protocol, domain} = config.api;
        let path = req.params.path;
        let query = req.url.search ? req.url.search : '';

        cb(null, `${protocol}://${domain}/${path}${query}`);
      },
      passThrough: true,
      redirects: 2
    }
  }
});

server.route({
  method: '*',
  path:'/{p*}',
  handler (request, reply) {
    reply.view('index');
  }
});

export default server;
