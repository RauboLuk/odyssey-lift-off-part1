const { gql } = require('apollo-server');

const typeDefs = gql`
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "Track's title"
    title: String!
    "Track's main author"
    author: Author!
    "Track's main illustration to display in track card"
    thumbnail: String
    "Track's approximate length to complete, in minutes"
    length: Int
    "Number of modules track contains"
    modulesCount: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }

  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }
`;

module.exports = typeDefs;