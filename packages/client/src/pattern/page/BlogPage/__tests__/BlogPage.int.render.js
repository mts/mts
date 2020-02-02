import React from 'react'
import { Provider } from 'react-redux'
import { AsyncBlogPage } from '../AsyncBlogPage'
import { BlogPage } from '../BlogPage'
import { getAppMockStore } from '../../../../../../library/src/store/mock'
import { mockAppState } from '../../../../../../library/src/state/mock'

export const asyncRender = (
  <Provider store={getAppMockStore(mockAppState)}>
    <AsyncBlogPage />
  </Provider>
)

export const defaultRender = (
  <Provider store={getAppMockStore(mockAppState)}>
    <BlogPage />
  </Provider>
)
