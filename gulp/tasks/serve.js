const gulp = require('gulp');
const gwatch = require('gulp-watch');
const browserSync = require('browser-sync');
const copyToClipboard = require('copy-paste').copy;
const runSequence = require('run-sequence');
const c = require('ansi-colors');
const log = require('fancy-log');



const config = require('../config');
const DEVELOPMENT = config.environment.isDevelopment;
const port = config.PORT;

gulp.task('serve', ['prepare'], () => {
  const baseDir = DEVELOPMENT ? [
    config.BUILD_BASE,
    config.DEVELOPMENT_BASE,
    
  ] : config.BUILD_BASE;

  browserSync({
    port,
    server: { baseDir, index: "about.html" },
    open: false,
    notify: false,
  }, (unknown, bs) => {
    const finalPort = bs.options.get('port');
    copyToClipboard(
      `localhost:${finalPort}`,
      () => log(c.bold.blueBright('Local server address has been copied to your clipboard')),
    );
  });

  const watch = (glob, tasks) => gwatch(glob, () => runSequence(...tasks));

  if (DEVELOPMENT) {
    watch(config.HTML_ALL, ['copy']);
    watch(config.CSS_ALL, ['styles']);
    watch(config.JS_ALL, ['js', 'eslint', 'jest']);
    watch(config.API, ['api-reload']);
    watch(config.IMAGES_ALL, ['images']);
    watch(config.SVG_SPRITE_ALL, ['svg']);
  }
});
