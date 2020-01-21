/* eslint no-unused-vars : 0 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { withRouter } from 'react-router'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { homePageRoute, notFoundPageRoute } from './route'
import { addDivWithIdToBody, checkAccessibilityIssues } from '../../library/client/startup'
import { ErrorBoundary } from './pattern/atom/error/ErrorBoundary'
import { appStore } from './store'

const App = () => (
  <Provider store={appStore}>
    <BrowserRouter>
      <Switch>
        <Route exact={homePageRoute.exact} path={homePageRoute.path} component={homePageRoute.clientComponent} />
        <Route component={withRouter(notFoundPageRoute.clientComponent)} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

checkAccessibilityIssues(React, ReactDOM, 1000)

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

ReactDOM.hydrate(<RegularApp />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
