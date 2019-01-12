/* eslint-env node */
import path from 'path'
import express from 'express'
import helmet from 'helmet'
import hpp from 'hpp'

const mode = process.env.NODE_ENV
const isProd = mode === 'production'

/* Dotenv config */

// dotenv.config({
//   path: path.resolve(`config/.env${isProd ? '.production' : '.development'}`),
// })

const { PORT = 8080, SERVER_ONLY = 'false' } = process.env
const app = express()

app.use(helmet())
app.use(hpp())

/*
  Here you can add more express routes
  like API endpoints or GraphQL middleware.
*/

if (SERVER_ONLY === 'false') {
  if (isProd) {
    app.use(express.static(path.resolve('dist/app')))
    app.get('*', (req, res) =>
      res.sendFile(path.resolve('dist/app/index.html'))
    )
  } else {
    app.use(require(path.resolve('config/webpackDevServer')))
  }
}

app.listen(PORT, () => {
  console.info(`Server is listening\n  Port: ${PORT}\n `)
})
