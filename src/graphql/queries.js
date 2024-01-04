/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGitUser = /* GraphQL */ `
  query GetGitUser($id: ID!) {
    getGitUser(id: $id) {
      id
      name
      score
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listGitUsers = /* GraphQL */ `
  query ListGitUsers(
    $filter: ModelGitUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGitUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        score
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
