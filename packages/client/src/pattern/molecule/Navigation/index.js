import React from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  nav,
  navBar,
  navBarLogo,
  navBarList,
  navBarListItem,
  navBarListItemLink,
  navBarMobileToggle,
  navBarMobileToggleButton,
} from './Navigation.scss'
import { navigationDefaultProps, navigationPropTypes } from './Navigation.props'
import { windowObjectExists } from '../../../../../library/src/environment'
import Logo from '../../../asset/image/logo.jpg'

function Component({ className, ui }) {
  const {
    homePageData: {
      navigation: {
        navBarList: { about, blog, courses },
      },
    },
  } = ui

  return (
    <nav className={cx(className, nav)}>
      <div className={navBar}>
        <a className={navBarLogo} href="/">
          <img height="40" src={!windowObjectExists ? 'mts/static/logo.jpg' : Logo} alt="logo" />
        </a>
        <ul className={navBarList}>
          <li className={navBarListItem}>
            <a className={navBarListItemLink} href={about} aria-label="About Page">
              About
            </a>
          </li>
          <li className={navBarListItem}>
            <a className={navBarListItemLink} href={blog} aria-label="Blog Page">
              Blog
            </a>
          </li>
          <li className={navBarListItem}>
            <a className={navBarListItemLink} href={courses} aria-label="Courses Page">
              Courses
            </a>
          </li>
        </ul>
        <div className={navBarMobileToggle}>
          <button type="button" className={navBarMobileToggleButton}>
            <svg width="24px" height="24px" viewBox="0 0 124 124">
              <path d="M112 6H12C5.4 6 0 11.4 0 18s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zM112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zM112 94H12c-6.6 0-12 5.4-12 12s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

Component.defaultProps = navigationDefaultProps

Component.propTypes = navigationPropTypes

export const Navigation = connect(
  ({ context, api, ui }) => ({
    context,
    api,
    ui,
  }),
  dispatch => bindActionCreators({}, dispatch),
)(Component)
