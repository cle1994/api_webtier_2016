/* ==========================================================================
 * ./webpack/webpack.config.base.js
 *
 * Base/Shared Webpack config
 * ========================================================================== */

const cssnano = require('cssnano');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  output: {
    path: path.resolve(__dirname, '..', 'dist/static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  postcss: [
    cssnano({
      safe: true,
      sourcemap: true,
      autoprefixer: {
        add: true,
        remove: true,
        browsers: [
          'last 3 versions',
          'ie >= 10'
        ]
      },
      discardComments: {
        removeAll: true
      },
      discardDuplicates: true
    })
  ]
};

