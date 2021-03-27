import { Provider } from 'react-redux'
import { withTests } from '@storybook/addon-jest'
import { AboutTemplate } from '../index'
import { getAppMockStore } from '../../../../../../library/src/store/mock'
import { mockAppState } from '../../../../../../library/src/state/mock'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Pattern/Template/AboutTemplate',
  component: AboutTemplate,
  decorators: [withTests({ results })],
  parameters: { jest: ['AboutTemplate.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return (
    <Provider store={getAppMockStore(mockAppState)}>
      <AboutTemplate />
    </Provider>
  )
}
