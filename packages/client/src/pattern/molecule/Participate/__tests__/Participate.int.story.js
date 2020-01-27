import { storiesOf } from '@storybook/react'
import { defaultRender } from './Participate.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Participate', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
