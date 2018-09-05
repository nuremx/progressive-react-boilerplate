const express = require('express')
const Busboy = require('busboy')
const pdfText = require('pdf-text')

const router = new express.Router()

let globalCode = null

router
  .route('/')
  .get((req, res) => {
    const code = globalCode
    globalCode = null

    return res.status(200).json({ code })
  })
  .post((req, res) => {
    const busboy = new Busboy({ headers: req.headers })

    req.pipe(busboy)

    busboy.on('file', (fieldname, fileStream) => {
      const bufferStream = []

      fileStream.on('data', (data) => {
        bufferStream.push(data)
      })

      fileStream.on('end', () => {
        const buffer = Buffer.concat(bufferStream)

        pdfText(buffer, (error, chunks) => {
          if (error) {
            return res
              .status(500)
              .json({ error: 'Could not parse PDF document' })
          }

          const regex = /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/g
          const codeMatch = chunks.filter((string) => regex.test(string)).pop()

          if (!codeMatch) return res.status(200).json({ message: 'No match' })

          const code = codeMatch && codeMatch.match(regex).pop()
          globalCode = code

          return res.status(200).json({ code })
        })
      })
    })

    busboy.on('finish', () => {
      console.log('Done parsing form!')
      // return res.status(200).json({ message: 'Ok' })
    })
  })

module.exports = router
