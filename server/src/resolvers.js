
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
        required: [
          "AS.110.109"
        ],
    },
    {
        name: "Calculus II",
        id: "AS.110.109",
        credits: 4.0,
        semester: "BOTH",
        upperLevel: false,
        creditKinds: [
            "QUANTITATIVE"
        ],
        required: [
          "AS.110.108"
        ],
    },
    {
        name: "Calculus I",
        id: "AS.110.108",
        credits: 4.0,
        semester: "BOTH",
        upperLevel: false,
        creditKinds: [
            "QUANTITATIVE"
        ],
        required: [
          "None"
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
        required: [
          "EN.601.107"
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
        required: [
          "None"
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
        required: [
          "EN.553.171"
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
        required: [
          "None"
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
        required: [
          "AS.378.116"
        ],
    },
    {
        name: "First Year Japanese I",
        id: "AS.378.115",
        credits: 4.5,
        semester: "FALL",
        upperLevel: false,
        creditKinds: [
            "HUMANITIES"
        ],
        required: [
          "None"
        ],
    },
    {
        name: "First Year Japanese II",
        id: "AS.378.116",
        credits: 4.5,
        semester: "SPRING",
        upperLevel: false,
        creditKinds: [
            "HUMANITIES"
        ],
        required: [
          "AS.378.115"
        ],
    },
    {
        name: "Second Year Japanese II",
        id: "AS.378.216",
        credits: 4.5,
        semester: "SPRING",
        upperLevel: false,
        creditKinds: [
            "HUMANITIES"
        ],
        required: [
          "AS.378.215"
        ],
    },
    {
        name: "Introductory Programming in Java",
        id: "EN.601.107",
        credits: 3.0,
        semester: "BOTH",
        upperLevel: false,
        creditKinds: [
            "ENGINEERING"
        ],
        required: [
          "None"
        ],
    },
    {
        name: "Data Structures",
        id: "EN.601.226",
        credits: 4.0,
        semester: "BOTH",
        upperLevel: false,
        creditKinds: [
            "ENGINEERING",
            "QUANTITATIVE"
        ],
        required: [
          "EN.601.107"
        ],
    },
    {
        name: "Computer System Fundamentals",
        id: "EN.601.229",
        credits: 3.0,
        semester: "BOTH",
        upperLevel: false,
        creditKinds: [
            "ENGINEERING"
        ],
        required: [
          "EN.601.220"
        ],
    },
    {
        name: "Intro Algorithms",
        id: "EN.601.433",
        credits: 3.0,
        semester: "BOTH",
        upperLevel: true,
        creditKinds: [
            "ENGINEERING",
            "QUANTITATIVE"
        ],
        required: [
          "EN.600.226",
          "EN.550.171"
        ],
    },
    {
        name: "Introduction to Video Game Design",
        id: "EN.601.255",
        credits: 3.0,
        semester: "FALL",
        upperLevel: false,
        creditKinds: [
            "ENGINEERING"
        ],
        required: [
          "None"
        ],
    },
    {
        name: "Digital System Fundamentals",
        id: "EN.520.142",
        credits: 3.0,
        semester: "SPRING",
        upperLevel: false,
        creditKinds: [
            "ENGINEERING",
            "QUANTITATIVE"
        ],
        required: [
          "None"
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
