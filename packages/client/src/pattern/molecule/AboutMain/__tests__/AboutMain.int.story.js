import { storiesOf } from '@storybook/react'
import { defaultRender } from './AboutMain.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/AboutMain', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
