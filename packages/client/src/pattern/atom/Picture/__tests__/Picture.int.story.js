import { storiesOf } from '@storybook/react'
import { defaultRender } from './Picture.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Picture', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
