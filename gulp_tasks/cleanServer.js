'use strict';
const gulp = require('gulp');
const gutil = require('gulp-util');
const del = require('del');

const conf = require('../conf/gulp.conf');
// ToDo: use Configuration for server-path

gulp.task('cleanServer', clean);

function clean() {
  // Synchrones Lösches um Konflikte zu vermeiden
  del.sync(['distserver/*']);
  gutil.log('dir distserver is cleaned');
}
clean.description=`del *.* from :build-dir distServer`;
