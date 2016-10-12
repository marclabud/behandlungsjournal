'use strict';
const gulp = require('gulp');
const gutil = require('gulp-util');
const gts = require('gulp-typescript');
const tsProject = gts.createProject('../src/server/tsconfig.json');

const conf = require('../conf/gulp.conf');

gulp.task('tsc', tscServer);

function tscServer() {
  gutil.log("tsc aufruf");
  tsProject.src(conf.path.src)
    .on('error', gutil.log)
    .pipe(gts(tsProject))
    .pipe(gulp.dest(conf.path.dist()));
}
tsc.description=`ExpressServer: JS-Generierung mit Typescript (tsconfig.json)`;
