'use strict';
const gulp = require('gulp');
const gtslint = require('gulp-tslint');
const gutil = require('gulp-util');

const conf = require('../conf/gulp.conf');

const globPlatternClient ='./src/**/*.ts';

console.log ();
gulp.task('lint_client', lint);

function lint() {
gutil.log(globPlatternClient);
return gulp.src(globPlatternClient)
  .on ('error',gutil.log)
  .pipe(gtslint({
    formatter: 'verbose'
  }))
  .pipe(gtslint.report())
}
lint.description='tslint:server sourcen';
