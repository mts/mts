import React, { useEffect } from 'react'
import { container1, container1BlogList } from './BlogMain.scss'
import { H2, BlogItemFeatured, BlogItemRegular } from './BlogMain.part'
import { blogMainDefaultProps, blogMainPropTypes } from './BlogMain.props'
import { handleStickyNavBar } from '../../../../../library/src/client/navBar'
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
} from '../../../asset/image/blog'

export function BlogMain({ className }) {
  useEffect(() => {
    handleStickyNavBar()
  })

  return (
    <main className={className} style={{ marginTop: '55px', display: 'flex', justifyContent: 'center' }}>
      <div className={container1}>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 href="/categories/recent" text="Recent articles" />
          <BlogItemFeatured imageName="blog-1-0" image={image1.Blog10} href="/react-libraries" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-1-1" image={image1.Blog11} href="/conditional-rendering-react" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-1-2" image={image1.Blog12} href="/react-event-handler" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-1-3" image={image1.Blog13} href="/javascript-import-export" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 href="/categories/starter" text="Getting Started Tutorials" />
          <BlogItemFeatured imageName="blog-2-0" image={image2.Blog20} href="/node-js-express-tutorial" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-2-1" image={image2.Blog21} href="/learn-react-js" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-2-2" image={image2.Blog22} href="/react-redux-tutorial" title="Lorem ipsum" />
            <BlogItemRegular
              imageName="blog-2-3"
              image={image2.Blog23}
              href="/complete-firebase-authentication-react-tutorial"
              title="Lorem ipsum"
            />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/firebase" text="Firebase" />
          <BlogItemFeatured imageName="blog-3-0" image={image3.Blog30} href="/firebase-test" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-3-1" image={image3.Blog31} href="/react-firebase-redux-tutorial" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-3-2" image={image3.Blog32} href="/react-firebase-mobx-tutorial" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-3-3" image={image3.Blog33} href="/the-road-to-react-with-firebase-book" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/tooling" text="Tooling" />
          <BlogItemFeatured imageName="blog-4-0" image={image4.Blog40} href="/babel-module-resolver-jest" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-4-1" image={image4.Blog41} href="/babel-module-resolver-typescript" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-4-2" image={image4.Blog42} href="/npm-crash-course" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-4-3" image={image4.Blog43} href="/webpack-code-splitting-library" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/react" text="React" />
          <BlogItemFeatured imageName="blog-5-0" image={image5.Blog50} href="/react-libraries" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-5-1" image={image5.Blog51} href="/conditional-rendering-react" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-5-2" image={image5.Blog52} href="/react-event-handler" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-5-3" image={image5.Blog53} href="/react-range" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/javascript" text="JavaScript" />
          <BlogItemFeatured imageName="blog-6-0" image={image6.Blog60} href="/javascript-import-export" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-6-1" image={image6.Blog61} href="/npm-crash-course" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-6-2" image={image6.Blog62} href="/javascript-variable" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-6-3" image={image6.Blog63} href="/webpack-code-splitting-library" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/node" text="Node" />
          <BlogItemFeatured imageName="blog-7-0" image={image7.Blog70} href="/npm-crash-course" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-7-1" image={image7.Blog71} href="/webpack-code-splitting-library" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-7-2" image={image7.Blog72} href="/github-webhook-node-js" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-7-3" image={image7.Blog73} href="/minimal-node-js-babel-setup" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/web-development" text="Web Development" />
          <BlogItemFeatured imageName="blog-8-0" image={image8.Blog80} href="/npm-crash-course" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-8-1" image={image8.Blog81} href="/github-webhook-node-js" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-8-2" image={image8.Blog82} href="/babel-module-resolver" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-8-3" image={image8.Blog83} href="/git-team-workflow" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/redux" text="Redux" />
          <BlogItemFeatured imageName="blog-9-0" image={image9.Blog90} href="/redux-javascript" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-9-1" image={image9.Blog91} href="/react-connected-component-test" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-9-2" image={image9.Blog92} href="/redux-persist-next-js" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-9-3" image={image9.Blog93} href="/react-firebase-redux-tutorial" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/eslint" text="ESLint" />
          <BlogItemFeatured imageName="blog-10-0" image={image10.Blog100} href="/babel-module-resolver" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-10-1" image={image10.Blog101} href="/react-eslint-webpack-babel" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-10-2" image={image10.Blog102} href="/webpack-eslint" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/babel" text="Babel" />
          <BlogItemFeatured imageName="blog-11-0" image={image11.Blog110} href="/babel-module-resolver" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-11-1" image={image11.Blog111} href="/webpack-images" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-11-2" image={image11.Blog112} href="/webpack-font" title="Lorem ipsum" />
            <BlogItemRegular
              imageName="blog-11-3"
              image={image11.Blog113}
              href="/react-testing-mocha-chai-enzyme-sinon"
              title="Lorem ipsum"
            />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/jest" text="Jest" />
          <BlogItemFeatured imageName="blog-12-0" image={image12.Blog120} href="/jest-snapshot-test-difference" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-12-1" image={image12.Blog121} href="/jest-snapshot-shallow-render" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-12-2" image={image12.Blog122} href="/react-testing-jest" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/webpack" text="Webpack" />
          <BlogItemFeatured imageName="blog-13-0" image={image13.Blog130} href="/webpack-images" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-13-1" image={image13.Blog131} href="/webpack-font" title="Lorem ipsum" />
            <BlogItemRegular
              imageName="blog-13-2"
              image={image13.Blog132}
              href="/react-testing-mocha-chai-enzyme-sinon"
              title="Lorem ipsum"
            />
            <BlogItemRegular imageName="blog-13-3" image={image13.Blog133} href="/javascript-test-coverage" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/nextjs" text="NextJS" />
          <BlogItemFeatured imageName="blog-14-0" image={image14.Blog140} href="/redux-persist-next-js" title="Lorem ipsum" />
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/enzyme" text="Enzyme" />
          <BlogItemFeatured
            imageName="blog-15-0"
            image={image15.Blog150}
            href="/react-testing-mocha-chai-enzyme-sinon"
            title="Lorem ipsum"
          />
          <BlogItemRegular imageName="blog-15-1" image={image15.Blog151} href="/react-testing-jest-enzyme" title="Lorem ipsum" />
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/gatsby" text="Gatsby" />
          <BlogItemFeatured imageName="blog-16-0" image={image16.Blog160} href="/react-gatsby-js" title="Lorem ipsum" />
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/vs-code" text="VS Code" />
          <BlogItemFeatured imageName="blog-17-0" image={image17.Blog170} href="/how-to-use-prettier-vscode" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-17-1" image={image17.Blog171} href="/prettier-eslint" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-17-2" image={image17.Blog172} href="/react-js-macos-setup" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-17-3" image={image17.Blog173} href="/react-js-windows-setup" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/web-components" text="Web Components" />
          <BlogItemFeatured imageName="blog-18-0" image={image18.Blog180} href="/react-web-components" title="Lorem ipsum" />
          <BlogItemRegular imageName="blog-18-1" image={image18.Blog181} href="/web-components-tutorial" title="Lorem ipsum" />
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/mobx" text="MobX" />
          <BlogItemFeatured imageName="blog-19-0" image={image19.Blog190} href="/react-firebase-mobx-tutorial" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-19-1" image={image19.Blog191} href="/create-react-app-mobx-decorators" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-19-2" image={image19.Blog192} href="/react-redux-mobx-state-management" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-19-3" image={image19.Blog193} href="/redux-mobx" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/reason" text="Reason" />
          <BlogItemFeatured imageName="blog-20-0" image={image20.Blog200} href="/reason-react-tutorial" title="Lorem ipsum" />
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/graphql" text="GraphQL" />
          <BlogItemFeatured imageName="blog-21-0" image={image21.Blog210} href="/the-road-to-graphql-book" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-21-1" image={image21.Blog211} href="/graphql-tutorial" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-21-2" image={image21.Blog212} href="/graphql-apollo-client-tutorial" title="Lorem ipsum" />
            <BlogItemRegular imageName="blog-21-3" image={image21.Blog213} href="/react-apollo-client-testing" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/angular" text="Angular" />
          <BlogItemFeatured imageName="blog-22-0" image={image22.Blog220} href="/why-frameworks-matter" title="Lorem ipsum" />
          <div className={container1BlogList}>
            <BlogItemRegular imageName="blog-22-1" image={image22.Blog221} href="/how-to-learn-framework" title="Lorem ipsum" />
            <BlogItemRegular
              imageName="blog-22-2"
              image={image22.Blog222}
              href="/reasons-why-i-moved-from-angular-to-react"
              title="Lorem ipsum"
            />
            <BlogItemRegular imageName="blog-22-3" image={image22.Blog223} href="/d3 -on-angular-resuable-components" title="Lorem ipsum" />
          </div>
        </section>
        <section itemScope itemType="http://schema.org/Blog">
          <H2 prefix="Read more about" href="/categories/vue" text="Vue" />
          <BlogItemFeatured imageName="blog-23-0" image={image23.Blog230} href="/why-frameworks-matter" title="Lorem ipsum" />
          <BlogItemRegular imageName="blog-23-1" image={image23.Blog231} href="/how-to-learn-framework" title="Lorem ipsum" />
        </section>
      </div>
    </main>
  )
}

BlogMain.defaultProps = blogMainDefaultProps

BlogMain.propTypes = blogMainPropTypes
