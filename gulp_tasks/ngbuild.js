'use strict';

const gulp = require('gulp');
//uses gulp-exec
const exec = require('child_process').exec;

gulp.task('ng-cli-build', ngbuild);

function ngbuild() {
  exec('ng build', {maxBuffer: 1024 * 500}, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  })
}
ngbuild.description = 'Angular-Cli ng build';
