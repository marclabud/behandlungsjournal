'use strict';
const gulp = require('gulp');
const gutil = require('gulp-util');
const gsass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', sass);

function sass() {
  gulp.src('./src/sass/bootstrap.scss')
    .pipe(sourcemaps.init())
    .pipe(gsass().on('error', gutil.log))
    .pipe(sourcemaps.write('./maps'))
    .on('error', gutil.log)
    .pipe(gulp.dest('./src'));
}
sass.description=`SASS-Files Compilation`;
