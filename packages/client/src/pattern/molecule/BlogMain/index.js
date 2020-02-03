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
  container1BlogListContainer1,
  container1BlogListContainer1Image,
  container1BlogListContainer1Content,
} from './BlogMain.scss'
import { blogMainDefaultProps, blogMainPropTypes } from './BlogMain.props'
import { handleStickyNavBar } from '../../../../../library/src/client/navBar'
import { windowObjectExists } from '../../../../../library/src/environment'
import Blog1 from '../../../asset/image/blog/blog-1.jpg'
import Blog2 from '../../../asset/image/blog/blog-2.jpg'
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
                <img src={!windowObjectExists ? 'mts/static/blog-1.jpg' : Blog1} alt="blog 1" />
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
            <article className={container1BlogListContainer1}>
              <div className={container1BlogListContainer1Image}>
                <div style={{ width: '100%', paddingBottom: '6.69921875%' }} />
                <picture>
                  <img src={!windowObjectExists ? 'mts/static/blog-2.jpg' : Blog2} alt="blog 2" />
                </picture>
              </div>
              <div className={container1BlogListContainer1Content}>
                <header>
                  <h2 itemProp="name headline">
                    <a itemProp="url" aria-label="Go To Blog Post" href="/conditional-rendering-react">
                      React Conditional Rendering
                    </a>
                  </h2>
                </header>
                <LoremIpsum container={element.paragraph} length={size.small} count={1} />
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  )
}

BlogMain.defaultProps = blogMainDefaultProps

BlogMain.propTypes = blogMainPropTypes
