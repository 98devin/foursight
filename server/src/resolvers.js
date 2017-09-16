
const foo = 'Foo';


export const resolvers = {
    Query: {
        classes() {
          return classes;
        }
    },

    Class: {
        name(cls) {
            return name;
        }

        credits() {
            return credits;
        }

        semester() {
            return semester;
        }
    },
};
