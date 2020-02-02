import { storiesOf } from '@storybook/react'
import { defaultRender } from './Book.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/Book', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
