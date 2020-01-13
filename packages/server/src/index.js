/* eslint no-console: 0 */
require('dotenv').config()
const cors = require('cors')
const express = require('express')

const server = express()

server.use(cors())

server.get('/', (req, res) => {
  res.send('MTS GitHub IO!')
})

const PORT = process.env.SERVER_PORT || 3002

server.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`)
})
