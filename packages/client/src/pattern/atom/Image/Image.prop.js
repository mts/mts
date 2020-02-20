import { string, object, node } from 'prop-types'

export const imageDefaultProps = {
  className: '',
}

export const imagePropTypes = {
  className: string,
  divStyle: object.isRequired,
  srcSet: string.isRequired,
  sizes: string.isRequired,
  src: node.isRequired,
  alt: string.isRequired,
  loading: string.isRequired,
}
