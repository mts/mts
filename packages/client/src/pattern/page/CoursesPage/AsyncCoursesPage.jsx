import { coursesPageDefaultProps, coursesPagePropTypes } from './CoursesPage.prop'

const LazyCoursesPage = React.lazy(() => import('./CoursesPage'))

export function AsyncCoursesPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyCoursesPage />
    </React.Suspense>
  )
}

AsyncCoursesPage.defaultProps = coursesPageDefaultProps

AsyncCoursesPage.propTypes = coursesPagePropTypes
