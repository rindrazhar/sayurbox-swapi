import { gql } from "@apollo/client";

export const GET_STARSHIPS = gql`
  query GetStarships {
    allStarships {
      totalCount
      starships {
        id
        name
      }
    }
  }
`;

export const GET_STARSHIPS_DETAIL = gql`
  query GetStarshipsDetail($id: ID!) {
    starship(id: $id) {
      id
      name
      model
      starshipClass
      manufacturers
      costInCredits
      length
      crew
      passengers
      maxAtmospheringSpeed
      hyperdriveRating
      MGLT
      cargoCapacity
      consumables
      pilotConnection {
        totalCount
        pilots {
          id
          name
        }
      }
      filmConnection {
        totalCount
        films {
          id
          title
        }
      }
    }
  }
`;
