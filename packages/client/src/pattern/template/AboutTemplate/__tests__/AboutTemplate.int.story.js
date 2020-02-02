import { storiesOf } from '@storybook/react'
import { defaultRender } from './AboutTemplate.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Template/AboutTemplate', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
