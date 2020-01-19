import { mockAppState } from '../state/mock'

jest.mock('redux', () => ({
  createStore: () => ({ dispatch: jest.fn() }),
  applyMiddleware: jest.fn(),
  compose: jest.fn(),
  combineReducers: jest.fn(),
}))
jest.mock('redux-logger', () => ({ createLogger: () => {} }))
jest.mock('redux-thunk', () => ({ applyMiddleware: () => {}, compose: () => {} }))
jest.mock('../../bootstrap/app', () => ({ isRunningOnLocalHost: true }))
jest.mock('../state/default', () => ({ getDefaultState: () => ({}) }))
jest.mock('../reducer', () => ({ getAppReducer: () => {} }))

const reduxMockObject = require('redux') // eslint-disable-line
const reduxLoggerMockObject = require('redux-logger') // eslint-disable-line
const reduxThunkMockObject = require('redux-thunk') // eslint-disable-line
const bootstrapAppMockObject = require('../../bootstrap/app') // eslint-disable-line
const stateDefaultMockObject = require('../state/default')
const reducerMockObject = require('../reducer')

describe('index', () => {
  beforeEach(() => {
    jest.spyOn(stateDefaultMockObject, 'getDefaultState').mockReturnValue(mockAppState)
    jest.spyOn(reducerMockObject, 'getAppReducer').mockImplementation(jest.fn())
  })

  afterEach(() => jest.clearAllMocks())

  describe('setAppDefaultState()', () => {
    test('must set app state', async () => {
      const { AppStore } = await import('../index')

      const appStore = new AppStore()

      expect(appStore.appState).toMatchObject(mockAppState)
    })
  })
})
