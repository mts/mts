import React from 'react'
import { LoremIpsum } from '../LoremIpsum'
import { element } from '../../../../../../../library/src/client/dom'
import { size } from '../../../../../../../library/src/client/placeholder'

export const paragraphSmallTimesOneRender = <LoremIpsum container={element.paragraph} length={size.small} count={1} />
export const paragraphLargeTimesOneRender = <LoremIpsum container={element.paragraph} length={size.large} count={1} />
