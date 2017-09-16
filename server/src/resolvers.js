
const foo = 'Foo';

const classes = [
    {
        name: "Linear Algebra",
        id: "AS.110.201",
        credits: 4.0,
        semester: "BOTH",
        upperLevel: false,
        creditKinds: [
            "QUANTITATIVE"
        ],
    },
    {
        name: "Intermediate Programming",
        id: "EN.601.220",
        credits: 4.0,
        semester: "BOTH",
        upperLevel: false,
        creditKinds: [
            "ENGINEERING"
        ],
    },
    {
        name: "Computer Ethics",
        id: "EN.601.104",
        credits: 1.0,
        semester: "BOTH",
        upperLevel: false,
        creditKinds: [
            "HUMANITIES"
        ],
    },
    {
        name: "Automata and Computation Theory",
        id: "EN.601.231",
        credits: 3.0,
        semester: "BOTH",
        upperLevel: false,
        creditKinds: [
            "ENGINEERING",
            "QUANTITATIVE"
        ],
    },
    {
        name: "Cognition",
        id: "AS.050.101",
        credits: 3.0,
        semester: "BOTH",
        upperLevel: false,
        creditKinds: [
            "NATURAL_SCIENCE",
            "SOCIAL_SCIENCE"
        ],
    },
    {
        name: "Second Year Japanese I",
        id: "AS.378.215",
        credits: 4.5,
        semester: "FALL",
        upperLevel: false,
        creditKinds: [
            "HUMANITIES"
        ],
    },
];


const filterWithArgs = (arr, args) => arr.filter(a => {
    for (let prop in args) {
        if (a[prop] != args[prop]) return false;
    }
    return true;
});


export const resolvers = {
    Query: {
        classes: (_, args) => filterWithArgs(classes, args)
    },
};
