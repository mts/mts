import React from 'react'
import cx from 'classnames'
import { aboutTemplate } from './AboutTemplate.scss'
import { aboutTemplateDefaultProps, aboutTemplatePropTypes } from './AboutTemplate.props'
import { ShareButtons } from '../../molecule/ShareButtons'
import { Navigation } from '../../molecule/Navigation'
import { AboutMain } from '../../molecule/AboutMain'
import { Newsletter } from '../../molecule/Newsletter'
import { Footer } from '../../molecule/Footer'

export function AboutTemplate({ className }) {
  return (
    <div className={cx(className, aboutTemplate)}>
      <ShareButtons />
      <Navigation />
      <AboutMain />
      <Newsletter />
      <Footer />
    </div>
  )
}

AboutTemplate.defaultProps = aboutTemplateDefaultProps

AboutTemplate.propTypes = aboutTemplatePropTypes
