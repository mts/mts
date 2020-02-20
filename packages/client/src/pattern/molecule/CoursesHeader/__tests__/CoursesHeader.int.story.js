import { storiesOf } from '@storybook/react'
import { defaultRender } from './CoursesHeader.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/CoursesHeader', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
