/* eslint no-console: 0 */
import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

function renderFullPage(html, finalState) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>MTS Server</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>window.__PRELOADED_STATE__ = ${JSON.stringify(finalState).replace(/</g, '\\u003c')}</script>
      </body>
    </html>
    `
}

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

  res.send(renderFullPage(html, finalState))
}

dotenv.config()

const server = express()

server.use(cors())

server.use('/static', express.static('static'))

server.use(handleRender)

const PORT = process.env.PORT || 3001

server.listen(PORT, () => {
  console.log(`🚀 MTS HTTP Server listening on port ${PORT}`)
})
