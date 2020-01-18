import React from 'react'
import cx from 'classnames'
import {
  navigation,
  navigationBar,
  navigationBarLogo,
  navigationBarList,
  navigationBarListItem,
  navigationBarListItemLink,
} from './Navigation.scss'
import { navigationDefaultProps, navigationPropTypes } from './Navigation.props'

export function Navigation({ className }) {
  return (
    <nav role="navigation" className={cx(className, navigation)}>
      <div className={navigationBar}>
        <a className={navigationBarLogo} href="/">
          <img height="40" src="/logo.svg" alt="logo" />
        </a>
        <ul className={navigationBarList}>
          <li className={navigationBarListItem}>
            <a className={navigationBarListItemLink} href="/about">
              About
            </a>
          </li>
          <li className={navigationBarListItem}>
            <a className={navigationBarListItemLink} href="/blog">
              Blog
            </a>
          </li>
          <li className={navigationBarListItem}>
            <a className={navigationBarListItemLink} href="/projects">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

Navigation.defaultProps = navigationDefaultProps

Navigation.propTypes = navigationPropTypes
