import { combineReducers } from 'redux'
import { API_REST_GITHUB_SET_MTS_REPOSITORIES, API_GRAPHQL_GITHUB_SET_MTS_REPOSITORIES } from '../action/actionTypes'

export const getAppReducer = () =>
  combineReducers({
    context: (state = {}, action) => {
      switch (action.type) {
        default:
          return state
      }
    },
    api: (state = {}, action) => {
      switch (action.type) {
        case API_REST_GITHUB_SET_MTS_REPOSITORIES:
          return {
            ...state,
            rest: {
              ...state.rest,
              github: {
                ...state.rest.github,
                MTSRepos: [...action.payload],
              },
            },
          }
        case API_GRAPHQL_GITHUB_SET_MTS_REPOSITORIES:
          return {
            ...state,
            graphql: {
              ...state.graphql,
              github: {
                ...state.graphql.github,
                MTSRepos: [...action.payload],
              },
            },
          }
        default:
          return state
      }
    },
    ui: (state = {}, action) => {
      switch (action.type) {
        default:
          return state
      }
    },
  })
