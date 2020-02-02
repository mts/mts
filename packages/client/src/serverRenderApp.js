/* eslint no-unused-vars : 0 */
import React from 'react'
import ReactDOM from 'react-dom'
import { string, shape } from 'prop-types'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import { homePageRoute, notFoundPageRoute } from './route'
import { ErrorBoundary } from './pattern/atom/error/ErrorBoundary'
import { serverAppStore } from './store/server'

export function App({ location, context }) {
  return (
    <ErrorBoundary>
      <Provider store={serverAppStore}>
        <StaticRouter location={location}>
          <homePageRoute.serverComponent className="serverRenderApp" />
        </StaticRouter>
      </Provider>
    </ErrorBoundary>
  )
}

App.defaultProps = {
  location: '',
  context: {},
}

App.propTypes = {
  location: string,
  context: shape({
    url: string,
  }),
}
