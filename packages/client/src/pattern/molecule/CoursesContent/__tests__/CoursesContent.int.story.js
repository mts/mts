import { withTests } from '@storybook/addon-jest'
import { CoursesContent } from '../index'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Pattern/Molecule/CoursesContent',
  component: CoursesContent,
  decorators: [withTests({ results })],
  parameters: { jest: ['CoursesContent.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <CoursesContent />
}
