'use strict';
const gulp = require('gulp');
const gutil = require('gulp-util');
const del = require('del');


gulp.task('clean:dist_server', clean);

function clean() {
    //
    del.('dist_server/*');
    gutil.log('dir dist_server is cleaned');
}
clean.description=`del *.* from : dist_server (distribution Express-Server)`;
