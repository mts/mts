import { withTests } from '@storybook/addon-jest'
import { ShareButtons } from '../index'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Pattern/Molecule/ShareButtons',
  component: ShareButtons,
  decorators: [withTests({ results })],
  parameters: { jest: ['ShareButtons.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <ShareButtons />
}
