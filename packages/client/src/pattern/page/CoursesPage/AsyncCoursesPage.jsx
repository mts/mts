import { lazy, Suspense } from 'react'
import { coursesPageDefaultProps, coursesPagePropTypes } from './CoursesPage.prop'

const LazyCoursesPage = lazy(() => import('./CoursesPage'))

export function AsyncCoursesPage() {
  return (
    <Suspense fallback={null}>
      <LazyCoursesPage />
    </Suspense>
  )
}

AsyncCoursesPage.defaultProps = coursesPageDefaultProps

AsyncCoursesPage.propTypes = coursesPagePropTypes
