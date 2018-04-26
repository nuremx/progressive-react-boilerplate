/* eslint-env node */
const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  entry: ['webpack-hot-middleware/client', path.resolve('src/index')],
  module: {
    rules: [
      {
        test: /(\.css$|\.scss)/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?sourceMap',
          'sass-loader?sourceMap'
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    overlay: true,
    compress: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*.*'], {
      root: path.join(__dirname, '../')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})
