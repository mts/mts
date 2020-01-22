import { setAppCompleteStateThunk } from '../completeState'
import { mockAppState } from '../../../../../library/src/state/mock'

jest.mock('../../action/actionCreators', () => ({ apiRestGitHubSetMTSRepositoriesAction: () => {} }))
jest.mock('../../../api/rest/github/users', () => ({ getUsersMTSReposRest: () => {} }))

const actionCreatorsMockObject = require('../../action/actionCreators')
const getUsersMTSReposRestMockObject = require('../../../api/rest/github/users')

describe('completeState', () => {
  const actionDataObject = { someActionData: 'some-action-data' }
  const responseDataObject = [
    { id: 1, name: 'some-name' },
    { id: 2, name: 'some-other-name' },
  ]

  const dispatchMockFn = jest.fn()
  const apiRestGitHubSetMTSRepositoriesActionMockFn = jest.fn(() => actionDataObject)
  const getUsersMTSReposRestMockFn = jest.fn(() => Promise.resolve(responseDataObject))

  const expectEachMockFnToHaveBeenCalledOnce = async () => {
    await expect(apiRestGitHubSetMTSRepositoriesActionMockFn).toHaveBeenCalledTimes(1)
    await expect(getUsersMTSReposRestMockFn).toHaveBeenCalledTimes(1)
  }

  beforeEach(() => {
    jest
      .spyOn(actionCreatorsMockObject, 'apiRestGitHubSetMTSRepositoriesAction')
      .mockImplementation(apiRestGitHubSetMTSRepositoriesActionMockFn)
    jest.spyOn(getUsersMTSReposRestMockObject, 'getUsersMTSReposRest').mockImplementation(getUsersMTSReposRestMockFn)
  })

  afterEach(() => jest.clearAllMocks())

  describe('setAppCompleteStateThunk()', () => {
    test('must dispatch apiRestGitHubSetMTSRepositoriesAction() action with getUsersMTSReposRest() response data', async () => {
      await setAppCompleteStateThunk(mockAppState)(dispatchMockFn)

      expectEachMockFnToHaveBeenCalledOnce()
      await expect(getUsersMTSReposRestMockFn).toHaveBeenCalled()
      await expect(apiRestGitHubSetMTSRepositoriesActionMockFn).toHaveBeenCalledWith(responseDataObject)
      await expect(dispatchMockFn).toHaveBeenCalledWith(actionDataObject)
    })
  })
})
