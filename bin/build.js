/* ==========================================================================
 * ./bin/build.js
 *
 * Build apps
 * ========================================================================== */

const path = require('path');
const webpack = require('webpack');

const webpackConfig = require(path.resolve(__dirname, '..', 'webpack/webpack.config'));
const webpackStatsParser = require(path.resolve(__dirname, '..', 'webpack/statsParser'));

const compiler = webpack(webpackConfig);
compiler.run(webpackStatsParser);

