/* eslint no-console: 0 */
import path from 'path'
import fs from 'fs-extra'
import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import winston from 'winston'
import expressWinston from 'express-winston'

function someReducer(state = [], action) {
  switch (action.type) {
    default:
      return state
  }
}

async function handleRender(req, res) {
  const store = createStore(someReducer, { someState: 'some-state' })

  await import('../../client/src/index')
  const { RegularApp } = await import('../../client/src/serverApp')

  const html = renderToString(
    <Provider store={store}>
      <RegularApp />
    </Provider>,
  )

  const finalState = store.getState()

  return fs.readFile(path.resolve(__dirname, './mts/index.html'), 'utf8', (err, data) => {
    let replacedData

    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }

    replacedData = data.replace(
      '<div id="app"></div>',
      `<div id="app">${html}</div><script>window.__PRELOADED_STATE__ = ${JSON.stringify(finalState).replace(/</g, '\\u003c')}</script>`,
    )

    replacedData = replacedData.replace('<title>MTS Client</title>', '<title>MTS Server</title>')

    return res.send(replacedData)
  })
}

async function copyFiles() {
  try {
    if (!fs.existsSync(path.resolve(__dirname, 'mts/'))) {
      await fs.copy(path.resolve(__dirname, '../../client/build/'), path.resolve(__dirname, 'mts/'))
      await fs.remove(path.resolve(__dirname, 'mts/report-modern.html'))
      await fs.remove(path.resolve(__dirname, 'mts/manifest.json'))
      console.log('success!')
    }
  } catch (err) {
    console.error(err)
  }
}

copyFiles()

dotenv.config()

const server = express()
const router = express.Router()

server.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.colorize(), winston.format.json()),
    meta: false, // optional: control whether you want to log the meta data about the request (default to true)
    msg: 'HTTP {{req.method}} {{req.url}}', // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
    colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
    ignoreRoute(/* req, res */) {
      return false
    }, // optional: allows to skip some log messages based on request and/or response
  }),
)

server.use(cors())

router.get('/mts', (req, res) => {
  return handleRender(req, res)
})

server.use(router)

server.use(express.static(path.resolve(__dirname)))

const PORT = process.env.PORT || 3001

server.listen(PORT, () => {
  console.log(`🚀 MTS HTTP Server listening on port ${PORT}`)
})
