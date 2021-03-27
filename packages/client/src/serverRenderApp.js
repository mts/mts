import { string, shape } from 'prop-types'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import { homePageRoute } from './route'
import { ErrorBoundary } from './pattern/atom/ErrorBoundary'
import { serverAppStore } from './store/server'

export function App({ location }) {
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
