import React from 'react'
import cx from 'classnames'
import { homeTemplate } from './HomeTemplate.scss'
import { homeTemplateDefaultProps, homeTemplatePropTypes } from './HomeTemplate.props'

export function HomeTemplate({ className, data }) {
  return (
    <div>
      <h2>{data.info.name}</h2>
      <div className={cx(className, homeTemplate)} />
    </div>
  )
}

HomeTemplate.defaultProps = homeTemplateDefaultProps

HomeTemplate.propTypes = homeTemplatePropTypes
