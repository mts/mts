import React from 'react'
import { Provider } from 'react-redux'
import { withTests } from '@storybook/addon-jest'
import { HomeTemplate } from '../index'
import { getAppMockStore } from '../../../../../../library/src/store/mock'
import { mockAppState } from '../../../../../../library/src/state/mock'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Pattern/Template/HomeTemplate',
  component: HomeTemplate,
  decorators: [withTests({ results })],
  parameters: { jest: ['HomeTemplate.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return (
    <Provider store={getAppMockStore(mockAppState)}>
      <HomeTemplate />
    </Provider>
  )
}
