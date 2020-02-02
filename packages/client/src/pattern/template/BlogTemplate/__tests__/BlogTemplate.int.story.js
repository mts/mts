import { storiesOf } from '@storybook/react'
import { defaultRender } from './BlogTemplate.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Template/BlogTemplate', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
