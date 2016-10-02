/* ==========================================================================
 * ./webpack/webpack.config.prod.js
 *
 * Webpack config for Production
 * ========================================================================== */

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackPlugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new ExtractTextPlugin('style.css'),
  new webpack.DefinePlugin({
    'process.env': {
      BROWSER: JSON.stringify(true),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    screw_ie8: true
  })
];

module.exports = {
  devtool: 'source-map',
  entry: [
    'airbnb-js-shims',
    path.resolve(__dirname, '..', 'src/client/index.js')
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: (/(node_modules|dist)/),
        loader: 'babel',
        query: {
          cacheDirectory: true,
          plugins: [
            'transform-runtime',
            'typecheck',
            'syntax-flow',
            'transform-flow-strip-types'
          ],
          presets: [
            'es2015',
            'react',
            'stage-0'
          ]
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?minimize!postcss!sass-loader'
        )
      }
    ]
  },
  plugins: webpackPlugins
};

