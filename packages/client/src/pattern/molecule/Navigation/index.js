import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { nav, navBar, navBarList, navBarListToggle, navBarListItem, navBarMobileToggle, navBarMobileToggleButton } from './Navigation.scss'
import { LogoLink, AboutPageLink, BlogPageLink, CoursesPageLink } from './Navigation.part'
import { navigationDefaultProps, navigationPropTypes } from './Navigation.props'
import { handleStickyNavBar } from '../../../../../library/src/client/navBar'
import { isMobile } from '../../../../../library/src/client/window'

function Component({ className }) {
  const [isNavBarListToggled, toggleNavBarList] = useState(false)

  useEffect(() => {
    handleStickyNavBar()
  })

  return (
    <nav className={cx(className, nav)} role="navigation" itemScope="" itemType="http://schema.org/SiteNavigationElement">
      <div className={navBar}>
        {isMobile && isNavBarListToggled ? null : null}

        {isMobile && !isNavBarListToggled ? <LogoLink /> : null}

        {!isMobile ? <LogoLink /> : null}

        <ul className={cx(navBarList, isNavBarListToggled ? navBarListToggle : '')}>
          <li className={navBarListItem}>
            <AboutPageLink />
          </li>
          <li className={navBarListItem}>
            <BlogPageLink />
          </li>
          <li className={navBarListItem}>
            <CoursesPageLink />
          </li>
        </ul>
        <div className={navBarMobileToggle}>
          <button
            className={navBarMobileToggleButton}
            onClick={() => toggleNavBarList(!isNavBarListToggled)}
            type="button"
            aria-label="Toggle Mobile Navigation Open/Close"
          >
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
