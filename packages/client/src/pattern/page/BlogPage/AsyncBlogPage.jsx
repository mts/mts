import React from 'react'
import { blogPageDefaultProps, blogPagePropTypes } from './BlogPage.prop'

const LazyBlogPage = React.lazy(() => import('./BlogPage'))

export function AsyncBlogPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyBlogPage />
    </React.Suspense>
  )
}

AsyncBlogPage.defaultProps = blogPageDefaultProps

AsyncBlogPage.propTypes = blogPagePropTypes
