/* ==========================================================================
 * ./webpack/devConfig.js
 *
 * Config for webpack dev middleware
 * ========================================================================== */

const webpackConfig = require('./webpack.config');

module.exports = {
  noInfo: false,
  quiet: false,
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    hash: true,
    version: true,
    timings: true,
    assets: false,
    chunks: true,
    chunkModules: false,
    modules: false,
    cached: false
  }
};

