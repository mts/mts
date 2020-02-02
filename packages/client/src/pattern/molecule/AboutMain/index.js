import React, { useEffect } from 'react'
import { container1, container1Header, container1HeaderSubHeader, container1HeaderSubHeaderPrimary } from './AboutMain.scss'
import { aboutMainDefaultProps, aboutMainPropTypes } from './AboutMain.props'
import { handleStickyNavBar } from '../../../../../library/src/client/navBar'

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
        </header>
      </section>
    </main>
  )
}

AboutMain.defaultProps = aboutMainDefaultProps

AboutMain.propTypes = aboutMainPropTypes
