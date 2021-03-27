import { withTests } from '@storybook/addon-jest'
import { Book } from '../index'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Pattern/Molecule/Book',
  component: Book,
  decorators: [withTests({ results })],
  parameters: { jest: ['Book.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Book />
}
