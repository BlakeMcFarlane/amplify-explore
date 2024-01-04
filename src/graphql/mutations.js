/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGitUser = /* GraphQL */ `
  mutation CreateGitUser(
    $input: CreateGitUserInput!
    $condition: ModelGitUserConditionInput
  ) {
    createGitUser(input: $input, condition: $condition) {
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
export const updateGitUser = /* GraphQL */ `
  mutation UpdateGitUser(
    $input: UpdateGitUserInput!
    $condition: ModelGitUserConditionInput
  ) {
    updateGitUser(input: $input, condition: $condition) {
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
export const deleteGitUser = /* GraphQL */ `
  mutation DeleteGitUser(
    $input: DeleteGitUserInput!
    $condition: ModelGitUserConditionInput
  ) {
    deleteGitUser(input: $input, condition: $condition) {
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
