/* eslint no-unused-vars : 0 */
import React from 'react'
import ReactDOM from 'react-dom'
import { StaticRouter } from 'react-router'
import { homePageRoute, notFoundPageRoute } from './route'
import { ErrorBoundary } from './pattern/atom/error/ErrorBoundary'

function App() {
  return (
    <StaticRouter>
      <homePageRoute.serverComponent className="serverApp" />
    </StaticRouter>
  )
}

export function StrictApp() {
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  )
}

export function RegularApp() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  )
}
