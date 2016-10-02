/* ==========================================================================
 * ./webpack/webpack.config.js
 *
 * Webpack config
 * ========================================================================== */

const logger = require('../utils/logger')('webpack:config');

const _ = require('lodash');

// Base webpack config
const webpackConfig = require('./webpack.config.base');

// Environment webpack config
const webpackAddition = process.env.WEBPACK_ENV === 'development'
  ? require('./webpack.config.dev')
  : require('./webpack.config.prod');

webpackConfig.devtool = webpackAddition.devtool;
webpackConfig.entry = webpackAddition.entry;
webpackConfig.plugins = _.concat(webpackConfig.plugins, webpackAddition.plugins);

_.forEach(webpackAddition.module, (value, key) => {
  const existing = webpackConfig.module[key];
  webpackConfig.module[key] = existing ? _.concat(existing, value) : value;
});

if (process.env.WEBPACK_ENV === 'development') {
  const loaders = webpackConfig.module.loaders.map((loader) => {
    if (/babel/.test(loader.loader)) {
      logger.log('--> Applying HMR');

      if (loader.query.env.development.plugins[0][0] !== 'react-transform') {
        logger.err('==!> Error: react-transform must be first plugin');
        return loader;
      }

      const reactTransformHMR = {
        transform: 'react-transform-hmr',
        imports: [
          'react'
        ],
        locals: [
          'module'
        ]
      };

      loader.query.env.development.plugins[0][1].transforms.push(reactTransformHMR);
    }

    return loader;
  });

  webpackConfig.module.loaders = loaders;
}

module.exports = webpackConfig;

