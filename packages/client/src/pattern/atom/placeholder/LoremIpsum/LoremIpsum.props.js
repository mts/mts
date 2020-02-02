import { string, number, oneOf } from 'prop-types'
import { element } from '../../../../../../library/src/client/dom'
import { size } from '../../../../../../library/src/client/placeholder'

export const loremIpsumDefaultProps = {
  className: '',
}

export const loremIpsumPropTypes = {
  className: string,
  container: oneOf([element.paragraph]).isRequired,
  length: oneOf([size.small, size.medium, size.large]).isRequired,
  count: number.isRequired,
}
