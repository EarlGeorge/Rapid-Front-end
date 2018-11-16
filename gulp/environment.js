const argv = require('yargs').argv;
const log = require('fancy-log');
const c = require('ansi-colors');


const packageJSON = require('../package.json');

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';

const isDevelopment = argv.dev || false;
const isApi = argv.api || false;

/* check the minimal supported version of node */
function check() {
  const nodeVersion = process.version.substr(1, 5);
  const PackageJsonVersion = packageJSON.engines.node;

  const checkPackageJSON =  parseFloat (PackageJsonVersion);
  const checkInstalledV = parseFloat (nodeVersion);

  if ( checkInstalledV <= checkPackageJSON ) {
    log(
      (c.red(`Node version ${checkPackageJSON} required, Please update.`)),
      (c.cyan(`You are using ${checkInstalledV}`)),
    );
    process.exit(1);
  } else {
    console.log(`Starting`);
  } 
}

module.exports = {
  type: isDevelopment ? DEVELOPMENT : PRODUCTION,
  isDevelopment,
  isProduction: !isDevelopment,
  isApi,
  check,
};
