import React from 'react'
import { homePageDefaultProps, homePagePropTypes } from './HomePage.props'

// const LazyHomePage = React.lazy(() => import('./HomePage'))

export function AsyncHomePage() {
  return (
    <React.Suspense fallback={null}>
      {/* <div>AsyncHomePage client side rendered!!!</div> */}
      <div>AsyncHomePage client side rendered!!!</div>
      {/* <LazyHomePage /> */}
    </React.Suspense>
  )
}

AsyncHomePage.defaultProps = homePageDefaultProps

AsyncHomePage.propTypes = homePagePropTypes
