
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

enum Department {
  ELECTRICAL_ENGINEERING
  COMPUTER_SCIENCE
  COGNITIVE_SCIENCE
  LANGUAGE
  MATH
  APPLIED_MATH
  FILM
  ENGLISH
  CHEMISTRY
  PHYSICS
}

type Class {
    name: String
    id: String
    department: String
    credits: Float
    semester: Semester
    upperLevel: Boolean
    creditKinds: [CreditKind]
    required: [Class]
}

type Query {
    classes(
        name: String,
        id: String,
        department: String,
        credits: Float,
        semester: Semester,
        upperLevel: Boolean,
        creditKinds: [CreditKind]
    ): [Class]
}

`;



const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
