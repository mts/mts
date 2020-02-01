import React from 'react'
import cx from 'classnames'
import { blogTemplate } from './BlogTemplate.scss'
import { blogTemplateDefaultProps, blogTemplatePropTypes } from './BlogTemplate.props'

export function BlogTemplate({ className }) {
  return <div className={cx(className, blogTemplate)}>BlogTemplate under construction</div>
}

BlogTemplate.defaultProps = blogTemplateDefaultProps

BlogTemplate.propTypes = blogTemplatePropTypes
