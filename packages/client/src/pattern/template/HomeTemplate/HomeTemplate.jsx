import React from 'react'
import cx from 'classnames'
import { homeTemplate } from './HomeTemplate.scss'
import { Navigation } from '../../molecule/Navigation'
import { MainContent } from '../../molecule/MainContent'
import { homeTemplateDefaultProps, homeTemplatePropTypes } from './HomeTemplate.props'

export function HomeTemplate({ className }) {
  return (
    <div className={cx(className, homeTemplate)}>
      <Navigation data={{}} />
      <MainContent data={{}} />
    </div>
  )
}

HomeTemplate.defaultProps = homeTemplateDefaultProps

HomeTemplate.propTypes = homeTemplatePropTypes
