import React from 'react'
import { loremIpsumDefaultProps, loremIpsumPropTypes } from './LoremIpsum.props'

export function LoremIpsum({ className }) {
  return <div className={className}>LoremIpsum Under construction</div>
}

LoremIpsum.defaultProps = loremIpsumDefaultProps

LoremIpsum.propTypes = loremIpsumPropTypes
