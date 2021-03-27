import { withTests } from '@storybook/addon-jest'
import { AboutMain } from '../index'
import { aboutPageData } from '../../../../../../http-server/src/data/ui/about'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Pattern/Molecule/AboutMain',
  component: AboutMain,
  decorators: [withTests({ results })],
  parameters: { jest: ['AboutMain.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <AboutMain data={aboutPageData.mainContent} />
}
