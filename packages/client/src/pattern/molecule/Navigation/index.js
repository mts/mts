import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import {
  nav,
  navBar,
  navBarLogo,
  navBarList,
  navBarListToggle,
  navBarListItem,
  navBarListItemLink,
  navBarMobileToggle,
  navBarMobileToggleButton,
} from './Navigation.scss'
import { navigationDefaultProps, navigationPropTypes } from './Navigation.props'
import { windowObjectExists } from '../../../../../library/src/environment'
import Logo from '../../../asset/image/logo.jpg'
import { handleStickyNavBar } from '../../../../../library/src/client/navBar'
import { isMobile } from '../../../../../library/src/client/window'
import { homePagePath, aboutPagePath, blogPagePath } from '../../../route/path'

function Component({ className }) {
  const [isNavBarListToggled, toggleNavBarList] = useState(false)

  useEffect(() => {
    handleStickyNavBar()
  })

  return (
    <nav className={cx(className, nav)}>
      <div className={navBar}>
        {isMobile && isNavBarListToggled ? null : null}

        {isMobile && !isNavBarListToggled ? (
          <Link className={navBarLogo} to={homePagePath} aria-label="Logo">
            <img height="40" src={!windowObjectExists ? 'mts/static/logo.jpg' : Logo} alt="logo" />
          </Link>
        ) : null}

        {!isMobile ? (
          <a className={navBarLogo} href="/">
            <img height="40" src={!windowObjectExists ? 'mts/static/logo.jpg' : Logo} alt="logo" />
          </a>
        ) : null}

        <ul className={cx(navBarList, isNavBarListToggled ? navBarListToggle : '')}>
          <li className={navBarListItem}>
            <Link className={navBarListItemLink} to={aboutPagePath} aria-label="About Page">
              About
            </Link>
          </li>
          <li className={navBarListItem}>
            <Link className={navBarListItemLink} to={blogPagePath} aria-label="Blog Page">
              Blog
            </Link>
          </li>
          <li className={navBarListItem}>
            <Link className={navBarListItemLink} to={homePagePath} aria-label="Courses Page">
              Courses
            </Link>
          </li>
        </ul>
        <div className={navBarMobileToggle}>
          <button className={navBarMobileToggleButton} onClick={() => toggleNavBarList(!isNavBarListToggled)} type="button">
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
