/* eslint-env node */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = require(path.resolve('config'))

module.exports = {
  entry: {
    bundle: path.resolve('src/index.js'),
  },
  resolve: {
    modules: [path.resolve('src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('src'),
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              ['@babel/preset-env', { modules: false }],
              '@babel/react',
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              '@babel/plugin-proposal-class-properties',
              ['@babel/plugin-transform-runtime', { regenerator: true }],
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-proposal-optional-chaining',
              'add-react-displayname',
            ],
          },
        },
      },
      {
        test: /\.(graphql|gql)$/,
        include: path.resolve('src'),
        loader: 'graphql-tag/loader',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist/app'], {
      root: path.resolve('./'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.html'),
      filename: 'index.html',
      title: config.project.name,
    }),
  ],
}
