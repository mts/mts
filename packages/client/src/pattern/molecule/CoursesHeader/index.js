import React from 'react'
import { coursesHeaderDefaultProps, coursesHeaderPropTypes } from './CoursesHeader.prop'

export function CoursesHeader({ className }) {
  return <div className={className} style={{ marginTop: '55px', display: 'flex', justifyContent: 'center' }} />
}

CoursesHeader.defaultProps = coursesHeaderDefaultProps

CoursesHeader.propTypes = coursesHeaderPropTypes
