var path = require('path');
var config = require('config');

var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');

var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

gulp.task('default', function(){
  gutil.log('write some docs');
});

gulp.task('assets:clobber', function(done){
  del(['public/assets'], done);
});

gulp.task('assets:compile', function(done){
  webpack(webpackConfig, function(err, stats){
    if(err) throw new gutil.PluginError('webpack', err);
    gutil.log(stats.toString({ colors: true }));
    done();
  });
});

gulp.task('dev', ['assets:clobber', 'assets:compile'], function(){
  var browserSync = require('browser-sync');

  browserSync({
    proxy: 'localhost:3000',
    notify: false,
    port: 8080,
    files: 'public/manifest.json',
    ui: {
      port: 8081
    }
  });

  gulp.watch('client/**/*.scss', ['assets:compile']);
});
