const gulp = require('gulp');
const path = require('path');
const fs = require('fs');
const gulpif = require('gulp-if');
const rename = require('gulp-rename');
const svgmin = require('gulp-svgmin');
const svgstore = require('gulp-svgstore');
const c = require('ansi-colors');
const log = require('fancy-log');

const config = require('../config');
const DEVELOPMENT = config.environment.isDevelopment;


/* SVG sprites */
function getSprites() {
  const sprites = [];

  function getSpriteFolders(SVG_FOLDER) {
    return fs.readdirSync(SVG_FOLDER).filter(file => fs.statSync(path.join(SVG_FOLDER, file)).isDirectory());
  }
  const spriteFolders = getSpriteFolders(config.SVG_ICON);

  spriteFolders.forEach((spriteName) => {
    let spriteGlob = path.resolve(`${config.SVG_ICON}/${spriteName}/*.svg`);
    spriteGlob = path.relative(process.cwd(), spriteGlob);
    sprites.push({ name: spriteName, glob: spriteGlob });
  });

  return sprites;
}

/* Bundle SVG sprites, single SVG images output with ID's inside. */
gulp.task('svg:sprite', () => {
  function bundle(sprite) {
    log(`Bundling '${(c.green(sprite.name))}' from ${(c.magenta(`(${sprite.glob})`))}`);

    return gulp.src(sprite.glob)
      .pipe(svgmin((file) => {
        const prefix = path.basename(file.relative, path.extname(file.relative));
        return {
          plugins: [{
            cleanupIDs: {
               prefix: `${prefix}-`,
               minify: true,
            },
          }],
        };
      }))
      .pipe(svgstore({
        inlineSvg: true,
      }))
      .pipe(rename((file) => {
        file.basename = sprite.name;
        return file;
      }))
      .pipe(gulp.dest(config.SVG_BUILD_SPRITES));
  }

  const sprites = getSprites();
  return sprites.forEach(sprite => bundle(sprite));
});

gulp.task('svg', ['svg:sprite']);
