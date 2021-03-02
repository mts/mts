import React from 'react'
import { async, regular } from './HomePage.int.story'

jest.mock('react-router-dom', () => ({ Link: () => <div /> }))
jest.mock('../../../../../../library/src/client/navBar', () => ({ handleStickyNavBar: () => {} }))

describe('<HomePage />', () => {
  afterEach(() => jest.clearAllMocks())

  describe('Render', () => {
    test('must match async', () => {
      expect(global.renderToJSON(async())).toMatchSnapshot()
    })

    test('must match regular', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
