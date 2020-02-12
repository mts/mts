import { string, node } from 'prop-types'

export const blogMainDefaultProps = {
  className: '',
}

export const blogMainPropTypes = {
  className: string,
}

export const h2DefaultProps = {
  prefix: null,
}

export const h2PropTypes = {
  prefix: string,
  href: string.isRequired,
  text: string.isRequired,
}

export const blogItemFeaturedDefaultProps = {
  text: null,
}

export const blogItemFeaturedPropTypes = {
  imageName: string.isRequired,
  image: node.isRequired,
  href: string.isRequired,
  title: string.isRequired,
  text: string,
}

export const blogItemRegularDefaultProps = {
  text: null,
}

export const blogItemRegularPropTypes = {
  imageName: string.isRequired,
  image: node.isRequired,
  href: string.isRequired,
  title: string.isRequired,
  text: string,
}
