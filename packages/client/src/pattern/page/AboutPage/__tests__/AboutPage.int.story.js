import { storiesOf } from '@storybook/react'
import { asyncRender, defaultRender } from './AboutPage.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const asyncRenderInfo = getInfo('async')
const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Page/AboutPage', module)
  .add(asyncRenderInfo.text, () => asyncRender, asyncRenderInfo.parameters)
  .add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
