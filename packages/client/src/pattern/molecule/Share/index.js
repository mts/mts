import React from 'react'
import cx from 'classnames'
import { share } from './Share.scss'
import { shareDefaultProps, sharePropTypes } from './Share.props'

export function Share({ className }) {
  return <div className={cx(className, share)}>Under construction</div>
}

Share.defaultProps = shareDefaultProps

Share.propTypes = sharePropTypes
