
const foo = 'Foo';

export const resolvers = {
    Query: {
        foo: () => {
            foo;
        },
    },
};
