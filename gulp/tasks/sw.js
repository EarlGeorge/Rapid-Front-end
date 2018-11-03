const gulp = require('gulp');

const config = require('../config');

gulp.task('generate-sw', function(callback) {
    const swPrecache = require('sw-precache');
    const rootDir = config.BUILD_BASE;
   
    swPrecache.write(`${rootDir}/js/SW.js`, {
      staticFileGlobs: [rootDir + '/**/*.{js,pug,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
      stripPrefix: rootDir
    }, callback);
  });



