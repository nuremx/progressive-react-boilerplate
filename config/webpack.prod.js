/* eslint-env node */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { GenerateSW } = require('workbox-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')

const config = require(path.resolve('config'))
const common = require(path.resolve('config/webpack.common.js'))

module.exports = merge(common, {
  mode: 'production',
  devtool: 'hidden-source-map',
  output: {
    path: path.resolve('dist/app'),
    filename: '[name]-[chunkhash].min.js',
    publicPath: '/',
  },
  optimization: {
    minimizer: [new TerserPlugin({ parallel: true, sourceMap: true })],
  },
  module: {
    rules: [
      {
        test: /(\.css|.pcss)/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1, url: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: { path: path.resolve('config/.postcssrc.json') },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].min.css',
      chunkFilename: '[name]-[hash].min.css',
    }),
    new GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve('src/assets/favicon.png'),
      prefix: 'favicons-[hash]/',
      inject: true,
      title: config.project.name,
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false,
      },
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
          sizes: [96, 128, 192, 256, 384, 512],
          destination: 'assets',
        },
      ],
    }),
  ],
})
