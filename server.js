/* eslint-env node */
const path = require('path')
const express = require('express')
const helmet = require('helmet') // Basic headers protection
const dotenv = require('dotenv')

const bodyParser = require('body-parser')
const hpp = require('hpp')

const mode = process.env.NODE_ENV
const isProd = mode === 'production'

dotenv.config({
  path: path.resolve(`config/.env${isProd ? '.production' : '.development'}`),
})

const { PORT = 8080, SERVER_ONLY = false } = process.env

const app = express()

app.use(helmet())
app.use(hpp())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/extract', require('./server/extract'))

if (!isProd && !SERVER_ONLY) app.use(require(path.resolve('config/webpackDevServer')))
if (isProd && !SERVER_ONLY) {
  app.use(express.static(path.resolve('dist')))
  app.get('*', (req, res) => res.sendFile(path.resolve('dist/index.html')))
}

// Start server
app.listen(PORT, () =>
  console.info(`React boilerplate is now running\n
    Port: \t\t${PORT}
    Server only: \t${SERVER_ONLY}
    Mode: \t\t${mode}`)
)
