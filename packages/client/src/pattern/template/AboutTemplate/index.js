import React from 'react'
import cx from 'classnames'
import { aboutTemplate } from './AboutTemplate.scss'
import { aboutTemplateDefaultProps, aboutTemplatePropTypes } from './AboutTemplate.props'
import { ShareButtons } from '../../molecule/ShareButtons'
import { Navigation } from '../../molecule/Navigation'
import { Newsletter } from '../../molecule/Newsletter'

export function AboutTemplate({ className }) {
  return (
    <div className={cx(className, aboutTemplate)}>
      <ShareButtons />
      <Navigation />
      <Newsletter />
    </div>
  )
}

AboutTemplate.defaultProps = aboutTemplateDefaultProps

AboutTemplate.propTypes = aboutTemplatePropTypes
