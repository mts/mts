import React from 'react'
import { Provider } from 'react-redux'
import { withTests } from '@storybook/addon-jest'
import { AsyncBlogPage } from '../AsyncBlogPage'
import { BlogPage } from '../BlogPage'
import { getAppMockStore } from '../../../../../../library/src/store/mock'
import { mockAppState } from '../../../../../../library/src/state/mock'
import results from '../../../../../../../.jest-test-results.json'

export default {
  title: 'Pattern/Page/BlogPage',
  component: BlogPage,
  decorators: [withTests({ results })],
  parameters: { jest: ['BlogPage.int.test.js'] },
  excludeStories: ['custom'],
}

export function async() {
  return (
    <Provider store={getAppMockStore(mockAppState)}>
      <AsyncBlogPage />
    </Provider>
  )
}

export function regular() {
  return (
    <Provider store={getAppMockStore(mockAppState)}>
      <BlogPage />
    </Provider>
  )
}
