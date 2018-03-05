/* eslint-env node */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    bundle: path.resolve('src/js/index')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
            presets: [
              ['env', { modules: false }],
              'react',
              'stage-2'
            ]
          }
        }
      }
      // CSS rules are handled in dev/prod files
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.html'),
      filename: 'index.html'
    })
  ]
}
