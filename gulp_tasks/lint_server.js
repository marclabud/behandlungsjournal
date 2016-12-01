'use strict';
const gulp = require('gulp');
const gtslint = require('gulp-tslint');
const gutil = require('gulp-util');
const tslint = require("tslint");

const conf = require('../conf/gulp.conf');

const globPlatternServer = './server/src/**/*.ts';

console.log();
gulp.task('lint_server', lint);

function lint() {
  gutil.log(globPlatternServer);
  return gulp.src(globPlatternServer)
    .on('error', gutil.log)
    .pipe(gtslint({
      formatter: 'verbose'
    }))
    .pipe(gtslint.report())
}
lint.description = 'tslint:server sourcen';
