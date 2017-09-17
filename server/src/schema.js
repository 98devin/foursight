
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

enum ClassTag {
    QUANTITATIVE
    NATURAL_SCIENCE
    ENGINEERING
    HUMANITIES
    SOCIAL_SCIENCE
    RESEARCH
    LAB
    WRITING_INTENSIVE
    UPPER_LEVEL
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
    credits: Float
    semester: Semester
    tags: [ClassTag]
    required: [Class]
}

type DistReq {
    tags: [ClassTag]
    expectedCreditTotal: Float
    expectedClassTotal: Int
}

type Major {
    name: String
    required: [Class]
    distributionRequirements: [DistReq]
}

type Query {
    classes(
        name: String,
        id: String,
        credits: Float,
        semester: Semester,
    ): [Class]

    majors(
        name: String
    ): [Major]
}

`;



const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
