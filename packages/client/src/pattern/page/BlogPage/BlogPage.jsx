import React from 'react'
import { BlogTemplate } from '../../template/BlogTemplate'
import { blogPageDefaultProps, blogPagePropTypes } from './BlogPage.prop'

export function BlogPage({ className }) {
  return (
    <div className={className}>
      <BlogTemplate />
    </div>
  )
}

BlogPage.defaultProps = blogPageDefaultProps

BlogPage.propTypes = blogPagePropTypes

// Default export is required to use with React.lazy()
export default BlogPage
