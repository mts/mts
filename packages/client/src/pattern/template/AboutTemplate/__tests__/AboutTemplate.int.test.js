import React from 'react'
import { regular } from './AboutTemplate.int.story'

jest.mock('react-router-dom', () => ({ Link: () => <div /> }))

describe('<AboutTemplate />', () => {
  describe('Render', () => {
    test('must match regular', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
