'use strict';
const gulp = require('gulp');
const gutil = require('gulp-util');
const seriell = require('gulp-sequence');

gulp.task('init', function (cb) {
  seriell('sass', 'build_server', 'ng-cli-build-prod')(cb);
});
