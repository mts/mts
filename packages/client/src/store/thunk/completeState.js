import { apiRestGitHubSetMTSRepositoriesAction } from '../action/actionCreators'
import { getUsersMTSRepos } from '../../api/rest/github/users'

export const setAppCompleteStateThunk = () => async dispatch => {
  const responseData = await getUsersMTSRepos()
  const refinedResponseData = responseData.map(({ id, name }) => {
    return { id, name }
  })

  dispatch(apiRestGitHubSetMTSRepositoriesAction(refinedResponseData))
}
