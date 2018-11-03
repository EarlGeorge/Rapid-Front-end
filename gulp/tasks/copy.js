const gulp = require('gulp');
const gulpif = require('gulp-if');
const browserSync = require('browser-sync');
const merge = require('merge-stream');

const config = require('../config');

const DEVELOPMENT = config.environment.isDevelopment;

gulp.task('copy', () => gulp.src(`${config.HTML_ALL}/*.html`)
  .pipe(gulpif(DEVELOPMENT, browserSync.stream()))
  .pipe(gulp.dest(`${config.HTML_BUILD}/`)));
