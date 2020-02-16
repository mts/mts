import React from 'react'
import cx from 'classnames'
import { coursesTemplate } from './CoursesTemplate.scss'
import { coursesTemplateDefaultProps, coursesTemplatePropTypes } from './CoursesTemplate.prop'

export function CoursesTemplate({ className }) {
  return <div className={cx(className, coursesTemplate)}>CoursesTemplate under construction.</div>
}

CoursesTemplate.defaultProps = coursesTemplateDefaultProps

CoursesTemplate.propTypes = coursesTemplatePropTypes
