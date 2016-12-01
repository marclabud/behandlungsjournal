'use strict';
const gulp = require('gulp');
const gutil = require('gulp-util');
const gts = require('gulp-typescript'); // Gulp typescript 3.0.2
const conf = require('../conf/gulp.conf.js');

const tsProject = gts.createProject(conf.tsconfig.serverpath);

gulp.task('ts', tsc);

function tsc() {
  gutil.log("tsc call started");
  tsProject.src()
    .on('error', gutil.log)
    .pipe(tsProject())
    .pipe(gulp.dest(conf.paths.dist));
}
tsc.description = `ExpressServer: JS-Generierung mit Typescript (tsconfig.json)`;
