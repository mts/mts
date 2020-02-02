import { storiesOf } from '@storybook/react'
import { defaultRender } from './BlogMain.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/BlogMain', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
