import React, { useEffect } from 'react'
import { container1, container1BlogList } from './BlogMain.scss'
import { H2, BlogItemFeatured, BlogItemRegular } from './BlogMain.part'
import { blogMainDefaultProps, blogMainPropTypes } from './BlogMain.props'
import { handleStickyNavBar } from '../../../../../library/src/client/navBar'
import Blog10 from '../../../asset/image/blog/blog-1-0.jpg'
import Blog11 from '../../../asset/image/blog/blog-1-1.jpg'
import Blog12 from '../../../asset/image/blog/blog-1-2.jpg'
import Blog13 from '../../../asset/image/blog/blog-1-3.jpg'
import Blog20 from '../../../asset/image/blog/blog-2-0.jpg'
import Blog21 from '../../../asset/image/blog/blog-2-1.jpg'
import Blog22 from '../../../asset/image/blog/blog-2-2.jpg'
import Blog23 from '../../../asset/image/blog/blog-2-3.jpg'
import Blog30 from '../../../asset/image/blog/blog-3-0.jpg'
import Blog31 from '../../../asset/image/blog/blog-3-1.jpg'
import Blog32 from '../../../asset/image/blog/blog-3-2.jpg'
import Blog33 from '../../../asset/image/blog/blog-3-3.jpg'

export function BlogMain({ className }) {
  useEffect(() => {
    handleStickyNavBar()
  })

  return (
    <main className={className} style={{ marginTop: '55px', display: 'flex', justifyContent: 'center' }}>
      <div className={container1}>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 href="/categories/recent" text="Recent articles" />
          <BlogItemFeatured imageName="blog-1-0" image={Blog10} href="/react-libraries" title="Lorem ipsum" text={null} />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-1-1" image={Blog11} href="/conditional-rendering-react" title="Lorem ipsum" text={null} />
            <BlogItemRegular imageName="blog-1-2" image={Blog12} href="/react-event-handler" title="Lorem ipsum" text={null} />
            <BlogItemRegular imageName="blog-1-3" image={Blog13} href="/javascript-import-export" title="Lorem ipsum" text={null} />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 href="/categories/starter" text="Getting Started Tutorials" />
          <BlogItemFeatured imageName="blog-2-0" image={Blog20} href="/node-js-express-tutorial" title="Lorem ipsum" text={null} />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-2-1" image={Blog21} href="/learn-react-js" title="Lorem ipsum" text={null} />
            <BlogItemRegular imageName="blog-2-2" image={Blog22} href="/react-redux-tutorial" title="Lorem ipsum" text={null} />
            <BlogItemRegular
              imageName="blog-2-3"
              image={Blog23}
              href="/complete-firebase-authentication-react-tutorial"
              title="Lorem ipsum"
              text={null}
            />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/firebase" text="Firebase" />
          <BlogItemFeatured imageName="blog-3-0" image={Blog30} href="/firebase-test" title="Lorem ipsum" text={null} />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-3-1" image={Blog31} href="/react-firebase-redux-tutorial" title="Lorem ipsum" text={null} />
            <BlogItemRegular imageName="blog-3-2" image={Blog32} href="/react-firebase-mobx-tutorial" title="Lorem ipsum" text={null} />
            <BlogItemRegular
              imageName="blog-3-3"
              image={Blog33}
              href="/the-road-to-react-with-firebase-book"
              title="Lorem ipsum"
              text={null}
            />
          </div>
        </section>
      </div>
    </main>
  )
}

BlogMain.defaultProps = blogMainDefaultProps

BlogMain.propTypes = blogMainPropTypes
