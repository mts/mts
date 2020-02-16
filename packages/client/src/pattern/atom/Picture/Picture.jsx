import React from 'react'
import { pictureDefaultProps, picturePropTypes } from './Picture.prop'

export function Picture({ className }) {
  return <div className={className}>Picture under construction</div>
}

Picture.defaultProps = pictureDefaultProps

Picture.propTypes = picturePropTypes
