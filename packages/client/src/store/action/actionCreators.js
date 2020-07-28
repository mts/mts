import { API_REST_GITHUB_SET_MTS_REPOSITORIES, API_GRAPHQL_GITHUB_SET_MTS_REPOSITORIES } from './actionTypes'

export const apiRestGitHubSetMTSRepositoriesAction = (payload) => ({ type: API_REST_GITHUB_SET_MTS_REPOSITORIES, payload })
export const apiGraphQLGitHubSetMTSRepositoriesAction = (payload) => ({ type: API_GRAPHQL_GITHUB_SET_MTS_REPOSITORIES, payload })
