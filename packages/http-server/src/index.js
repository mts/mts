/* eslint no-console: 0 */
import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
// import { RegularApp } from '../../client/src'

function renderFullPage(html, finalState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(finalState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/bundle.js"></script>
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

function handleRender(req, res) {
  const store = createStore(someReducer, { someState: 'some-state' })

  const html = renderToString(
    <Provider store={store}>
      <div>test</div>
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
