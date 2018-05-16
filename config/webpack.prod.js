/* eslint-env node */
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const { GenerateSW } = require('workbox-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')

const config = require(path.resolve('config'))
const common = require(path.resolve('config/webpack.common.js'))

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve('dist'),
    filename: '[name]-[chunkhash].min.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /(\.css$|\.scss)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?minimize',
            'resolve-url-loader',
            'sass-loader?sourceMap'
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJSPlugin({
      sourceMap: false
    }),
    new ExtractTextPlugin({
      filename: 'master-[chunkhash].min.css',
      allChunks: true
    }),
    new GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true
    }),
    new WebpackPwaManifest({
      name: config.project.name,
      short_name: config.project.shortName,
      description: config.project.description,
      background_color: config.project.backgroundColor,
      theme_color: config.project.themeColor,
      start_url: '/',
      icons: [
        {
          src: path.resolve('src/assets/app-icon.png'),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          destination: 'assets'
        },
        {
          src: path.resolve('src/assets/app-large-icon.png'),
          size: '1024x1024', // you can also use the specifications pattern
          destination: 'assets'
        }
      ]
    })
  ]
})
