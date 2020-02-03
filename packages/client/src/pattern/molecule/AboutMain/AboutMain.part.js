import React from 'react'
import { h3PropTypes } from './AboutMain.props'

export function H3({ text }) {
  return (
    <h3>
      <a
        href={`#${text.toLowerCase().replace(/ /g, '-')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${text.toLowerCase()} permalink`}
      >
        <svg height="0" width="0" />
      </a>
      {text}
    </h3>
  )
}

H3.propTypes = h3PropTypes
