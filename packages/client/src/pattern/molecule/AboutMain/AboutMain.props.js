import { string } from 'prop-types'

export const aboutMainDefaultProps = {
  className: '',
}

export const aboutMainPropTypes = {
  className: string,
}

export const aPropTypes = {
  href: string.isRequired,
  text: string.isRequired,
}

export const h2DefaultProps = {
  className: '',
}

export const h2PropTypes = {
  className: string,
  text: string.isRequired,
}

export const h3PropTypes = {
  text: string.isRequired,
}
