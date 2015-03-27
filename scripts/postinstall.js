require('dotenv').load();

var exec = require('child_process').exec;
var env = process.env.NODE_ENV;

if (['development', 'production'].indexOf(env) > -1) {
  console.info('Compiling Assets for', env, '\n');

  exec('./node_modules/webpack/bin/webpack.js --colors --progress', function(err, stdout){
    console.info(stdout);
  });
}
