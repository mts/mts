import React from 'react'
import { defaultRender } from './HomeTemplate.int.render'

jest.mock('react-router-dom', () => {
  return {
    Link: () => <div />,
  }
})

describe('<HomeTemplate />', () => {
  let mathFloorSpy

  beforeEach(() => {
    mathFloorSpy = jest.fn(() => {
      return 0
    })
    jest.spyOn(Math, 'floor').mockImplementation(mathFloorSpy)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('Snaphot', () => {
    test('must match defaultRender', () => {
      expect(global.renderToJSON(defaultRender)).toMatchSnapshot()
    })
  })
})
