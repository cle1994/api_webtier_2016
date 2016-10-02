/* ==========================================================================
 * ./test/helpers/testEnv.js
 *
 * Test Helper to set up jsdom for Enzyme Testing
 * ========================================================================== */

/* eslint-disable */

require('babel-register')();

const exposedProperties = ['window', 'navigator', 'document'];
global.document = require('jsdom').jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

/* eslint-enable */

