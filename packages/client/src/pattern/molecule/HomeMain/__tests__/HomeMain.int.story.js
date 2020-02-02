import { storiesOf } from '@storybook/react'
import { defaultRender } from './HomeMain.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/HomeMain', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
