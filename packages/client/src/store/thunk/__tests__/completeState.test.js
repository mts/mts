import { setAppCompleteStateThunk } from '../completeState'
import { mockAppState } from '../../../../../library/src/state/mock'

jest.mock('../../action/actionCreators', () => ({
  apiRestGitHubSetMTSRepositoriesAction: () => {},
  apiGraphQLGitHubSetMTSRepositoriesAction: () => {},
}))
jest.mock('../../../api/rest/github/users', () => ({ getUsersMTSReposRest: () => {} }))
jest.mock('../../../api/graphql/github/users', () => ({ getUsersMTSReposGraphQL: () => {} }))

const actionCreatorsMockObject = require('../../action/actionCreators')
const getUsersMTSReposRestMockObject = require('../../../api/rest/github/users')
const getUsersMTSReposGraphQLMockObject = require('../../../api/graphql/github/users')

describe('completeState', () => {
  const actionDataObject = { someActionData: 'some-action-data' }

  const restResponseDataObject = [
    { id: 1, name: 'some-name' },
    { id: 2, name: 'some-other-name' },
  ]

  const grapqlResponseDataObject = {
    data: {
      user: {
        repositories: {
          nodes: [
            { id: 1, name: 'some-name' },
            { id: 2, name: 'some-other-name' },
          ],
        },
      },
    },
  }

  const dispatchMockFn = jest.fn()

  const apiRestGitHubSetMTSRepositoriesActionMockFn = jest.fn(() => actionDataObject)
  const getUsersMTSReposRestMockFn = jest.fn(() => Promise.resolve(restResponseDataObject))

  const apiGraphQLGitHubSetMTSRepositoriesActionMockFn = jest.fn(() => actionDataObject)
  const getUsersMTSReposGraphQLMockFn = jest.fn(() => Promise.resolve(grapqlResponseDataObject))

  beforeEach(() => {
    jest
      .spyOn(actionCreatorsMockObject, 'apiRestGitHubSetMTSRepositoriesAction')
      .mockImplementation(apiRestGitHubSetMTSRepositoriesActionMockFn)
    jest.spyOn(getUsersMTSReposRestMockObject, 'getUsersMTSReposRest').mockImplementation(getUsersMTSReposRestMockFn)

    jest
      .spyOn(actionCreatorsMockObject, 'apiGraphQLGitHubSetMTSRepositoriesAction')
      .mockImplementation(apiGraphQLGitHubSetMTSRepositoriesActionMockFn)
    jest.spyOn(getUsersMTSReposGraphQLMockObject, 'getUsersMTSReposGraphQL').mockImplementation(getUsersMTSReposGraphQLMockFn)
  })

  afterEach(() => jest.clearAllMocks())

  describe('setAppCompleteStateThunk()', () => {
    test('must dispatch apiRestGitHubSetMTSRepositoriesAction() action with getUsersMTSReposRest() response data', async () => {
      await setAppCompleteStateThunk(mockAppState)(dispatchMockFn)

      await expect(apiRestGitHubSetMTSRepositoriesActionMockFn).toHaveBeenCalledTimes(1)
      await expect(getUsersMTSReposRestMockFn).toHaveBeenCalledTimes(1)

      await expect(getUsersMTSReposRestMockFn).toHaveBeenCalled()
      await expect(apiRestGitHubSetMTSRepositoriesActionMockFn).toHaveBeenCalledWith(restResponseDataObject)
      await expect(dispatchMockFn).toHaveBeenCalledWith(actionDataObject)
    })

    test('must dispatch apiGraphQLGitHubSetMTSRepositoriesAction() action with getUsersMTSReposGraphQL() response data', async () => {
      await setAppCompleteStateThunk(mockAppState)(dispatchMockFn)

      await expect(apiGraphQLGitHubSetMTSRepositoriesActionMockFn).toHaveBeenCalledTimes(1)
      await expect(getUsersMTSReposGraphQLMockFn).toHaveBeenCalledTimes(1)

      await expect(getUsersMTSReposRestMockFn).toHaveBeenCalled()
      await expect(apiRestGitHubSetMTSRepositoriesActionMockFn).toHaveBeenCalledWith(restResponseDataObject)
      await expect(dispatchMockFn).toHaveBeenCalledWith(actionDataObject)
    })
  })
})
