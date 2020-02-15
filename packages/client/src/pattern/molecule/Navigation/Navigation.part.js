import React from 'react'
import { Link } from 'react-router-dom'
import { navBarLogo, navBarListItemLink } from './Navigation.scss'
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
