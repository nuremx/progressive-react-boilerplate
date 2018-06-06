/* eslint-env node */
const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /(\.css|.pcss)/,
        use: [
          'style-loader?sourceMap',
          'css-loader?sourceMap',
          'resolve-url-loader?sourceMap',
          {
            loader: 'postcss-loader?sourceMap',
            options: {
              config: { path: path.resolve('config/postcss.config.js') },
            },
          },
        ],
      },
    ],
  },
  entry: ['webpack-hot-middleware/client', path.resolve('src/index')],
  devServer: {
    hot: true,
    overlay: true,
    compress: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})
