import React from 'react'
import cx from 'classnames'
import { nav, navBar, navBarLogo, navBarList, navBarListItem, navBarListItemLink } from './Navigation.scss'
import { navigationDefaultProps, navigationPropTypes } from './Navigation.props'

export function Navigation({ className }) {
  return (
    <nav className={cx(className, nav)}>
      <div className={navBar}>
        <a className={navBarLogo} href="/">
          {/* <img height="40" src="/" alt="logo" /> */}
        </a>
        <ul className={navBarList}>
          <li className={navBarListItem}>
            <a className={navBarListItemLink} href="/about" aria-label="About Page">
              About
            </a>
          </li>
          <li className={navBarListItem}>
            <a className={navBarListItemLink} href="/blog" aria-label="Blog Page">
              Blog
            </a>
          </li>
          <li className={navBarListItem}>
            <a className={navBarListItemLink} href="/courses" aria-label="Courses Page">
              Courses
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

Navigation.defaultProps = navigationDefaultProps

Navigation.propTypes = navigationPropTypes
