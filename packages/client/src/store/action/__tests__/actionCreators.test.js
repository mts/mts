import { apiRestGitHubSetMTSRepositoriesAction, apiGraphQLGitHubSetMTSRepositoriesAction } from '../actionCreators'

describe('actionCreators', () => {
  const payload = { somePayload: 'some-payload' }

  describe('apiRestGitHubSetMTSRepositoriesAction()', () => {
    test('must return action with given payload', () => {
      expect(apiRestGitHubSetMTSRepositoriesAction(payload)).toMatchObject({ type: 'API_REST_GITHUB_SET_MTS_REPOSITORIES', payload })
    })
  })

  describe('apiGraphQLGitHubSetMTSRepositoriesAction()', () => {
    test('must return action with given payload', () => {
      expect(apiGraphQLGitHubSetMTSRepositoriesAction(payload)).toMatchObject({ type: 'API_GRAPHQL_GITHUB_SET_MTS_REPOSITORIES', payload })
    })
  })
})
