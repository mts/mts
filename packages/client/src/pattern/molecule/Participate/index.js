import React from 'react'
import cx from 'classnames'
import { part } from './Participate.scss'
import { participateDefaultProps, participatePropTypes } from './Participate.props'

export function Participate({ className }) {
  return <div className={cx(className, part)}>under construction</div>
}

Participate.defaultProps = participateDefaultProps

Participate.propTypes = participatePropTypes
