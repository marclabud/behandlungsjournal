'use strict';
const gulp = require('gulp');
const gutil = require('gulp-util');
const seriell = require('gulp-sequence');

gulp.task('build_server', function (cb) {
  seriell('clean:server', 'ts', 'lint_server')(cb);
});


