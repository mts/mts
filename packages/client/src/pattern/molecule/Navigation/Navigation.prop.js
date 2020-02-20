import { string, object, func } from 'prop-types'

export const navigationDefaultProps = {
  className: '',
}

export const navigationPropTypes = {
  className: string,
  ui: object.isRequired,
}

export const mobileToggleButtonPropTypes = {
  onClick: func.isRequired,
}
