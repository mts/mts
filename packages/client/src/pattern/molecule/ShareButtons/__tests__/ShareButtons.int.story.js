import { storiesOf } from '@storybook/react'
import { defaultRender } from './ShareButtons.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/ShareButtons', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
