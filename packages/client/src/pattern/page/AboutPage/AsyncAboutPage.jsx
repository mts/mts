import { lazy, Suspense } from 'react'
import { aboutPageDefaultProps, aboutPagePropTypes } from './AboutPage.prop'

const LazyAboutPage = lazy(() => import('./AboutPage'))

export function AsyncAboutPage() {
  return (
    <Suspense fallback={null}>
      <LazyAboutPage />
    </Suspense>
  )
}

AsyncAboutPage.defaultProps = aboutPageDefaultProps

AsyncAboutPage.propTypes = aboutPagePropTypes
