/* ==========================================================================
 * ./webpack/statsParser.js
 *
 * Parse Webpack Stats for Errors and Warnings
 * ========================================================================== */

const logger = require('../utils/logger')('webpack:stats');

module.exports = (err, stats) => {
  const jsonStats = stats.toJson();

  logger.log('Webpack compile completed.');
  logger.log(stats.toString({
    chunks: false,
    chunkModules: false,
    colors: true
  }));

  if (err) {
    logger.err('Webpack compiler encountered a fatal error.', err);
  } else if (jsonStats.errors.length > 0) {
    logger.err('Webpack compiler encountered errors.');
    logger.err(jsonStats.errors.join('\n'));
  } else if (jsonStats.warnings.length > 0) {
    logger.log('Webpack compiler encountered warnings.');
    logger.log(jsonStats.warnings.join('\n'));
  }
};

