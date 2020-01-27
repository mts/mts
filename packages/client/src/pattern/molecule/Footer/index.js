import React from 'react'
import cx from 'classnames'
import { footer } from './Footer.scss'
import { footerDefaultProps, footerPropTypes } from './Footer.props'

export function Footer({ className }) {
  return <div className={cx(className, footer)}>Under Construction</div>
}

Footer.defaultProps = footerDefaultProps

Footer.propTypes = footerPropTypes
