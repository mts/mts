import { Provider } from 'react-redux'
import { withTests } from '@storybook/addon-jest'
import { Navigation } from '../index'
import { getAppMockStore } from '../../../../../../library/src/store/mock'
import { mockAppState } from '../../../../../../library/src/state/mock'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Pattern/Molecule/Navigation',
  component: Navigation,
  decorators: [withTests({ results })],
  parameters: { jest: ['Navigation.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return (
    <Provider store={getAppMockStore(mockAppState)}>
      <Navigation />
    </Provider>
  )
}
