import React from 'react'
import { Provider } from 'react-redux'
import { AboutTemplate } from '../index'
import { getAppMockStore } from '../../../../../../library/src/store/mock'
import { mockAppState } from '../../../../../../library/src/state/mock'

jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

export const defaultRender = (
  <Provider store={getAppMockStore(mockAppState)}>
    <AboutTemplate />
  </Provider>
)
