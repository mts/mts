import { string, object } from 'prop-types'

export const mainContentDefaultProps = {
  className: '',
}

export const mainContentPropTypes = {
  className: string,
  data: object.isRequired,
}
