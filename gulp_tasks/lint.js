'use strict';
const gulp = require('gulp');
const tslint = require('gulp-tslint');
const conf = require('../conf/gulp.conf');
// ToDO: Setup gulp-tslint for right  configuration
// I guess he doesnt find the tsconfig.json
//tslint commandline works with:
// "tslint --project src/tsconfig.json" for client
// "tslint --project server/tsc/tsconfig.json" for server
//
console.log();
gulp.task('lint:server', lint);

function lint() {
  return gulp.src('*.ts')
    .pipe(tslint({
      project: 'src/tsconfig.json',
      formatter: 'verbose'
    }))
}

lint.description = 'tslint:server sourcen';
