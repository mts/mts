import { lazy, Suspense } from 'react'
import { blogPageDefaultProps, blogPagePropTypes } from './BlogPage.prop'

const LazyBlogPage = lazy(() => import('./BlogPage'))

export function AsyncBlogPage() {
  return (
    <Suspense fallback={null}>
      <LazyBlogPage />
    </Suspense>
  )
}

AsyncBlogPage.defaultProps = blogPageDefaultProps

AsyncBlogPage.propTypes = blogPagePropTypes
