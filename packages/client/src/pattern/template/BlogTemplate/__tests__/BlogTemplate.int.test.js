import React from 'react'
import { regular } from './BlogTemplate.int.story'

jest.mock('react-router-dom', () => ({ Link: () => <div /> }))

describe('<BlogTemplate />', () => {
  describe('Render', () => {
    test('must match regular', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
