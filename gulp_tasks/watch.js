'use strict';
const gulp = require('gulp');
const gutil = require('gulp-util');

const conf = require('../conf/gulp.conf');

const globPatternWatch ='/**/*.ts';

gulp.task ('watch', ['watch_client','watch_server'],watch);

function watch() {
  gutil.log('watch all started');
}
watch.description='watch all project typescript sources';

gulp.task('watch_client', watch_client);
gulp.task('watch_server', watch_server);


function watch_client() {
  gutil.log(conf.paths.src+ globPatternWatch);
  gulp.watch(conf.paths.src+ globPatternWatch,['build_client'] );
}
watch_client.description='watch client sources';


function watch_server() {
  gutil.log(conf.paths.srcServer+ globPatternWatch);
  gulp.watch(conf.paths.srcServer+ globPatternWatch,['build_server'] );
}
watch_server.description='watch_server sources';

