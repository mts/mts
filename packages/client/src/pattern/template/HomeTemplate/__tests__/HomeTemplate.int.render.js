import React from 'react'
import { Provider } from 'react-redux'
import { HomeTemplate } from '../index'
import { getAppMockStore } from '../../../../store/mock'
import { mockAppState } from '../../../../../../library/src/state/mock'

export const defaultRender = (
  <Provider store={getAppMockStore(mockAppState)}>
    <HomeTemplate />
  </Provider>
)
