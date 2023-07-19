import gql from "graphql-tag";

export const typeDefs = gql`
  #The fields of this type are entry points into the rest of our schema. These are top-level fields that our client can query for.
  "Get tracks array for homepage grid"
  type Query {
    tracksForHome: [Track!]!
  }
  
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;