import { storiesOf } from '@storybook/react'
import { defaultRender } from './CoursesContent.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Molecule/CoursesContent', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
