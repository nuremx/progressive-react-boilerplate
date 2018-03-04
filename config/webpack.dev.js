/* eslint-env node */
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  entry: [
    'webpack-hot-middleware/client',
    path.resolve('src/js/index')
  ],
  module: {
    rules: [
      {
        test: /(\.css$|\.scss)/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    overlay: true,
    compress: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})
