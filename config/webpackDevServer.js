/* eslint-env node */
const webpack = require('webpack')
const express = require('express')
const router = new express.Router()
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const config = require('./webpack.dev.js')
const compiler = webpack(config)

router.use((webpackDevMiddleware)(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
}))
router.use(webpackHotMiddleware(compiler))

module.exports = router
