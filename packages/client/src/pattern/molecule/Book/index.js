import React from 'react'
import cx from 'classnames'
import { topBorder } from './Book.scss'
import { bookDefaultProps, bookPropTypes } from './Book.props'

export function Book({ className }) {
  return <div className={cx(className, topBorder)}>Book under construction</div>
}

Book.defaultProps = bookDefaultProps

Book.propTypes = bookPropTypes
