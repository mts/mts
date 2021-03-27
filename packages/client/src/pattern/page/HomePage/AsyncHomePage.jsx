import { lazy, Suspense } from 'react'
import { homePageDefaultProps, homePagePropTypes } from './HomePage.prop'

const LazyHomePage = lazy(() => import('./HomePage'))

export function AsyncHomePage() {
  return (
    <Suspense fallback={null}>
      <LazyHomePage />
    </Suspense>
  )
}

AsyncHomePage.defaultProps = homePageDefaultProps

AsyncHomePage.propTypes = homePagePropTypes
