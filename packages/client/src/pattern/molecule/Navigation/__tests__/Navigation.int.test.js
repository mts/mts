import React from 'react'
import { defaultRender } from './Navigation.int.render'

jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

describe('<Navigation />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
