import { lazy, Suspense } from 'react'
import { notFoundPageDefaultProps, notFoundPagePropTypes } from './NotFoundPage.prop'

const LazyNotFoundPage = lazy(() => import('./NotFoundPage'))

export function AsyncNotFoundPage({ location }) {
  return (
    <Suspense fallback={null}>
      <LazyNotFoundPage location={location} />
    </Suspense>
  )
}

AsyncNotFoundPage.defaultProps = notFoundPageDefaultProps

AsyncNotFoundPage.propTypes = notFoundPagePropTypes
