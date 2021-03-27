import {
  loremIpsumTextX2Small,
  loremIpsumTextX1Small,
  loremIpsumTextSmall,
  loremIpsumTextMedium,
  loremIpsumTextLarge,
} from './LoremIpsum.part'
import { loremIpsumDefaultProps, loremIpsumPropTypes } from './LoremIpsum.prop'
import { element } from '../../../../../library/src/client/dom'
import { size } from '../../../../../library/src/client/placeholder'

export function LoremIpsum({ className, container, length, count }) {
  function LoremIpsumTimesCount() {
    function Paragraph() {
      switch (length) {
        case size.x2Small:
          return <p className={className}>{loremIpsumTextX2Small}</p>
        case size.x1Small:
          return <p className={className}>{loremIpsumTextX1Small}</p>
        case size.small:
          return <p className={className}>{loremIpsumTextSmall}</p>
        case size.medium:
          return <p className={className}>{loremIpsumTextMedium}</p>
        case size.large:
          return <p className={className}>{loremIpsumTextLarge}</p>
        default:
          return null
      }
    }

    function Text() {
      switch (length) {
        case size.x2Small:
          return loremIpsumTextX2Small
        case size.x1Small:
          return loremIpsumTextX1Small
        case size.small:
          return loremIpsumTextSmall
        case size.medium:
          return loremIpsumTextMedium
        case size.large:
          return loremIpsumTextLarge
        default:
          return null
      }
    }

    const parsedCount = parseInt(count, 10)
    if (Number.isNaN(parsedCount) || parsedCount === -1) {
      return null
    }

    if (container === element.paragraph) {
      return Array(parsedCount).fill(<Paragraph />)
    }

    if (!container) {
      return Array(parsedCount).fill(<Text />)
    }

    return null
  }

  return (
    <>
      <LoremIpsumTimesCount />
    </>
  )
}

LoremIpsum.defaultProps = loremIpsumDefaultProps

LoremIpsum.propTypes = loremIpsumPropTypes
