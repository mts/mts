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
  container1List,
  container1ListItem,
} from './AboutMain.scss'
import { aboutMainDefaultProps, aboutMainPropTypes } from './AboutMain.props'
import { handleStickyNavBar } from '../../../../../library/src/client/navBar'
import { windowObjectExists } from '../../../../../library/src/environment'
import Banner from '../../../asset/image/banner.jpg'
import { LoremIpsum } from '../../atom/placeholder/LoremIpsum'
import { element } from '../../../../../library/src/client/dom'
import { size } from '../../../../../library/src/client/placeholder'

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
          <LoremIpsum container={element.paragraph} length={size.small} count={1} />
          <LoremIpsum container={element.paragraph} length={size.large} count={1} />
          <h2 className={container1Title}>
            <a href="#values-and-mission" target="_blank" rel="noopener noreferrer" aria-label="values and mission permalink">
              <svg height="0" width="0" />
            </a>
            Values and Mission
          </h2>
          <LoremIpsum container={element.paragraph} length={size.large} count={1} />
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
          <LoremIpsum container={element.paragraph} length={size.small} count={3} />
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
          <LoremIpsum container={element.paragraph} length={size.medium} count={1} />
          <LoremIpsum container={element.paragraph} length={size.small} count={1} />
          <h3>
            <a href="#be-my-patron" target="_blank" rel="noopener noreferrer" aria-label="be my patron permalink">
              <svg height="0" width="0" />
            </a>
            Be my Patron
          </h3>
          <LoremIpsum container={element.paragraph} length={size.small} count={1} />
          <h3>
            <a href="#follow-me" target="_blank" rel="noopener noreferrer" aria-label="follow me permalink">
              <svg height="0" width="0" />
            </a>
            Follow Me
          </h3>
          <LoremIpsum container={element.paragraph} length={size.small} count={1} />
          <h3>
            <a href="#leave-a-review" target="_blank" rel="noopener noreferrer" aria-label="leave a review permalink">
              <svg height="0" width="0" />
            </a>
            Leave a Review
          </h3>
          <LoremIpsum container={element.paragraph} length={size.small} count={1} />
          <h3>
            <a href="#share" target="_blank" rel="noopener noreferrer" aria-label="share permalink">
              <svg height="0" width="0" />
            </a>
            Share
          </h3>
          <LoremIpsum container={element.paragraph} length={size.small} count={1} />
          <h3>
            <a href="#learn-react" target="_blank" rel="noopener noreferrer" aria-label="learn react permalink">
              <svg height="0" width="0" />
            </a>
            Learn React
          </h3>
          <LoremIpsum container={element.paragraph} length={size.small} count={1} />
          <h3>
            <a href="#contribute" target="_blank" rel="noopener noreferrer" aria-label="contribute permalink">
              <svg height="0" width="0" />
            </a>
            Contribute
          </h3>
          <LoremIpsum container={element.paragraph} length={size.small} count={2} />
          <h3>
            <a href="#donate" target="_blank" rel="noopener noreferrer" aria-label="donate permalink">
              <svg height="0" width="0" />
            </a>
            Donate
          </h3>
          <LoremIpsum container={element.paragraph} length={size.x1Small} count={1} />
          <h2 className={container1Title}>
            <a href="#what-i-use" target="_blank" rel="noopener noreferrer" aria-label="what i use permalink">
              <svg height="0" width="0" />
            </a>
            What I Use
          </h2>
          <LoremIpsum container={element.paragraph} length={size.small} count={1} />
          <h3>
            <a href="#heroku-and-github-pages" target="_blank" rel="noopener noreferrer" aria-label="heroku and github pages permalink">
              <svg height="0" width="0" />
            </a>
            Heroku and GitHub Pages
          </h3>
          <LoremIpsum container={element.paragraph} length={size.x1Small} count={1} />
          <h3>
            <a href="#email" target="_blank" rel="noopener noreferrer" aria-label="email permalink">
              <svg height="0" width="0" />
            </a>
            Email
          </h3>
          <LoremIpsum container={element.paragraph} length={size.x2Small} count={1} />
          <h3>
            <a href="#editor-and-terminal" target="_blank" rel="noopener noreferrer" aria-label="editor and terminal permalink">
              <svg height="0" width="0" />
            </a>
            Editor and Terminal
          </h3>
          <LoremIpsum container={element.paragraph} length={size.x1Small} count={1} />
          <h3>
            <a href="#nomad-gear" target="_blank" rel="noopener noreferrer" aria-label="nomad gear permalink">
              <svg height="0" width="0" />
            </a>
            Nomad Gear
          </h3>
          <LoremIpsum container={element.paragraph} length={size.x2Small} count={1} />
          <ul className={container1List}>
            <li className={container1ListItem}>
              <a href="https://amzn.to/2RwCPwg" target="_blank" rel="noopener noreferrer">
                Trackpad
              </a>{' '}
              and{' '}
              <a href="https://amzn.to/2SPqZ1K" target="_blank" rel="noopener noreferrer">
                Keyboard
              </a>{' '}
            </li>
            <li className={container1ListItem}>
              <a href="https://amzn.to/2RChPEq" target="_blank" rel="noopener noreferrer">
                Display
              </a>{' '}
            </li>
          </ul>

          <h3>
            <a href="#apps" target="_blank" rel="noopener noreferrer" aria-label="apps gear permalink">
              <svg height="0" width="0" />
            </a>
            Apps
          </h3>
          <ul className={container1List}>
            <li className={container1ListItem}>
              <a href="https://apps.apple.com/us/app/twitter/id333903271" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
          </ul>
          <h3>
            <a href="freelancers" target="_blank" rel="noopener noreferrer" aria-label="freelancers permalink">
              <svg height="0" width="0" />
            </a>
            Freelancers
          </h3>
          <LoremIpsum container={element.paragraph} length={size.x1Small} count={1} />
          <ul className={container1List}>
            <li className={container1ListItem}>
              <p>
                <strong>Online Marketing and Social Media:</strong>{' '}
                <LoremIpsum container={element.paragraph} length={size.x1Small} count={1} />
              </p>
            </li>
            <li className={container1ListItem}>
              <p>
                <strong>Proofreader/Editor:</strong>
                <LoremIpsum container={element.paragraph} length={size.x2Small} count={1} />
              </p>
            </li>
            <li className={container1ListItem}>
              <p>
                <strong>Logo Design:</strong> I worked with <LoremIpsum container={element.paragraph} length={size.x1Small} count={1} />
              </p>
            </li>
          </ul>
          <h3>
            <a href="revue" target="_blank" rel="noopener noreferrer" aria-label="revue permalink">
              <svg height="0" width="0" />
            </a>
            Revue
          </h3>
          <LoremIpsum container={element.paragraph} length={size.x1Small} count={1} />
          <ul className={container1List}>
            <li className={container1ListItem}>permalinks to newsletters</li>
            <li className={container1ListItem}>powerful integrations for fetching content automatically</li>
            <li className={container1ListItem}>simple and intuitive UI/UX</li>
            <li className={container1ListItem}>great pricing model for a larger audience</li>
            <li className={container1ListItem}>statistics and analytics</li>
          </ul>
        </arcticle>
      </section>
    </main>
  )
}

AboutMain.defaultProps = aboutMainDefaultProps

AboutMain.propTypes = aboutMainPropTypes
