
import {
    makeExecutableSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `

type Query {
  classes: [Class]!
}

enum Semester {
  FALL
  SPRING
  BOTH
}

type Class {
    name: String!
    credits: Float!
    semester: Semester!
}
`;



const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
