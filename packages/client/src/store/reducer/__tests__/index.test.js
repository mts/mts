import { apiRestGitHubSetMTSRepositoriesAction } from '../../action/actionCreators'
import { mockAppState } from '../../../../../library/src/state/mock'

jest.mock('../../../../../library/src/state/default', () => ({
  getAppDefaultStateFromWindow: () => ({}),
  getAppDefaultStateFromData: () => ({}),
}))

jest.mock('../../thunk/completeState', () => ({
  setAppCompleteStateThunk: () => async dispatch => {}, // eslint-disable-line
}))

const stateDefaultMockObject = require('../../../../../library/src/state/default')

describe('index', () => {
  beforeEach(() => {
    jest.spyOn(stateDefaultMockObject, 'getAppDefaultStateFromWindow').mockReturnValue(mockAppState)
  })

  afterEach(() => jest.clearAllMocks())

  describe('getAppReducer()', () => {
    describe('api state', () => {
      test('must return new state with given payload when API_REST_GITHUB_SET_MTS_REPOSITORIES action dispatched', async () => {
        const payload = [
          { id: 1, name: 'some-name' },
          { id: 2, name: 'some-other-name' },
        ]

        const { clientAppStore } = await import('../../client')

        clientAppStore.dispatch(apiRestGitHubSetMTSRepositoriesAction(payload))
        expect(clientAppStore.getState().api.rest.github.MTSRepos).toMatchObject(payload)
      })
    })
  })
})
