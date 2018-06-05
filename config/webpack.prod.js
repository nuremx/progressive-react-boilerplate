/* eslint-env node */
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?minimize',
          'resolve-url-loader?sourceMap',
          {
            loader: 'postcss-loader?sourceMap',
            options: {
              config: { path: path.resolve('config/postcss.config.js') }
            }
          },
          'sass-loader?sourceMap'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new MiniCssExtractPlugin({
      filename: 'master-[hash].min.css',
      chunkFilename: '[name]-[hash].min.css'
    }),
    new UglifyJSPlugin({
      sourceMap: true
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
