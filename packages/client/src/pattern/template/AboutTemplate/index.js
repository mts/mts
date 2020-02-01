import React from 'react'
import cx from 'classnames'
import { aboutTemplate } from './AboutTemplate.scss'
import { aboutTemplateDefaultProps, aboutTemplatePropTypes } from './AboutTemplate.props'
import { ShareButtons } from '../../molecule/ShareButtons'

export function AboutTemplate({ className }) {
  return (
    <div className={cx(className, aboutTemplate)}>
      <ShareButtons />
    </div>
  )
}

AboutTemplate.defaultProps = aboutTemplateDefaultProps

AboutTemplate.propTypes = aboutTemplatePropTypes
