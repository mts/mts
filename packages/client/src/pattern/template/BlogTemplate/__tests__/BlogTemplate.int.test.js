import React from 'react'
import { defaultRender } from './BlogTemplate.int.render'

jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

describe('<BlogTemplate />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
