import { storiesOf } from '@storybook/react'
import { defaultRender } from './MainContent.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/MainContent', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
