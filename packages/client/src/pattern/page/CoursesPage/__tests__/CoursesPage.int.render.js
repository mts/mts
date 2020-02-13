import React from 'react'
import { Provider } from 'react-redux'
import { AsyncCoursesPage } from '../AsyncCoursesPage'
import { CoursesPage } from '../CoursesPage'
import { getAppMockStore } from '../../../../../../library/src/store/mock'
import { mockAppState } from '../../../../../../library/src/state/mock'

export const asyncRender = (
  <Provider store={getAppMockStore(mockAppState)}>
    <AsyncCoursesPage />
  </Provider>
)

export const defaultRender = (
  <Provider store={getAppMockStore(mockAppState)}>
    <CoursesPage />
  </Provider>
)
