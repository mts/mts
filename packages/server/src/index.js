/* eslint no-console: 0 */
require('dotenv').config()
const cors = require('cors')
const express = require('express')

const server = express()

server.use(cors())

server.get('/', (req, res) => {
  res.send('MTS GitHub IO!')
})

const SERVER_PORT = process.env.SERVER_PORT || 3001

server.listen(SERVER_PORT, () => {
  console.log(`🚀 Server listening on port ${SERVER_PORT}`)
})
