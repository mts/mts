import React, { useEffect } from 'react'
import {
  container1,
  container1Header,
  container1HeaderSubHeader,
  container1HeaderSubHeaderPrimary,
  container1HeaderFollowButtons,
  container1HeaderFollowButtonsItem,
  container1HeaderFollowButtonsItemFacebookFollow,
  container1HeaderContainer1,
  container1Title,
} from './AboutMain.scss'
import { aboutMainDefaultProps, aboutMainPropTypes } from './AboutMain.props'
import { handleStickyNavBar } from '../../../../../library/src/client/navBar'
import { windowObjectExists } from '../../../../../library/src/environment'
import Banner from '../../../asset/image/banner.jpg'

export function AboutMain({ className }) {
  useEffect(() => {
    handleStickyNavBar()
  })

  return (
    <main className={className} style={{ marginTop: '55px', display: 'flex', justifyContent: 'center' }}>
      <section className={container1}>
        <header className={container1Header}>
          <h1>About Me</h1>
          <meta itemProp="name" content="About Me" />
          <span className={container1HeaderSubHeader}>
            <div className={container1HeaderSubHeaderPrimary}>
              <meta
                itemProp="description"
                content="Software Engineer for React.js, Node.js, GraphQL and JavaScript. English speaking. Consulting/Freelancing for Web Development project: Code Audits/Reviews, Workshops, Training, Implementation ..."
              />
              <time itemProp="datePublished" dateTime="01-01-2020">
                January 1, 2020
              </time>
              <meta itemProp="dateModified" content="01-01-2020" />
              <meta
                itemProp="keywords"
                content="american react consultant,american react freelancer,american javascript freelancer,american javascript consultant"
              />
              <meta itemProp="wordCount" content="2384" />
              <span>
                &nbsp;by&nbsp;<span>MTS</span>
                <meta itemProp="author" content="MTS" />
              </span>
              <div itemProp="publisher" itemScope="" itemType="https://schema.org/Organization">
                <meta itemProp="name" />
                <div itemProp="logo" itemScope="" itemType="https://schema.org/ImageObject">
                  <meta itemProp="url" content="https://mts.github.io/mts/static/logo.jpg" />
                </div>
              </div>
              <span>
                &nbsp;-&nbsp;
                <a href="https://github.com/mts/mts" target="_blank" rel="noopener noreferrer">
                  Edit this Post
                </a>
              </span>
            </div>
          </span>
          <ul className={container1HeaderFollowButtons}>
            <li className={container1HeaderFollowButtonsItem}>
              <a href="https://twitter.com/hashtag/willsmith" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/twitter/follow/willsmith.svg?style=social&amp;label=Follow on Twitter"
                  alt="Follow on Twitter"
                />
              </a>
            </li>
            <li className={container1HeaderFollowButtonsItem}>
              <a
                href="https://www.facebook.com/Will-Smith-92304305160/"
                target="_blank"
                rel="noopener noreferrer"
                className={container1HeaderFollowButtonsItemFacebookFollow}
              >
                <svg width="12px" height="12px" viewBox="0 0 96.124 96.123">
                  <path d="M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037a1.96 1.96 0 0 0-1.96 1.961v15.803a1.96 1.96 0 0 0 1.96 1.96H36.57v39.876a1.96 1.96 0 0 0 1.96 1.96h16.352a1.96 1.96 0 0 0 1.96-1.96V54.287h14.654a1.96 1.96 0 0 0 1.96-1.96l.006-15.803a1.963 1.963 0 0 0-1.961-1.961H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003a1.96 1.96 0 0 0 1.959-1.96V1.98A1.96 1.96 0 0 0 72.089.02z" />
                </svg>
                &nbsp;Follow on Facebook
              </a>
            </li>
          </ul>
          <div className={container1HeaderContainer1}>
            <div style={{ width: '100%', paddingBottom: '75%' }} />
            <picture>
              <img src={!windowObjectExists ? 'mts/static/banner.jpg' : Banner} alt="banner" />
            </picture>
          </div>
          <meta itemProp="image" content={!windowObjectExists ? 'mts/static/banner.jpg' : Banner} />
        </header>
        <meta itemProp="mainEntityOfPage" content="https://mts.github.io/about" />
        <arcticle itemProp="articleBody">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis eleifend, pretium leo ut, euismod sapien. Sed quis
            purus quis metus sagittis sollicitudin accumsan in ante. Cras tortor nisi, vulputate in pharetra et, cursus non felis.
            Pellentesque libero nulla, auctor ac viverra eu, gravida eu odio.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis eleifend, pretium leo ut, euismod sapien. Sed quis
            purus quis metus sagittis sollicitudin accumsan in ante. Cras tortor nisi, vulputate in pharetra et, cursus non felis.
            Pellentesque libero nulla, auctor ac viverra eu, gravida eu odio. Vestibulum dolor ex, mollis eget euismod et, auctor ut est.
            Etiam posuere hendrerit tincidunt. Curabitur commodo, sapien id mattis sagittis, lectus dolor ullamcorper purus, et lacinia elit
            urna tincidunt massa. Nam pretium nisi at vehicula placerat. Ut molestie eros in sapien mollis, tincidunt vehicula arcu
            pellentesque. Proin vel elementum ante. Curabitur ut erat massa. Integer pellentesque mauris sed libero scelerisque molestie.
            Morbi ac dapibus urna. Donec magna felis, porta eget felis vel, sodales fringilla quam. Maecenas mauris ligula, tempus et
            pretium quis, aliquam nec odio. Praesent mattis a leo lacinia facilisis. Integer rutrum ac purus nec blandit. Nullam et felis ut
            eros sodales laoreet non vel ex. Suspendisse quis viverra purus. Pellentesque lobortis semper laoreet. Proin venenatis lacus nec
            neque aliquam cursus. Nullam porttitor a nulla a venenatis. Duis eu sapien velit. Phasellus sagittis vitae ligula eget posuere.
            Nullam volutpat cursus nunc, at molestie tellus pellentesque non. Vestibulum dignissim ante vel diam tincidunt iaculis.
            Vestibulum vehicula lobortis ultrices.
          </p>
          <h2 className={container1Title}>
            <a href="#values-and-mission" target="_blank" rel="noopener noreferrer" aria-label="values and mission permalink">
              <svg height="0" width="0" />
            </a>
            Values and Mission
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis eleifend, pretium leo ut, euismod sapien. Sed quis
            purus quis metus sagittis sollicitudin accumsan in ante. Cras tortor nisi, vulputate in pharetra et, cursus non felis.
            Pellentesque libero nulla, auctor ac viverra eu, gravida eu odio. Vestibulum dolor ex, mollis eget euismod et, auctor ut est.
            Etiam posuere hendrerit tincidunt. Curabitur commodo, sapien id mattis sagittis, lectus dolor ullamcorper purus, et lacinia elit
            urna tincidunt massa. Nam pretium nisi at vehicula placerat. Ut molestie eros in sapien mollis, tincidunt vehicula arcu
            pellentesque. Proin vel elementum ante. Curabitur ut erat massa. Integer pellentesque mauris sed libero scelerisque molestie.
            Morbi ac dapibus urna. Donec magna felis, porta eget felis vel, sodales fringilla quam. Maecenas mauris ligula, tempus et
            pretium quis, aliquam nec odio. Praesent mattis a leo lacinia facilisis. Integer rutrum ac purus nec blandit. Nullam et felis ut
            eros sodales laoreet non vel ex. Suspendisse quis viverra purus. Pellentesque lobortis semper laoreet. Proin venenatis lacus nec
            neque aliquam cursus. Nullam porttitor a nulla a venenatis. Duis eu sapien velit. Phasellus sagittis vitae ligula eget posuere.
            Nullam volutpat cursus nunc, at molestie tellus pellentesque non. Vestibulum dignissim ante vel diam tincidunt iaculis.
            Vestibulum vehicula lobortis ultrices.
          </p>
          <h2 className={container1Title}>
            <a
              href="#passions-beyond-software-development"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="passions beyond software development permalink"
            >
              <svg height="0" width="0" />
            </a>
            Passions beyond Software Development
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis eleifend, pretium leo ut, euismod sapien. Sed quis
            purus quis metus sagittis sollicitudin accumsan in ante. Cras tortor nisi, vulputate in pharetra et, cursus non felis.
            Pellentesque libero nulla, auctor ac viverra eu, gravida eu odio.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis eleifend, pretium leo ut, euismod sapien. Sed quis
            purus quis metus sagittis sollicitudin accumsan in ante. Cras tortor nisi, vulputate in pharetra et, cursus non felis.
            Pellentesque libero nulla, auctor ac viverra eu, gravida eu odio.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis eleifend, pretium leo ut, euismod sapien. Sed quis
            purus quis metus sagittis sollicitudin accumsan in ante. Cras tortor nisi, vulputate in pharetra et, cursus non felis.
            Pellentesque libero nulla, auctor ac viverra eu, gravida eu odio.
          </p>
          <h2 className={container1Title}>
            <a
              href="#you-like-my-content-here-are-a-couple-of-ways-to-support-it"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="you like my content here are a couple of ways to support it permalink"
            >
              <svg height="0" width="0" />
            </a>
            You like my content? Here are a couple of ways to support it.
          </h2>
        </arcticle>
      </section>
    </main>
  )
}

AboutMain.defaultProps = aboutMainDefaultProps

AboutMain.propTypes = aboutMainPropTypes
