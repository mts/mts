import { storiesOf } from '@storybook/react'
import { defaultRender } from './Footer.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Footer', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
