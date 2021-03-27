import { withTests } from '@storybook/addon-jest'
import { Image } from '../Image'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Pattern/Atom/Image',
  component: Image,
  decorators: [withTests({ results })],
  parameters: { jest: ['Image.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Image />
}
