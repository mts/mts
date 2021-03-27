import { Provider } from 'react-redux'
import { withTests } from '@storybook/addon-jest'
import { AsyncCoursesPage } from '../AsyncCoursesPage'
import { CoursesPage } from '../CoursesPage'
import { getAppMockStore } from '../../../../../../library/src/store/mock'
import { mockAppState } from '../../../../../../library/src/state/mock'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Pattern/Page/CoursesPage',
  component: CoursesPage,
  decorators: [withTests({ results })],
  parameters: { jest: ['CoursesPage.int.test.js'] },
  excludeStories: ['custom'],
}

export function async() {
  return (
    <Provider store={getAppMockStore(mockAppState)}>
      <AsyncCoursesPage />
    </Provider>
  )
}

export function regular() {
  return (
    <Provider store={getAppMockStore(mockAppState)}>
      <CoursesPage />
    </Provider>
  )
}
