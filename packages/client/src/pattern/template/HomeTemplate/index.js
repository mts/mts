import React from 'react'
import cx from 'classnames'
import { homeTemplate } from './HomeTemplate.scss'
import { ShareButtons } from '../../molecule/ShareButtons'
import { Navigation } from '../../molecule/Navigation'
import { HomeMain } from '../../molecule/HomeMain'
import { Newsletter } from '../../molecule/Newsletter'
import { Footer } from '../../molecule/Footer'
import { homeTemplateDefaultProps, homeTemplatePropTypes } from './HomeTemplate.props'

export function HomeTemplate({ className }) {
  return (
    <div className={cx(className, homeTemplate)}>
      <ShareButtons />
      <Navigation />
      <HomeMain />
      <Newsletter />
      <Footer />
    </div>
  )
}

HomeTemplate.defaultProps = homeTemplateDefaultProps

HomeTemplate.propTypes = homeTemplatePropTypes
