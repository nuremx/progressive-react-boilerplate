/* eslint-env node */
const express = require('express')
const path = require('path')
const helmet = require('helmet') // Basic headers protection

const bodyParser = require('body-parser')
const winston = require('winston') // Logger
const hpp = require('hpp')
const app = express()

const webpackDevServer = require(path.resolve('config/webpackDevServer')) // Dev server

const PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(helmet())
app.use(hpp())

// If in development use webpackDevServer
if (process.env.NODE_ENV === 'development') {
  app.use(webpackDevServer)
}

// Images and static assets
app.use('/static', express.static(path.resolve('static')))

// TODO add API

// Bundles
app.use('/dist',
  express.static('dist')
)

// Send index to all other routes
app.get('*', (req, res) =>
  res.sendFile(path.resolve('src/index.html'))
)

// Start server
app.listen(PORT, () =>
  winston.info(`React Boilerplate server is listening on port: ${PORT}!`)
)
