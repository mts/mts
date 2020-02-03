import { string, node } from 'prop-types'

export const blogMainDefaultProps = {
  className: '',
}

export const blogMainPropTypes = {
  className: string,
}

export const h2PropTypes = {
  href: string.isRequired,
  text: string.isRequired,
}

export const blogListItemPropTypes = {
  imageName: string.isRequired,
  image: node.isRequired,
  href: string.isRequired,
  title: string.isRequired,
  text: string.isRequired,
}
