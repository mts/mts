import React from 'react'
import cx from 'classnames'
import { mainContent } from './MainContent.scss'
import { mainContentDefaultProps, mainContentPropTypes } from './MainContent.props'

export function MainContent({ className }) {
  return (
    <div className={cx(className, mainContent)}>
      <div>test</div>
    </div>
  )
}

MainContent.defaultProps = mainContentDefaultProps

MainContent.propTypes = mainContentPropTypes
