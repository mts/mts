/* eslint no-console: 0 */
require('dotenv').config()
const cors = require('cors')
const express = require('express')

const server = express()

server.use(cors())

server.get('/', (req, res) => {
  res.send('Hello MTS HTTP Server!')
})

const PORT = process.env.PORT || 3002

server.listen(PORT, () => {
  console.log(`🚀 MTS HTTP Server listening on port ${PORT}`)
})
