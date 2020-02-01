import React from 'react'
import { asyncRender, defaultRender } from './BlogPage.int.render'

jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

describe('<BlogPage />', () => {
  afterEach(() => jest.clearAllMocks())

  describe('Snaphot', () => {
    test('must match asyncRender', () => {
      expect(global.renderToJSON(asyncRender)).toMatchSnapshot()
    })

    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
