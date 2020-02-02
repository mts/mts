import React from 'react'
import { Provider } from 'react-redux'
import { AsyncAboutPage } from '../AsyncAboutPage'
import { AboutPage } from '../AboutPage'
import { getAppMockStore } from '../../../../../../library/src/store/mock'
import { mockAppState } from '../../../../../../library/src/state/mock'

export const asyncRender = (
  <Provider store={getAppMockStore(mockAppState)}>
    <AsyncAboutPage />
  </Provider>
)

export const defaultRender = (
  <Provider store={getAppMockStore(mockAppState)}>
    <AboutPage />
  </Provider>
)
