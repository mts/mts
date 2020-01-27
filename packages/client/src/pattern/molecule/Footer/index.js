import React from 'react'
import cx from 'classnames'
import {
  footer,
  footerLinksOne,
  footerLinksOneLabel,
  footerLinksOneLink,
  footerLinksTwo,
  footerLinksTwoLabel,
  footerLinksTwoLink,
} from './Footer.scss'
import { footerDefaultProps, footerPropTypes } from './Footer.props'

export function Footer({ className }) {
  return (
    <footer className={cx(className, footer)}>
      <div className={footerLinksOne}>
        <small className={footerLinksOneLabel}>Portfolio</small>
        <ul>
          <li className={footerLinksOneLink}>
            <a
              href="https://mtsonlinecourses.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Go To Sub Footer Link: Online Courses"
            >
              <small>Online Courses</small>
            </a>
          </li>
          <li className={footerLinksOneLink}>
            <a href="https://github.com/mts" target="_blank" rel="noopener noreferrer" aria-label="Go To Sub Footer Link: Open Source">
              <small>Open Source</small>
            </a>
          </li>
          <li className={footerLinksOneLink}>
            <a itemProp="url" aria-label="Go To Sub Footer Link: Tutorials" href="/blog">
              <small>Tutorials</small>
            </a>
          </li>
        </ul>
      </div>
      <div className={footerLinksTwo}>
        <small className={footerLinksTwoLabel}>About</small>
        <ul>
          <li className={footerLinksTwoLink}>
            <a itemProp="url" aria-label="Go To Sub Footer Link: About me" href="/about">
              <small>About me</small>
            </a>
          </li>
          <li className={footerLinksTwoLink}>
            <a itemProp="url" aria-label="Go To Sub Footer Link: What I use" href="/about#what-i-use">
              <small>What I use</small>
            </a>
          </li>
          <li className={footerLinksTwoLink}>
            <a itemProp="url" aria-label="Go To Sub Footer Link: How to work with me" href="/work-with-me">
              <small>How to work with me</small>
            </a>
          </li>
          <li className={footerLinksTwoLink}>
            <a itemProp="url" aria-label="Go To Sub Footer Link: How to support me" href="/about#support-me">
              <small>How to support me</small>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

Footer.defaultProps = footerDefaultProps

Footer.propTypes = footerPropTypes
