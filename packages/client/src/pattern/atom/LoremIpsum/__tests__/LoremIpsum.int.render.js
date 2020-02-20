import React from 'react'
import { LoremIpsum } from '../LoremIpsum'
import { element } from '../../../../../../library/src/client/dom'
import { size } from '../../../../../../library/src/client/placeholder'

export const paragraphX2SmallTimesOneRender = <LoremIpsum container={element.paragraph} length={size.x2Small} count={1} />
export const paragraphX1SmallTimesOneRender = <LoremIpsum container={element.paragraph} length={size.x1Small} count={1} />
export const paragraphSmallTimesOneRender = <LoremIpsum container={element.paragraph} length={size.small} count={1} />
export const paragraphMediumTimesOneRender = <LoremIpsum container={element.paragraph} length={size.medium} count={1} />
export const paragraphLargeTimesOneRender = <LoremIpsum container={element.paragraph} length={size.large} count={1} />

export const textX2SmallTimesOneRender = <LoremIpsum length={size.x2Small} count={1} />
export const textX1SmallTimesOneRender = <LoremIpsum length={size.x1Small} count={1} />
export const textSmallTimesOneRender = <LoremIpsum length={size.small} count={1} />
export const textMediumTimesOneRender = <LoremIpsum length={size.medium} count={1} />
export const textLargeTimesOneRender = <LoremIpsum length={size.large} count={1} />
