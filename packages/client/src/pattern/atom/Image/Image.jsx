import cx from 'classnames'
import { imageDefaultProps, imagePropTypes } from './Image.prop'

export function Image({ className, divStyle, srcSet, sizes, src, alt, loading }) {
  return (
    <div className={cx(className)}>
      <div style={divStyle} />
      <picture>
        <source srcSet={srcSet} sizes={sizes} />
        <img sizes={sizes} srcSet={srcSet} src={src} alt={alt} loading={loading} />
      </picture>
    </div>
  )
}

Image.defaultProps = imageDefaultProps

Image.propTypes = imagePropTypes
