const environment = require('./environment');

const
  /* General */
  PORT = 5000,
  API_PORT = 5003,
  TITLE = 'Rapid Front-end Development',

  /* Paths */
  NPM = './node_modules',
  DEVELOPMENT_BASE = './src',
  BUILD_BASE = './dist',

  /* Gulp */
  GULP_ALL = ['./gulpfile.js', './gulp/**/*.js'],

  /* CSS */
  CSS_BASE = `${DEVELOPMENT_BASE}/styles`,
  CSS_ENTRY = `${CSS_BASE}/main.scss`,
  CSS_ALL = `${CSS_BASE}/**/*.scss`,
  CSS_BUILD = `${BUILD_BASE}/css`,

  /* JavaScript */
  JS_BASE = `${DEVELOPMENT_BASE}/js`,
  JS_MAIN_FILENAME = 'app.js',
  JS_ENTRY = `${JS_BASE}/${JS_MAIN_FILENAME}`,
  JS_ALL = `${JS_BASE}/**/*.js`,
  JS_BUILD = `${BUILD_BASE}/js`,

  /* API mocking server */
  API = `${DEVELOPMENT_BASE}/api/api.js`,

  /* HTML */
  HTML_ALL = `${DEVELOPMENT_BASE}/html`,
  HTML_BUILD = `${BUILD_BASE}/`,

  /* Images source  #'svg','jpg','png','mp4' */
  SVG_BASE = `${DEVELOPMENT_BASE}/svg`,
  SVG_BUILD = `${BUILD_BASE}/svg`,

  /* SVG ICONS */
  SVG_ICON = `${SVG_BASE}/icons`,
  SVG_SINGLE_ALL = `${SVG_ICON}/*.svg`,
  SVG_SPRITE_ALL = [
      `${SVG_ICON}/**/*.svg`,
      `${SVG_SINGLE_ALL}`
  ],
  SVG_ICON_BUILD = `${SVG_BUILD}/icons`,
  SVG_BUILD_SPRITES = `${SVG_ICON_BUILD}/sprites`,
 
  /* Images and Videos */
  IMAGES_ALL = [
    `${SVG_BASE}/**/*.{jpg,jpeg,png,gif,mp4}`,
    `${SVG_SINGLE_ALL}`,
  ];

module.exports = {

  environment,
  
  PORT,
  API_PORT,
  TITLE,

  NPM,
  DEVELOPMENT_BASE,
  BUILD_BASE,
  GULP_ALL,

  CSS_BASE,
  CSS_ENTRY,
  CSS_ALL,
  CSS_BUILD,

  JS_BASE,
  JS_MAIN_FILENAME,
  JS_ENTRY,
  JS_ALL,
  JS_BUILD,

  API,

  HTML_ALL,
  HTML_BUILD,

  SVG_BASE,
  SVG_BUILD,
  SVG_ICON,

  IMAGES_ALL,
  SVG_SINGLE_ALL,
  SVG_SPRITE_ALL,
  SVG_BUILD_SPRITES

};
