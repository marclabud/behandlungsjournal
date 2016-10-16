'use strict';
const gulp = require('gulp');
const gutil = require('gulp-util');

const conf = require('../conf/gulp.conf');

const globPatternWatch ='/**/*.ts';

gulp.task('watch', watch);

function watch() {
  gutil.log(conf.paths.srcServer+ globPatternWatch);
  gulp.watch(conf.paths.srcServer+ globPatternWatch,['build_server'] );
}
watch.description='watch';
