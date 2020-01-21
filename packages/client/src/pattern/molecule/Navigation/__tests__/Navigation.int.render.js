import React from 'react'
import { Provider } from 'react-redux'
import { Navigation } from '../index'
import { getAppMockStore } from '../../../../store/mock'
import { mockAppState } from '../../../../store/state/mock'

export const defaultRender = (() => {
  return (
    <Provider store={getAppMockStore(mockAppState)}>
      <Navigation />
    </Provider>
  )
})()
