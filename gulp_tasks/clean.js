'use strict';

const gulp = require('gulp');
const del = require('del');

const conf = require('../conf/gulp.conf');

gulp.task('clean:server', clean);

function clean() {

  return del([conf.paths.dist + '/controller',conf.paths.dist + '/models', conf.paths.dist + '/routes', conf.paths.dist + '/*.js']) ;
}
clean.description='delete dist dir server';
