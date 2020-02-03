import React, { useEffect } from 'react'
import cx from 'classnames'
import {
  container1,
  container1BlogItem,
  container1BlogItemFeatured,
  container1BlogItemImage,
  container1BlogItemImageFeatured,
  container1BlogItemContent,
  container1BlogItemContentFeatured,
  container1BlogList,
} from './BlogMain.scss'
import { BlogListItem } from './BlogMain.part'
import { blogMainDefaultProps, blogMainPropTypes } from './BlogMain.props'
import { handleStickyNavBar } from '../../../../../library/src/client/navBar'
import { windowObjectExists } from '../../../../../library/src/environment'
import Blog10 from '../../../asset/image/blog/blog-1-0.jpg'
import Blog11 from '../../../asset/image/blog/blog-1-1.jpg'
import Blog12 from '../../../asset/image/blog/blog-1-2.jpg'
import Blog13 from '../../../asset/image/blog/blog-1-3.jpg'
import { LoremIpsum } from '../../atom/placeholder/LoremIpsum'
import { element } from '../../../../../library/src/client/dom'
import { size } from '../../../../../library/src/client/placeholder'

export function BlogMain({ className }) {
  useEffect(() => {
    handleStickyNavBar()
  })

  return (
    <main className={className} style={{ marginTop: '55px', display: 'flex', justifyContent: 'center' }}>
      <div className={container1}>
        <section itemScope itemType="http://schema.org/Blog">
          <h2>
            <a itemProp="url" href="/categories/recent">
              <span>
                Recent articles
                <svg viewBox="0 0 185.343 185.343" height="16px" width="16px">
                  <path
                    d="M51.707 185.343a10.692 10.692 0 0 1-7.593-3.149 10.724 10.724 0 0 1 0-15.175l74.352-74.347L44.114 18.32c-4.194-4.194-4.194-10.987 0-15.175 4.194-4.194 10.987-4.194 15.18 0l81.934 81.934c4.194 4.194 4.194 10.987 0 15.175l-81.934 81.939a10.678 10.678 0 0 1-7.587 3.15z"
                    fill="#010002"
                  />
                </svg>
              </span>
            </a>
          </h2>
          <article className={cx(container1BlogItem, container1BlogItemFeatured)}>
            <div className={cx(container1BlogItemImage, container1BlogItemImageFeatured)}>
              <div style={{ width: '100%', paddingBottom: '64.94140625%' }} />
              <picture>
                <img src={!windowObjectExists ? 'mts/static/blog-1-0.jpg' : Blog10} alt="blog 1" />
              </picture>
            </div>
            <div className={cx(container1BlogItemContent, container1BlogItemContentFeatured)}>
              <header>
                <h2 itemProp="name headline">
                  <a itemProp="url" aria-label="Go To Blog Post" href="/react-libraries">
                    React Libraries in 2020
                  </a>
                </h2>
              </header>
              <LoremIpsum container={element.paragraph} length={size.small} count={1} />
            </div>
          </article>
          <div className={container1BlogList}>
            <BlogListItem imageName="blog-1-1" image={Blog11} href="/conditional-rendering-react" title="Lorem ipsum" intro={null} />
            <BlogListItem imageName="blog-1-2" image={Blog12} href="/react-event-handler" title="Lorem ipsum" intro={null} />
            <BlogListItem imageName="blog-1-3" image={Blog13} href="/javascript-import-export" title="Lorem ipsum" intro={null} />
          </div>
        </section>
      </div>
    </main>
  )
}

BlogMain.defaultProps = blogMainDefaultProps

BlogMain.propTypes = blogMainPropTypes
