import { useEffect, useState } from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { nav, navBar, navBarList, navBarListToggle, navBarListItem, navBarMobileToggle } from './Navigation.scss'
import { LogoLink, AboutPageLink, BlogPageLink, CoursesPageLink, MobileToggleButton } from './Navigation.part'
import { navigationDefaultProps, navigationPropTypes } from './Navigation.prop'
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
          <MobileToggleButton onClick={() => toggleNavBarList(!isNavBarListToggled)} />
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
  (dispatch) => bindActionCreators({}, dispatch),
)(Component)
