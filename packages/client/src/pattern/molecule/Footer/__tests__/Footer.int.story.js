import { withTests } from '@storybook/addon-jest'
import { Footer } from '../index'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Pattern/Molecule/Footer',
  component: Footer,
  decorators: [withTests({ results })],
  parameters: { jest: ['Footer.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Footer />
}
