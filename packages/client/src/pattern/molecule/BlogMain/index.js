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
import { H2, BlogItemRegular } from './BlogMain.part'
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
          <H2 href="/categories/recent" text="Recent articles" />
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
                    Lorem ipsum
                  </a>
                </h2>
              </header>
              <LoremIpsum container={element.paragraph} length={size.small} count={1} />
            </div>
          </article>
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-1-1" image={Blog11} href="/conditional-rendering-react" title="Lorem ipsum" text={null} />
            <BlogItemRegular imageName="blog-1-2" image={Blog12} href="/react-event-handler" title="Lorem ipsum" text={null} />
            <BlogItemRegular imageName="blog-1-3" image={Blog13} href="/javascript-import-export" title="Lorem ipsum" text={null} />
          </div>
        </section>
      </div>
    </main>
  )
}

BlogMain.defaultProps = blogMainDefaultProps

BlogMain.propTypes = blogMainPropTypes
