import React from 'react'
import { coursesPageDefaultProps, coursesPagePropTypes } from './CoursesPage.props'

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