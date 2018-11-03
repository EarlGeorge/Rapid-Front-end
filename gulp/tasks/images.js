const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const cached = require('gulp-cached');
const config = require('../config');

/* Optimize images */
/* Handles common images format (jpg, png, gif, mp4) and single SVG images */
gulp.task('images', () => gulp.src(config.IMAGES_ALL, { base: config.SVG_BASE })
  .pipe(cached('images'))
  .pipe(imagemin())
  .pipe(gulp.dest(config.SVG_BUILD)));
