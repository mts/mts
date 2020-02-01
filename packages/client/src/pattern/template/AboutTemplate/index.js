import React from 'react'
import cx from 'classnames'
import { aboutTemplate } from './AboutTemplate.scss'
import { aboutTemplateDefaultProps, aboutTemplatePropTypes } from './AboutTemplate.props'

export function AboutTemplate({ className }) {
  return <div className={cx(className, aboutTemplate)}>AboutTemplate under construction</div>
}

AboutTemplate.defaultProps = aboutTemplateDefaultProps

AboutTemplate.propTypes = aboutTemplatePropTypes
