
import {
    makeExecutableSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `

type Query {
    foo: String!
}

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };