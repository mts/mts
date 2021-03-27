import { aboutPageDefaultProps, aboutPagePropTypes } from './AboutPage.prop'

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
