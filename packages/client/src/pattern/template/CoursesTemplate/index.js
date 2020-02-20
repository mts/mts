import React from 'react'
import cx from 'classnames'
import { coursesTemplate } from './CoursesTemplate.scss'
import { coursesTemplateDefaultProps, coursesTemplatePropTypes } from './CoursesTemplate.prop'
import { Navigation } from '../../molecule/Navigation'

export function CoursesTemplate({ className }) {
  return (
    <div className={cx(className, coursesTemplate)}>
      <Navigation />
    </div>
  )
}

CoursesTemplate.defaultProps = coursesTemplateDefaultProps

CoursesTemplate.propTypes = coursesTemplatePropTypes
