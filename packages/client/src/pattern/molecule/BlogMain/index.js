import React, { useEffect } from 'react'
import { container, containerBlogList } from './BlogMain.scss'
import { H2, BlogItemFeatured, BlogItemRegular } from './BlogMain.part'
import { blogMainDefaultProps, blogMainPropTypes } from './BlogMain.prop'
import { handleStickyNavBar } from '../../../../../library/src/client/navBar'
import {
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
  blog6,
  blog7,
  blog8,
  blog9,
  blog10,
  blog11,
  blog12,
  blog13,
  blog14,
  blog15,
  blog16,
  blog17,
  blog18,
  blog19,
  blog20,
  blog21,
  blog22,
  blog23,
  blog24,
  blog25,
  blog26,
} from '../../../asset/image/blog'

export function BlogMain({ className }) {
  useEffect(() => {
    handleStickyNavBar()
  })

  return (
    <main
      itemScope=""
      itemProp="mainContentOfPage"
      className={className}
      style={{ marginTop: '55px', display: 'flex', justifyContent: 'center' }}
    >
      <div className={container}>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 href="/categories/recent" text="Recent articles" />
          <BlogItemFeatured imageName="blog-1-0" image={blog1.image10} href="/react-libraries" title="Lorem ipsum" />
          <div className={containerBlogList}>
            <BlogItemRegular imageName="blog-1-1" image={blog1.image11} href="/conditional-rendering-react" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-1-2" image={blog1.image12} href="/react-event-handler" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-1-3" image={blog1.image13} href="/javascript-import-export" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 href="/categories/starter" text="Getting Started Tutorials" />
          <BlogItemFeatured imageName="blog-2-0" image={blog2.image20} href="/node-js-express-tutorial" title="Lorem ipsum" />
          <div className={containerBlogList}>
            <BlogItemRegular imageName="blog-2-1" image={blog2.image21} href="/learn-react-js" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-2-2" image={blog2.image22} href="/react-redux-tutorial" title="Lorem ipsum" />
            <BlogItemRegular
              imageName="blog-2-3"
              image={blog2.image23}
              href="/complete-firebase-authentication-react-tutorial"
              title="Lorem ipsum"
            />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/firebase" text="Firebase" />
          <BlogItemFeatured imageName="blog-3-0" image={blog3.image30} href="/firebase-test" title="Lorem ipsum" />
          <div className={containerBlogList}>
            <BlogItemRegular imageName="blog-3-1" image={blog3.image31} href="/react-firebase-redux-tutorial" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-3-2" image={blog3.image32} href="/react-firebase-mobx-tutorial" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-3-3" image={blog3.image33} href="/the-road-to-react-with-firebase-book" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/tooling" text="Tooling" />
          <BlogItemFeatured imageName="blog-4-0" image={blog4.image40} href="/babel-module-resolver-jest" title="Lorem ipsum" />
          <div className={containerBlogList}>
            <BlogItemRegular imageName="blog-4-1" image={blog4.image41} href="/babel-module-resolver-typescript" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-4-2" image={blog4.image42} href="/npm-crash-course" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-4-3" image={blog4.image43} href="/webpack-code-splitting-library" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/react" text="React" />
          <BlogItemFeatured imageName="blog-5-0" image={blog5.image50} href="/react-libraries" title="Lorem ipsum" />
          <div className={containerBlogList}>
            <BlogItemRegular imageName="blog-5-1" image={blog5.image51} href="/conditional-rendering-react" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-5-2" image={blog5.image52} href="/react-event-handler" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-5-3" image={blog5.image53} href="/react-range" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/javascript" text="JavaScript" />
          <BlogItemFeatured imageName="blog-6-0" image={blog6.image60} href="/javascript-import-export" title="Lorem ipsum" />
          <div className={containerBlogList}>
            <BlogItemRegular imageName="blog-6-1" image={blog6.image61} href="/npm-crash-course" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-6-2" image={blog6.image62} href="/javascript-variable" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-6-3" image={blog6.image63} href="/webpack-code-splitting-library" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/node" text="Node" />
          <BlogItemFeatured imageName="blog-7-0" image={blog7.image70} href="/npm-crash-course" title="Lorem ipsum" />
          <div className={containerBlogList}>
            <BlogItemRegular imageName="blog-7-1" image={blog7.image71} href="/webpack-code-splitting-library" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-7-2" image={blog7.image72} href="/github-webhook-node-js" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-7-3" image={blog7.image73} href="/minimal-node-js-babel-setup" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/web-development" text="Web Development" />
          <BlogItemFeatured imageName="blog-8-0" image={blog8.image80} href="/npm-crash-course" title="Lorem ipsum" />
          <div className={containerBlogList}>
            <BlogItemRegular imageName="blog-8-1" image={blog8.image81} href="/github-webhook-node-js" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-8-2" image={blog8.image82} href="/babel-module-resolver" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-8-3" image={blog8.image83} href="/git-team-workflow" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/redux" text="Redux" />
          <BlogItemFeatured imageName="blog-9-0" image={blog9.image90} href="/redux-javascript" title="Lorem ipsum" />
          <div className={containerBlogList}>
            <BlogItemRegular imageName="blog-9-1" image={blog9.image91} href="/react-connected-component-test" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-9-2" image={blog9.image92} href="/redux-persist-next-js" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-9-3" image={blog9.image93} href="/react-firebase-redux-tutorial" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/eslint" text="ESLint" />
          <BlogItemFeatured imageName="blog-10-0" image={blog10.image100} href="/babel-module-resolver" title="Lorem ipsum" />
          <div className={containerBlogList}>
            <BlogItemRegular imageName="blog-10-1" image={blog10.image101} href="/react-eslint-webpack-babel" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-10-2" image={blog10.image102} href="/webpack-eslint" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/babel" text="Babel" />
          <BlogItemFeatured imageName="blog-11-0" image={blog11.image110} href="/babel-module-resolver" title="Lorem ipsum" />
          <div className={containerBlogList}>
            <BlogItemRegular imageName="blog-11-1" image={blog11.image111} href="/webpack-images" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-11-2" image={blog11.image112} href="/webpack-font" title="Lorem ipsum" />
            <BlogItemRegular
              imageName="blog-11-3"
              image={blog11.image113}
              href="/react-testing-mocha-chai-enzyme-sinon"
              title="Lorem ipsum"
            />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/jest" text="Jest" />
          <BlogItemFeatured imageName="blog-12-0" image={blog12.image120} href="/jest-snapshot-test-difference" title="Lorem ipsum" />
          <div className={containerBlogList}>
            <BlogItemRegular imageName="blog-12-1" image={blog12.image121} href="/jest-snapshot-shallow-render" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-12-2" image={blog12.image122} href="/react-testing-jest" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/webpack" text="Webpack" />
          <BlogItemFeatured imageName="blog-13-0" image={blog13.image130} href="/webpack-images" title="Lorem ipsum" />
          <div className={containerBlogList}>
            <BlogItemRegular imageName="blog-13-1" image={blog13.image131} href="/webpack-font" title="Lorem ipsum" />
            <BlogItemRegular
              imageName="blog-13-2"
              image={blog13.image132}
              href="/react-testing-mocha-chai-enzyme-sinon"
              title="Lorem ipsum"
            />
            <BlogItemRegular imageName="blog-13-3" image={blog13.image133} href="/javascript-test-coverage" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/nextjs" text="NextJS" />
          <BlogItemFeatured imageName="blog-14-0" image={blog14.image140} href="/redux-persist-next-js" title="Lorem ipsum" />
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/enzyme" text="Enzyme" />
          <BlogItemFeatured
            imageName="blog-15-0"
            image={blog15.image150}
            href="/react-testing-mocha-chai-enzyme-sinon"
            title="Lorem ipsum"
          />
          <BlogItemRegular imageName="blog-15-1" image={blog15.image151} href="/react-testing-jest-enzyme" title="Lorem ipsum" />
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/gatsby" text="Gatsby" />
          <BlogItemFeatured imageName="blog-16-0" image={blog16.image160} href="/react-gatsby-js" title="Lorem ipsum" />
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/vs-code" text="VS Code" />
          <BlogItemFeatured imageName="blog-17-0" image={blog17.image170} href="/how-to-use-prettier-vscode" title="Lorem ipsum" />
          <div className={containerBlogList}>
            <BlogItemRegular imageName="blog-17-1" image={blog17.image171} href="/prettier-eslint" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-17-2" image={blog17.image172} href="/react-js-macos-setup" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-17-3" image={blog17.image173} href="/react-js-windows-setup" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/web-components" text="Web Components" />
          <BlogItemFeatured imageName="blog-18-0" image={blog18.image180} href="/react-web-components" title="Lorem ipsum" />
          <BlogItemRegular imageName="blog-18-1" image={blog18.image181} href="/web-components-tutorial" title="Lorem ipsum" />
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/mobx" text="MobX" />
          <BlogItemFeatured imageName="blog-19-0" image={blog19.image190} href="/react-firebase-mobx-tutorial" title="Lorem ipsum" />
          <div className={containerBlogList}>
            <BlogItemRegular imageName="blog-19-1" image={blog19.image191} href="/create-react-app-mobx-decorators" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-19-2" image={blog19.image192} href="/react-redux-mobx-state-management" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-19-3" image={blog19.image193} href="/redux-mobx" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/reason" text="Reason" />
          <BlogItemFeatured imageName="blog-20-0" image={blog20.image200} href="/reason-react-tutorial" title="Lorem ipsum" />
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/graphql" text="GraphQL" />
          <BlogItemFeatured imageName="blog-21-0" image={blog21.image210} href="/the-road-to-graphql-book" title="Lorem ipsum" />
          <div className={containerBlogList}>
            <BlogItemRegular imageName="blog-21-1" image={blog21.image211} href="/graphql-tutorial" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-21-2" image={blog21.image212} href="/graphql-apollo-client-tutorial" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-21-3" image={blog21.image213} href="/react-apollo-client-testing" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/angular" text="Angular" />
          <BlogItemFeatured imageName="blog-22-0" image={blog22.image220} href="/why-frameworks-matter" title="Lorem ipsum" />
          <div className={containerBlogList}>
            <BlogItemRegular imageName="blog-22-1" image={blog22.image221} href="/how-to-learn-framework" title="Lorem ipsum" />
            <BlogItemRegular
              imageName="blog-22-2"
              image={blog22.image222}
              href="/reasons-why-i-moved-from-angular-to-react"
              title="Lorem ipsum"
            />
            <BlogItemRegular imageName="blog-22-3" image={blog22.image223} href="/d3-on-angular-resuable-components" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/vue" text="Vue" />
          <BlogItemFeatured imageName="blog-23-0" image={blog23.image230} href="/why-frameworks-matter" title="Lorem ipsum" />
          <BlogItemRegular imageName="blog-23-1" image={blog23.image231} href="/how-to-learn-framework" title="Lorem ipsum" />
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/machine-learning" text="Machine Learning" />
          <BlogItemFeatured
            imageName="blog-24-0"
            image={blog24.image240}
            href="/machine-learning-javascript-web-developers"
            title="Lorem ipsum"
          />
          <div className={containerBlogList}>
            <BlogItemRegular
              imageName="blog-24-1"
              image={blog24.image241}
              href="/neural-networks-deeplearnjs-javascript"
              title="Lorem ipsum"
            />
            <BlogItemRegular
              imageName="blog-24-2"
              image={blog24.image242}
              href="/logistic-regression-gradient-descent-classification-javascript"
              title="Lorem ipsum"
            />
            <BlogItemRegular
              imageName="blog-24-3"
              image={blog24.image243}
              href="/multivariate-linear-regression-normal-equation-javascript"
              title="Lorem ipsum"
            />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/growth" text="Growth" />
          <BlogItemFeatured imageName="blog-25-0" image={blog25.image250} href="/lessons-learned-give-and-take" title="Lorem ipsum" />
          <BlogItemRegular imageName="blog-25-1" image={blog25.image251} href="/lessons-learned-deep-work-flow" title="Lorem ipsum" />
          <BlogItemRegular imageName="blog-25-2" image={blog25.image252} href="/lessons-learned-on-writing-well" title="Lorem ipsum" />
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/d3" text="D3" />
          <BlogItemFeatured imageName="blog-26-0" image={blog26.image260} href="/d3-on-angular-resuable-components" title="Lorem ipsum" />
          <BlogItemRegular imageName="blog-26-1" image={blog26.image261} href="/d3-angular-small-multiples-brushing" title="Lorem ipsum" />
          <BlogItemRegular imageName="blog-26-2" image={blog26.image262} href="/apple-health-chart-d3" title="Lorem ipsum" />
        </section>
      </div>
    </main>
  )
}

BlogMain.defaultProps = blogMainDefaultProps

BlogMain.propTypes = blogMainPropTypes
