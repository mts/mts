import React from 'react'
import { Link } from 'react-router-dom'
import { navBarLogo, navBarListItemLink, navBarMobileToggleButton } from './Navigation.scss'
import { mobileToggleButtonPropTypes } from './Navigation.prop'
import Logo from '../../../asset/image/logo.jpg'
import { windowObjectExists } from '../../../../../library/src/environment'
import { homePagePath, aboutPagePath, blogPagePath, coursesPagePath } from '../../../route/path'

export function LogoLink() {
  return (
    <Link className={navBarLogo} itemProp="url" to={homePagePath} aria-label="Logo">
      <img height="40" src={!windowObjectExists ? 'mts/static/logo.jpg' : Logo} alt="logo" />
    </Link>
  )
}

export function AboutPageLink() {
  return (
    <Link className={navBarListItemLink} itemProp="url" to={aboutPagePath} aria-label="Link to About Page">
      About
    </Link>
  )
}

export function BlogPageLink() {
  return (
    <Link className={navBarListItemLink} itemProp="url" to={blogPagePath} aria-label="Link to Blog Page">
      Blog
    </Link>
  )
}

export function CoursesPageLink() {
  return (
    <Link className={navBarListItemLink} itemProp="url" to={coursesPagePath} aria-label="Link to Courses Page">
      Courses
    </Link>
  )
}

export function MobileToggleButton({ onClick }) {
  return (
    <button className={navBarMobileToggleButton} onClick={onClick} type="button" aria-label="Toggle Mobile Navigation Open/Close">
      <svg width="24px" height="24px" viewBox="0 0 124 124">
        <path d="M112 6H12C5.4 6 0 11.4 0 18s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zM112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zM112 94H12c-6.6 0-12 5.4-12 12s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
      </svg>
    </button>
  )
}

MobileToggleButton.propTypes = mobileToggleButtonPropTypes
