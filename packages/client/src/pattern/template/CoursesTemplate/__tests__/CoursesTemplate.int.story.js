import { storiesOf } from '@storybook/react'
import { defaultRender } from './CoursesTemplate.int.render'
import { getInfo } from '../../../../../../../.storybook/library'

const defaultRenderInfo = getInfo('default')

storiesOf('Patttern/Template/CoursesTemplate', module).add(defaultRenderInfo.text, () => defaultRender, defaultRenderInfo.parameters)
