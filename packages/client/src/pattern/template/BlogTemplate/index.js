import React from 'react'
import cx from 'classnames'
import { blogTemplate } from './BlogTemplate.scss'
import { blogTemplateDefaultProps, blogTemplatePropTypes } from './BlogTemplate.prop'
import { ShareButtons } from '../../molecule/ShareButtons'
import { Navigation } from '../../molecule/Navigation'
import { BlogMain } from '../../molecule/BlogMain'
import { Newsletter } from '../../molecule/Newsletter'
import { Footer } from '../../molecule/Footer'

export function BlogTemplate({ className }) {
  return (
    <div className={cx(className, blogTemplate)}>
      <ShareButtons />
      <Navigation />
      <BlogMain />
      <Newsletter />
      <Footer />
    </div>
  )
}

BlogTemplate.defaultProps = blogTemplateDefaultProps

BlogTemplate.propTypes = blogTemplatePropTypes
