import React from 'react'
import { regular } from './CoursesTemplate.int.story'

jest.mock('react-router-dom', () => ({ Link: () => <div /> }))

describe('<CoursesTemplate />', () => {
  describe('Regular', () => {
    test('must match regular', () => {
      expect(global.renderToJSON(regular())).toMatchSnapshot()
    })
  })
})
