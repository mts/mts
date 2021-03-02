import React from 'react'
import { withTests } from '@storybook/addon-jest'
import { LoremIpsum } from '../LoremIpsum'
import { element } from '../../../../../../library/src/client/dom'
import { size } from '../../../../../../library/src/client/placeholder'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Pattern/Atom/LoremIpsum',
  component: LoremIpsum,
  decorators: [withTests({ results })],
  parameters: { jest: ['LoremIpsum.int.test.js'] },
  excludeStories: ['custom'],
}

export function paragraphX2SmallTimesOne() {
  return <LoremIpsum container={element.paragraph} length={size.x2Small} count={1} />
}

export function paragraphX1SmallTimesOne() {
  return <LoremIpsum container={element.paragraph} length={size.x1Small} count={1} />
}

export function paragraphSmallTimesOne() {
  return <LoremIpsum container={element.paragraph} length={size.small} count={1} />
}

export function paragraphMediumTimesOne() {
  return <LoremIpsum container={element.paragraph} length={size.medium} count={1} />
}

export function paragraphLargeTimesOne() {
  return <LoremIpsum container={element.paragraph} length={size.large} count={1} />
}

export function textX2SmallTimesOne() {
  return <LoremIpsum length={size.x2Small} count={1} />
}

export function textX1SmallTimesOne() {
  return <LoremIpsum length={size.x1Small} count={1} />
}

export function textSmallTimesOne() {
  return <LoremIpsum length={size.small} count={1} />
}

export function textMediumTimesOne() {
  return <LoremIpsum length={size.medium} count={1} />
}

export function textLargeTimesOne() {
  return <LoremIpsum length={size.large} count={1} />
}
