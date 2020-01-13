/* eslint no-console: 0 */
require('dotenv/config')
const cors = require('cors')
const express = require('express')

const server = express()

server.use(cors())

server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(process.env.SERVER_PORT, () => {
  console.log(`🚀 Server ready at ${process.env.SERVER_PORT}`)
})
