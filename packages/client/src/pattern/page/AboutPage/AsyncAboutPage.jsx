import React from 'react'
import { aboutPageDefaultProps, aboutPagePropTypes } from './AboutPage.props'

const LazyAboutPage = React.lazy(() => import('./AboutPage'))

export function AsyncAboutPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyAboutPage />
    </React.Suspense>
  )
}

AsyncAboutPage.defaultProps = aboutPageDefaultProps

AsyncAboutPage.propTypes = aboutPagePropTypes
