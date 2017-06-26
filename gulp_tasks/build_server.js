'use strict';
const gulp = require('gulp');
const gutil = require('gulp-util');
const seriell = require('gulp-sequence');

gulp.task('build_server', function (cb) {
  seriell('clean:server', 'ts','tsdemo')(cb);
  // lint_server removed due to error
});


