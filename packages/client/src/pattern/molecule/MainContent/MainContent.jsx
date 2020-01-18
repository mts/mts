import React from 'react'
import cx from 'classnames'
import { main, mainBackgroundImage } from './MainContent.scss'
import { mainContentDefaultProps, mainContentPropTypes } from './MainContent.props'

export function MainContent({ className }) {
  return (
    <div className={cx(className, main)}>
      <div className={mainBackgroundImage} />
    </div>
  )
}

MainContent.defaultProps = mainContentDefaultProps

MainContent.propTypes = mainContentPropTypes
