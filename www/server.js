/* ==========================================================================
 * ./www/server.js
 *
 * Start Server
 * ========================================================================== */
'use strict'; // eslint-disable-line strict

const path = require('path');

if (process.env.NODE_ENV === 'development') {
  const packageJSON = path.resolve(__dirname, '..', 'package.json');
  const config = packageJSON.babel;

  require('babel-register')(config);

  require(path.resolve(__dirname, '..', 'src/server')).start();
} else {
  require(path.resolve(__dirname, '..', 'dist/server')).start();
}

