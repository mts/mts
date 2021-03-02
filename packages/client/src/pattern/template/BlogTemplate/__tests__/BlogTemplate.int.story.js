import React from 'react'
import { Provider } from 'react-redux'
import { withTests } from '@storybook/addon-jest'
import { BlogTemplate } from '../index'
import { getAppMockStore } from '../../../../../../library/src/store/mock'
import { mockAppState } from '../../../../../../library/src/state/mock'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Pattern/Template/BlogTemplate',
  component: BlogTemplate,
  decorators: [withTests({ results })],
  parameters: { jest: ['BlogTemplate.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return (
    <Provider store={getAppMockStore(mockAppState)}>
      <BlogTemplate />
    </Provider>
  )
}
