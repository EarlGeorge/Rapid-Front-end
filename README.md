# **Rapid** Front-end development using **Bootstrap**. 
 Automated workflow, using JS Task runner and advanced configuration around Bootstrap.

 small drawback, depends on your backend 'Language' framework you will need to make it compatible as it uses just '**plain HTML**' here! Otherwise use **[material-ui](https://github.com/mui-org/material-ui)**, or **[Styled-components](https://github.com/styled-components/styled-components)** with 'SPA' [React](https://reactjs.org/) or [Vue](https://vuejs.org/)

---
## Getting started:
### Setup
1. Clone the repository.

2. Install dependencies.

- **Default listening port numbers are** `5000` & `5003` if you already use this default port numbers, you can change it in: `./gulp/config.js` :: `PORT` & `API_PORT`

## Development workflow:
To start your development process, Run `gulp --dev` in the terminal. This will prepare the project for the work and launch watch tasks to update the files on-the-fly as you work.

**Mocking REST API** If you want to start also an API mocking, Run `gulp --dev --api`. This server will run on different port which is defined in `gulp/config.js` as `API_PORT`.

## Production build:
Production-ready files, Run `gulp build` and grab built assets from `dist` folder.

**Service worker** if you need SW file, Run `gulp generate-sw` and grab it from `dist/js` folder.

### Remove built
If you want to revert back to a fresh state without built files, run
`gulp clean`.  It will remove the `dist/` folder.

# Technologies:
| **Tech** | **Description** |**Using** |
|----------|-------|----|
| **HTML** | plain HTML | HTML
| **CSS**  | Compiled CSS styles using Preprocessor SASS / with variables, mixins, functions.. | [Bootstrap](https://getbootstrap.com/), [SASS](http://sass-lang.com/) <br> [PostCSS](https://github.com/postcss/postcss) ([autoprefixer](https://github.com/postcss/autoprefixer), [cssnano](https://github.com/ben-eb/cssnano))
| **JavaScript** | Compiled (ES6)+ to ES5. Enjoy the new version of JavaScript today. & even Jquery if you need?! | [Babel](http://babeljs.io/), [Browserify](http://browserify.org) <br> [ESLint](http://eslint.org) <br>[Watchify](https://github.com/substack/watchify) <br> [Uglify](https://github.com/terinjokes/gulp-uglify)
| **Offline-first** | Progressive Web App (PWA), Service worker | [workbox](https://developers.google.com/web/tools/workbox/), or [sw-precache](https://github.com/GoogleChromeLabs/sw-precache)
| **DevServer** | Lightweight development server that supports synchronized testing and debugging on multiple devices and much more. | [Browsersync](https://www.browsersync.io/)
| **Mocking REST API** | Quick fake back-end for prototyping! 'If you still have not completed back-end', Or if you use cloud environment and don't want to be overcharged sending too many request on the server in your development mode..   | [Json-server](https://github.com/typicode/json-server), [Faker](https://github.com/marak/Faker.js)
| **Unit Testing** | Automated tests with built-in expect assertions, - TDD/BDD | [Jest](https://jestjs.io)
| **Images-SVG** | Slightly reduce your pictures size 'jpg,jpeg,png,gif' & 'SVG' files bundler. |[imagemin](https://github.com/sindresorhus/gulp-imagemin),[svgmin](https://github.com/ben-eb/gulp-svgmin) <br> [SVGStore](https://github.com/w0rm/gulp-svgstore)
| **Task Runners** | Automated workflow .| [Gulp](https://gulpjs.com)

# Project structure:
* ### dist/

    **Production folder**

    Generated and changed automatically by Gulp tasks. Contains production-ready compiled CSS (`dist/css`), JavaScript (`dist/js`), Images (`dist/svg`) & HTML.

* ### gulp/
    * **tasks/**
        The list of all tasks. Each task is responsible for handling automation for different file types. 

    * **config.js**
        Global configuration, consisting of declaring `folder/file paths`. 

    * **environment.js**
        Working environment (`DEVELOPMENT` or `PRODUCTION`).

* ### src/
    **Development folder**.
    * **api/** : **REST API.**
        * **api.js** Entry point, mocking server: 'Random data'
    * **js/** : **JavaScript source files.**
        * **test/** Unit testing using 'jest' - TDD/BDD.
        * **jquery/** You can use Pointless Jquery / plugins-components if you need it.
        * **modules/** 'Vanilla JS' ES6 ++++ .
        * **app.js** Entry point for JS bundling.
        * **registerServiceWorker.js**  PWA.
    * **svg/** : **Includes - 'jpg', 'png', 'svg', 'gif', 'mp4'.**
        * **icons/** : **SVG files**.
             * **all-in-one/** Folder for SVG sprites, where each nested folder represents a sprite name, combines svg files into one with symbol elements - 'SVG bundler'.
             * **example.svg** Single SVG file, optimized and outputted individually for direct usage.
        * **example.jpg** Background pictures.
    * **styles/** : **Style Sheets 'SASS'**
        * **variables.scss** Custom variables, mixins, functions, media queries/breakpoints.
        * **bootstrap/** Importing Bootstrap components.
        * **pages/** Custom components of a page.
        * **main.scss** Entry point for SCSS compiling. Also contains **global components and @keyframes**.

* ### /Root files

   - #### .babelrc
   
     [Babel](https://babeljs.io/) Primary configuration used to specify presets for JavaScript compiling.

  - #### .eslintrc.js

    [Eslint](https://eslint.org/) Primary configuration used to specify and configure rules of Linting.
    
## Feedback
    When you have encountered a bug, or have a useful suggestion how to improve development 
    [Create a new issue](/earlgeorge/Rapid-Front-end/issues).