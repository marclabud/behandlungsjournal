'use strict';
const gulp = require('gulp');
const gutil = require('gulp-util');
const gts = require('gulp-typescript'); // Gulp typescript 3.0.2
const conf = require('../conf/gulp.conf.js');

const tsProject = gts.createProject(conf.tsconfig.serverpath);

gulp.task('tsdemo', tsdemo);

function tsdemo() {
    gutil.log("tsc call started");
    gulp.src("server/test/**/*.ts")
        .on('error', gutil.log)
        .pipe(tsProject())
        .pipe(gulp.dest(conf.paths.distDemo));
}
tsdemo.description = `Demodata: JS-Generierung mit Typescript (tsconfig.json)`;

