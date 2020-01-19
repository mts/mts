import { getDefaultState } from '../default'

describe('default', () => {
  describe('getDefaultState()', () => {
    test('must return context default state', () => {
      const defaultState = getDefaultState()

      expect(defaultState.context).toMatchObject({})
    })

    test('must return api default state', () => {
      const defaultState = getDefaultState()

      expect(defaultState.api).toMatchObject({})
    })

    test('must return ui default state', () => {
      const defaultState = getDefaultState()

      expect(defaultState.ui).toMatchObject({})
    })
  })
})
