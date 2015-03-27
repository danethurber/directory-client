var config = require('config');
var fs = require('fs');
var path = require('path');

var manifestPath = path.join(config.assets.publicDir, 'manifest.json');
var publicPath = config.assets.publicPath;

var assetManifest = {};

fs.readFile(manifestPath, 'utf8', function (err, data) {
  if (err) return console.log(err);
  assetManifest = JSON.parse(data);
});

module.exports = function(assetPath) {
  return publicPath + assetManifest[assetPath];
};
