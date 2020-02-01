import React from 'react'
import cx from 'classnames'
import { blogTemplate } from './BlogTemplate.scss'
import { ShareButtons } from '../../molecule/ShareButtons'
import { Navigation } from '../../molecule/Navigation'
import { Newsletter } from '../../molecule/Newsletter'
import { Footer } from '../../molecule/Footer'
import { blogTemplateDefaultProps, blogTemplatePropTypes } from './BlogTemplate.props'

export function BlogTemplate({ className }) {
  return (
    <div className={cx(className, blogTemplate)}>
      <ShareButtons />
      <Navigation />
      <Newsletter />
      <Footer />
    </div>
  )
}

BlogTemplate.defaultProps = blogTemplateDefaultProps

BlogTemplate.propTypes = blogTemplatePropTypes
