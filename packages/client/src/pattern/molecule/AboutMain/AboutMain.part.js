import React from 'react'
import { aPropTypes, h2DefaultProps, h2PropTypes, h3PropTypes } from './AboutMain.props'

export function A({ href, text }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  )
}

A.propTypes = aPropTypes

export function H2({ className, text }) {
  return (
    <h2 className={className}>
      <a
        href={`#${text
          .toLowerCase()
          .replace(/ /g, '-')
          .replace('?', '')
          .replace('.', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${text
          .toLowerCase()
          .replace('?', '')
          .replace('.', '')} permalink`}
      >
        <svg height="0" width="0" />
      </a>
      {text}
    </h2>
  )
}

H2.defaultProps = h2DefaultProps
H2.propTypes = h2PropTypes

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
