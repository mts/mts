import React from 'react'
import cx from 'classnames'
import { container } from './CoursesContent.scss'
import { coursesContentDefaultProps, coursesContentPropTypes } from './CoursesContent.prop'

export function CoursesContent({ className }) {
  return <div className={cx(className, container)}>CoursesContent under construction</div>
}

CoursesContent.defaultProps = coursesContentDefaultProps

CoursesContent.propTypes = coursesContentPropTypes
