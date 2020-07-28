import { apiRestGitHubSetMTSRepositoriesAction, apiGraphQLGitHubSetMTSRepositoriesAction } from '../action/actionCreators'
import { getUsersMTSReposRest } from '../../api/rest/github/users'
import { getUsersMTSReposGraphQL } from '../../api/graphql/github/users'

export const setAppCompleteStateThunk = () => async (dispatch) => {
  const restResponseData = await getUsersMTSReposRest()
  const refinedRestResponseData = restResponseData.map(({ id, name }) => ({ id, name }))
  dispatch(apiRestGitHubSetMTSRepositoriesAction(refinedRestResponseData))

  const graphqlResponseData = await getUsersMTSReposGraphQL()
  const refinedGraphqlResponseData = graphqlResponseData.data.user.repositories.nodes.map(({ id, name }) => ({ id, name }))
  dispatch(apiGraphQLGitHubSetMTSRepositoriesAction(refinedGraphqlResponseData))
}
