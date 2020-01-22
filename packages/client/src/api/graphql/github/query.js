import gql from 'graphql-tag'

export const GET_USERS_MTS_REPOS = gql`
  query {
    user(login: "mts") {
      repositories(first: 10, privacy: PUBLIC) {
        nodes {
          id
          name
        }
      }
    }
  }
`
