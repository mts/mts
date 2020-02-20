import { storiesOf } from '@storybook/react'
import {
  paragraphX2SmallTimesOneRender,
  paragraphX1SmallTimesOneRender,
  paragraphSmallTimesOneRender,
  paragraphMediumTimesOneRender,
  paragraphLargeTimesOneRender,
  textX2SmallTimesOneRender,
  textX1SmallTimesOneRender,
  textSmallTimesOneRender,
  textMediumTimesOneRender,
  textLargeTimesOneRender,
} from './LoremIpsum.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const paragraphX2SmallTimesOneRenderInfo = getInfo('paragraphX2SmallTimesOne')
const paragraphX1SmallTimesOneRenderInfo = getInfo('paragraphX1SmallTimesOne')
const paragraphSmallTimesOneRenderInfo = getInfo('paragraphSmallTimesOne')
const paragraphMediumTimesOneRenderInfo = getInfo('paragraphMediumTimesOne')
const paragraphLargeTimesOneRenderInfo = getInfo('paragraphLargeTimesOne')

const textX2SmallTimesOneRenderInfo = getInfo('textX2SmallTimesOne')
const textX1SmallTimesOneRenderInfo = getInfo('textX1SmallTimesOne')
const textSmallTimesOneRenderInfo = getInfo('textSmallTimesOne')
const textMediumTimesOneRenderInfo = getInfo('textMediumTimesOne')
const textLargeTimesOneRenderInfo = getInfo('textLargeTimesOne')

storiesOf('Patttern/Atom/LoremIpsum', module)
  .add(paragraphX2SmallTimesOneRender.text, () => paragraphX2SmallTimesOneRender, paragraphX2SmallTimesOneRenderInfo.parameter)
  .add(paragraphX1SmallTimesOneRender.text, () => paragraphX1SmallTimesOneRender, paragraphX1SmallTimesOneRenderInfo.parameter)
  .add(paragraphSmallTimesOneRender.text, () => paragraphSmallTimesOneRender, paragraphSmallTimesOneRenderInfo.parameter)
  .add(paragraphMediumTimesOneRender.text, () => paragraphMediumTimesOneRender, paragraphMediumTimesOneRenderInfo.parameter)
  .add(paragraphLargeTimesOneRender.text, () => paragraphLargeTimesOneRender, paragraphLargeTimesOneRenderInfo.parameter)
  .add(textX2SmallTimesOneRender.text, () => textX2SmallTimesOneRender, textX2SmallTimesOneRenderInfo.parameter)
  .add(textX1SmallTimesOneRender.text, () => textX1SmallTimesOneRender, textX1SmallTimesOneRenderInfo.parameter)
  .add(textSmallTimesOneRender.text, () => textSmallTimesOneRender, textSmallTimesOneRenderInfo.parameter)
  .add(textMediumTimesOneRender.text, () => textMediumTimesOneRender, textMediumTimesOneRenderInfo.parameter)
  .add(textLargeTimesOneRender.text, () => textLargeTimesOneRender, textLargeTimesOneRenderInfo.parameter)
