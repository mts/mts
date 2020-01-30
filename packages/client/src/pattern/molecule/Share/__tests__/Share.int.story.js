import { storiesOf } from '@storybook/react'
import { defaultRender } from './Share.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Share', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
