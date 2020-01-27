import { storiesOf } from '@storybook/react'
import { defaultRender } from './Navigation.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Navigation', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
