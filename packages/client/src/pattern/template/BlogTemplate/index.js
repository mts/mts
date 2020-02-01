import React from 'react'
import cx from 'classnames'
import { blogTemplate } from './BlogTemplate.scss'
import { ShareButtons } from '../../molecule/ShareButtons'
import { blogTemplateDefaultProps, blogTemplatePropTypes } from './BlogTemplate.props'

export function BlogTemplate({ className }) {
  return (
    <div className={cx(className, blogTemplate)}>
      <ShareButtons />
    </div>
  )
}

BlogTemplate.defaultProps = blogTemplateDefaultProps

BlogTemplate.propTypes = blogTemplatePropTypes
