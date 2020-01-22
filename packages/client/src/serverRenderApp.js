/* eslint no-unused-vars : 0 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import { homePageRoute, notFoundPageRoute } from './route'
import { ErrorBoundary } from './pattern/atom/error/ErrorBoundary'
import { serverAppStore } from './store/server'

export function App() {
  return (
    <ErrorBoundary>
      <Provider store={serverAppStore}>
        <StaticRouter>
          <homePageRoute.serverComponent className="serverRenderApp" />
        </StaticRouter>
      </Provider>
    </ErrorBoundary>
  )
}
