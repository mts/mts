import { string, object } from 'prop-types'

export const navigationDefaultProps = {
  className: '',
}

export const navigationPropTypes = {
  className: string,
  data: object.isRequired,
}
