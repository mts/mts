/* eslint no-unused-vars : 0 */
import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router'
import { StaticRouter, Route, Switch } from 'react-router-dom'
import { homePageRoute, notFoundPageRoute } from './route'
import { ErrorBoundary } from './pattern/atom/error/ErrorBoundary'

function App() {
  return (
    <StaticRouter>
      <Switch>
        <Route exact={homePageRoute.exact} path={homePageRoute.path} component={homePageRoute.serverComponent} />
        <Route component={withRouter(notFoundPageRoute.serverComponent)} />
      </Switch>
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
