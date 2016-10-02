/* ==========================================================================
 * ./utils/logger.js
 *
 * Use debug as logger
 * ========================================================================== */

const debug = require('debug');
const canUseDOM = require('./canUseDOM');

// returns an object with debug objects for log, info, and error
module.exports = (namespace) => ({
  log: debug(`${canUseDOM() ? 'client' : 'app'}:${namespace}:log`),
  info: debug(`${canUseDOM() ? 'client' : 'app'}:${namespace}:info`),
  error: debug(`${canUseDOM() ? 'client' : 'app'}:${namespace}:error`)
});

