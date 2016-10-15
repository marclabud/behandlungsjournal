'use strict';
const gulp = require('gulp');
const gutil = require('gulp-util');
const seriell = require('gulp-sequence');

gulp.task('build',  function (cb) {
  seriell('clean:server', 'ts', 'lint:server')(cb);
});


