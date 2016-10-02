/* ==========================================================================
 * ./bin/clean.js
 *
 * Clean environment
 * ========================================================================== */

const argv = require('yargs').argv;
const path = require('path');
const Promise = require('bluebird');
const rimraf = require('rimraf');

const rimrafPromises = [
  new Promise((resolve, reject) => {
    rimraf(path.resolve(__dirname, '..', 'dist'), (err) => {
      if (err) {
        reject(err);
      }

      resolve('dist');
    });
  })
];

if (argv.slate) {
  rimrafPromises[1] = new Promise((resolve, reject) => {
    rimraf(path.resolve(__dirname, '..', 'node_modules'), (err) => {
      if (err) {
        reject(err);
      }

      resolve('node_modules');
    });
  });
}

return Promise.all(rimrafPromises).then((cleaned) => {
  console.log(`Cleaned ${cleaned.join(', ')}`);
  process.exit(0);
}).catch((err) => {
  console.error(err);
  process.exit(1);
});

