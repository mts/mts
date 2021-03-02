import React from 'react'
import { async, regular } from './BlogPage.int.story'

jest.mock('react-router-dom', () => ({ Link: () => <div /> }))

describe('<BlogPage />', () => {
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
