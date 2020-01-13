import { string, object } from 'prop-types'

export const homeTemplateDefaultProps = {
  className: '',
}

export const homeTemplatePropTypes = {
  className: string,
  data: object.isRequired,
}
