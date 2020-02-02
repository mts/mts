import { storiesOf } from '@storybook/react'
import { paragraphSmallTimesOneRender, paragraphLargeTimesOneRender } from './LoremIpsum.int.render'
import { getInfo } from '../../../../../../../../.storybook/library'

const paragraphSmallTimesOneRenderInfo = getInfo('paragraphSmallTimesOne')
const paragraphLargeTimesOneRenderInfo = getInfo('paragraphLargeTimesOne')

storiesOf('Patttern/Atom/Placeholder/LoremIpsum', module)
  .add(paragraphSmallTimesOneRender.text, () => paragraphSmallTimesOneRender, paragraphSmallTimesOneRenderInfo.parameters)
  .add(paragraphLargeTimesOneRender.text, () => paragraphLargeTimesOneRender, paragraphLargeTimesOneRenderInfo.parameters)
