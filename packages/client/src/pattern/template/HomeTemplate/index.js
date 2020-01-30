import React from 'react'
import cx from 'classnames'
import { homeTemplate } from './HomeTemplate.scss'
import { Share } from '../../molecule/Share'
import { Navigation } from '../../molecule/Navigation'
import { MainContent } from '../../molecule/MainContent'
import { Participate } from '../../molecule/Participate'
import { Footer } from '../../molecule/Footer'
import { homeTemplateDefaultProps, homeTemplatePropTypes } from './HomeTemplate.props'

export function HomeTemplate({ className }) {
  return (
    <div className={cx(className, homeTemplate)}>
      <Share />
      <Navigation />
      <MainContent />
      <Participate />
      <Footer />
    </div>
  )
}

HomeTemplate.defaultProps = homeTemplateDefaultProps

HomeTemplate.propTypes = homeTemplatePropTypes
