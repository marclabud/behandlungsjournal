'use strict';
const gulp = require('gulp');
const tslint = require('gulp-tslint');
const conf = require('../conf/gulp.conf');

console.log ();
gulp.task('lint:server', lint);

function lint() {
return gulp.src('server/src/**/*.ts')
  .pipe(tslint({
    formatter: 'verbose'
  }))
}

lint.description='tslint:server sourcen';
