import { apiRestGitHubSetMTSRepositoriesAction } from '../actionCreators'

describe('actionCreators', () => {
  const payload = { somePayload: 'some-payload' }

  describe('apiRestGitHubSetMTSRepositoriesAction()', () => {
    test('must return action with given payload', () => {
      expect(apiRestGitHubSetMTSRepositoriesAction(payload)).toMatchObject({ type: 'API_REST_GITHUB_SET_MTS_REPOSITORIES', payload })
    })
  })
})
