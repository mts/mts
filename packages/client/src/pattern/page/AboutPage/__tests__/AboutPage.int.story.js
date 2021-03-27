import { Provider } from 'react-redux'
import { withTests } from '@storybook/addon-jest'
import { AsyncAboutPage } from '../AsyncAboutPage'
import { AboutPage } from '../AboutPage'
import { getAppMockStore } from '../../../../../../library/src/store/mock'
import { mockAppState } from '../../../../../../library/src/state/mock'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Pattern/Page/AboutPage',
  component: AboutPage,
  decorators: [withTests({ results })],
  parameters: { jest: ['AboutPage.int.test.js'] },
  excludeStories: ['custom'],
}

export function async() {
  return (
    <Provider store={getAppMockStore(mockAppState)}>
      <AsyncAboutPage />
    </Provider>
  )
}

export function regular() {
  return (
    <Provider store={getAppMockStore(mockAppState)}>
      <AboutPage />
    </Provider>
  )
}
