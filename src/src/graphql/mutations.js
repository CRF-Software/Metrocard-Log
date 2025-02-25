/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMetroCard = /* GraphQL */ `
  mutation CreateMetroCard(
    $input: CreateMetroCardInput!
    $condition: ModelMetroCardConditionInput
  ) {
    createMetroCard(input: $input, condition: $condition) {
      id
      fullName
      unit
      caresCase
      metroCardSerial
      location
      dateIssued
      dateReturned
      signature
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMetroCard = /* GraphQL */ `
  mutation UpdateMetroCard(
    $input: UpdateMetroCardInput!
    $condition: ModelMetroCardConditionInput
  ) {
    updateMetroCard(input: $input, condition: $condition) {
      id
      fullName
      unit
      caresCase
      metroCardSerial
      location
      dateIssued
      dateReturned
      signature
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMetroCard = /* GraphQL */ `
  mutation DeleteMetroCard(
    $input: DeleteMetroCardInput!
    $condition: ModelMetroCardConditionInput
  ) {
    deleteMetroCard(input: $input, condition: $condition) {
      id
      fullName
      unit
      caresCase
      metroCardSerial
      location
      dateIssued
      dateReturned
      signature
      createdAt
      updatedAt
      __typename
    }
  }
`;
