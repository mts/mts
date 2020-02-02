import { storiesOf } from '@storybook/react'
import { defaultRender } from './LoremIpsum.int.render'
import { getInfo } from '../../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Atom/Placeholder/LoremIpsum', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
