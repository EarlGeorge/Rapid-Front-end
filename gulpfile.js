const gulp = require('gulp');
const requireDir = require('require-dir');
const config = require('./gulp/config');

config.environment.check();
process.env.NODE_ENV = config.environment.type;

/* Your tasks entry point */
requireDir('./gulp/tasks');
gulp.task('default', ['serve']);
gulp.task('build', ['prepare']);
