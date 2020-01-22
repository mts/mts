import { windowObjectExists } from '../../../../../library/src/environment'
import { apolloClient } from './client'
import { GET_USERS_MTS_REPOS } from './query'

export const getUsersMTSReposGraphQL = async () => {
  if (windowObjectExists) {
    const response = await apolloClient.query({
      query: GET_USERS_MTS_REPOS,
    })

    return response
  }

  return []
}
