import { storiesOf } from '@storybook/react'
import { defaultRender } from './Newsletter.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Newsletter', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
