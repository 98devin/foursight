
import {
    makeExecutableSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `

enum Semester {
    FALL
    SPRING
    BOTH
}

type Required {
  required: [String]
}

enum CreditKind {
    QUANTITATIVE
    NATURAL_SCIENCE
    ENGINEERING
    HUMANITIES
    SOCIAL_SCIENCE
    RESEARCH
    LAB
    WRITING_INTENSIVE
}

type Class {
    name: String
    id: String
    credits: Float
    semester: Semester
    upperLevel: Boolean
    creditKinds: [CreditKind]
    required: [Required]
}

type Query {
    classes(
        name: String,
        id: String,
        credits: Float,
        semester: Semester,
        upperLevel: Boolean,
        creditKinds: [CreditKind]
        required: [Required]
    ): [Class]
}

`;



const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
