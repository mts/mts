import React from 'react'
import { Provider } from 'react-redux'
import { CoursesTemplate } from '../index'
import { getAppMockStore } from '../../../../../../library/src/store/mock'
import { mockAppState } from '../../../../../../library/src/state/mock'

export const defaultRender = (
  <Provider store={getAppMockStore(mockAppState)}>
    <CoursesTemplate />
  </Provider>
)
