import React from 'react'
import { defaultRender } from './CoursesTemplate.int.render'

jest.mock('react-router-dom', () => ({ Link: () => <div>some link</div> }))

describe('<CoursesTemplate />', () => {
  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
