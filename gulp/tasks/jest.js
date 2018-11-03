const gulp = require('gulp');
const jest = require('jest-cli');

const config = require('../config');

gulp.task('jest', () => jest.runCLI({ config: config.DEVELOPMENT_BASE }, '.', (done) => {
  done();
}));
