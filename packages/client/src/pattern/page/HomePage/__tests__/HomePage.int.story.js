import React from 'react'
import { Provider } from 'react-redux'
import { withTests } from '@storybook/addon-jest'
import { AsyncHomePage } from '../AsyncHomePage'
import { HomePage } from '../HomePage'
import { getAppMockStore } from '../../../../../../library/src/store/mock'
import { mockAppState } from '../../../../../../library/src/state/mock'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Pattern/Page/HomePage',
  component: HomePage,
  decorators: [withTests({ results })],
  parameters: { jest: ['HomePage.int.test.js'] },
  excludeStories: ['custom'],
}

export function async() {
  return (
    <Provider store={getAppMockStore(mockAppState)}>
      <AsyncHomePage />
    </Provider>
  )
}

export function regular() {
  return (
    <Provider store={getAppMockStore(mockAppState)}>
      <HomePage />
    </Provider>
  )
}
