import React from 'react'
import cx from 'classnames'
import { buttonList, buttonListItem } from './ShareButtons.scss'
import { FacebookButton, TwitterButton, LinkedInButton } from './ShareButtons.part'
import { shareButtonsDefaultProps, shareButtonsPropTypes } from './ShareButtons.props'

export function ShareButtons({ className }) {
  return (
    <ul className={cx(className, buttonList)}>
      <li className={buttonListItem}>
        <FacebookButton />
      </li>
      <li className={buttonListItem}>
        <TwitterButton />
      </li>
      <li className={buttonListItem}>
        <LinkedInButton />
      </li>
    </ul>
  )
}

ShareButtons.defaultProps = shareButtonsDefaultProps

ShareButtons.propTypes = shareButtonsPropTypes
