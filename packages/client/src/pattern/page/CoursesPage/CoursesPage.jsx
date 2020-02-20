import React from 'react'
import { CoursesTemplate } from '../../template/CoursesTemplate'
import { coursesPageDefaultProps, coursesPagePropTypes } from './CoursesPage.prop'

export function CoursesPage({ className }) {
  return (
    <div className={className}>
      <CoursesTemplate />
    </div>
  )
}

CoursesPage.defaultProps = coursesPageDefaultProps

CoursesPage.propTypes = coursesPagePropTypes

// Default export is required to use with React.lazy()
export default CoursesPage
