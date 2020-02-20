import React from 'react'
import cx from 'classnames'
import { coursesTemplate } from './CoursesTemplate.scss'
import { coursesTemplateDefaultProps, coursesTemplatePropTypes } from './CoursesTemplate.prop'
import { Navigation } from '../../molecule/Navigation'
import { CoursesHeader } from '../../molecule/CoursesHeader'
import { CoursesContent } from '../../molecule/CoursesContent'

export function CoursesTemplate({ className }) {
  return (
    <div className={cx(className, coursesTemplate)}>
      <Navigation />
      <CoursesHeader />
      <CoursesContent />
    </div>
  )
}

CoursesTemplate.defaultProps = coursesTemplateDefaultProps

CoursesTemplate.propTypes = coursesTemplatePropTypes
