import React from 'react'
import cx from 'classnames'
import { nav, navBar, navBarLogo, navBarList, navBarListItem, navBarListItemLink } from './Navigation.scss'
import { navigationDefaultProps, navigationPropTypes } from './Navigation.props'

export function Navigation({ className }) {
  return (
    <nav className={cx(className, nav)}>
      <div className={navBar}>
        <a className={navBarLogo} href="/">
          <img height="40" src="/logo.svg" alt="logo" />
        </a>
        <ul className={navBarList}>
          <li className={navBarListItem}>
            <a className={navBarListItemLink} href="/about">
              About
            </a>
          </li>
          <li className={navBarListItem}>
            <a className={navBarListItemLink} href="/blog">
              Blog
            </a>
          </li>
          <li className={navBarListItem}>
            <a className={navBarListItemLink} href="/courses">
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
