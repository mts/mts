import React from 'react'
import cx from 'classnames'
import { aboutTemplate } from './AboutTemplate.scss'
import { aboutTemplateDefaultProps, aboutTemplatePropTypes } from './AboutTemplate.props'
import { ShareButtons } from '../../molecule/ShareButtons'
import { Navigation } from '../../molecule/Navigation'

export function AboutTemplate({ className }) {
  return (
    <div className={cx(className, aboutTemplate)}>
      <ShareButtons />
      <Navigation />
    </div>
  )
}

AboutTemplate.defaultProps = aboutTemplateDefaultProps

AboutTemplate.propTypes = aboutTemplatePropTypes
