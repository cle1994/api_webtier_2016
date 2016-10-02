/* ==========================================================================
 * ./webpack/webpack.config.dev.js
 *
 * Webpack config for Development
 * ========================================================================== */

const path = require('path');
const webpack = require('webpack');
const Dashboard = require('webpack-dashboard/plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
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
          ],
          env: {
            development: {
              plugins: [
                [
                  'react-transform',
                  {
                    transforms: [
                      {
                        transform: 'react-transform-hmr',
                        imports: ['react'],
                        locals: ['module']
                      },
                      {
                        transform: 'react-transform-catch-errors',
                        imports: [
                          'react',
                          'redbox-react'
                        ]
                      }
                    ]
                  }
                ]
              ]
            }
          }
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?sourceMap',
          'postcss',
          'sass'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new Dashboard({ port: 3001 })
  ]
};

