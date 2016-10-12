const gulp = require('gulp');
const tslint = require('gulp-tslint');

const conf = require('../conf/gulp.conf');

gulp.task('tslint', lint);

function lint() {
  return gulp.src(conf.path.src('**/*.ts'))
    .pipe(tslint())
    .pipe(tslint.report('verbose'))
}
