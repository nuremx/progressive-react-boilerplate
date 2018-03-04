/* eslint-env node */
const merge = require('webpack-merge')
const path = require('path')
const common = require(path.resolve('config/webpack.common.js'))
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /(\.css$|\.scss)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('master.min.css')
  ]
})
