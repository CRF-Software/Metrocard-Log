/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMetroCard = /* GraphQL */ `
  query GetMetroCard($id: ID!) {
    getMetroCard(id: $id) {
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
export const listMetroCards = /* GraphQL */ `
  query ListMetroCards(
    $filter: ModelMetroCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMetroCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
