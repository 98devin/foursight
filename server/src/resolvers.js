
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
        name: "Probability & Statistics",
        id: "EN.553.310",
        credits: 4.0,
        semester: "BOTH",
        upperLevel: true,
        creditKinds: [
            "QUANTITATIVE",
            "ENGINEERING"
        ],
        required: [
          "AS.110.109"
        ],
    },
    {
        name: "Calculus III",
        id: "AS.110.202",
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
          "EN.553.171"
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

        ],
    },
    {
        name: "Mastering Electronics",
        id: "EN.520.230",
        credits: 4.0,
        semester: "BOTH",
        upperLevel: false,
        creditKinds: [
            "ENGINEERING",
        ],
        required: [
          "AS.110.109",
          "AS.171.102"
        ],
    },
    {
        name: "General Physics: Physical Science Majors II",
        id: "AS.171.102",
        credits: 4.0,
        semester: "BOTH",
        upperLevel: false,
        creditKinds: [
            "ENGINEERING",
            "NATURAL_SCIENCE"
        ],
        required: [
            "AS.171.101"
        ],
    },
    {
        name: "General Physics: Physical Science Majors II",
        id: "AS.171.101",
        credits: 4.0,
        semester: "BOTH",
        upperLevel: false,
        creditKinds: [
            "ENGINEERING",
            "NATURAL_SCIENCE"
        ],
        required: [
        ],
    },
    {
        name: "Discrete Mathematics",
        id: "EN.553.171",
        credits: 4.0,
        semester: "BOTH",
        upperLevel: false,
        creditKinds: [
            "QUANTITATIVE"
        ],
        required: [
        ],
    },
    {
        name: "Introductory Chemistry I",
        id: "AS.030.101",
        credits: 3.0,
        semester: "FALL",
        upperLevel: false,
        creditKinds: [
            "NATURAL_SCIENCE"
        ],
        required: [
        ],
    },
    {
        name: "Introductory Chemistry II",
        id: "AS.030.102",
        credits: 3.0,
        semester: "SPRING",
        upperLevel: false,
        creditKinds: [
            "NATURAL_SCIENCE"
        ],
        required: [
          "AS.030.101"
        ],
    },
    {
        name: "Introduction to Cinema I",
        id: "AS.061.140",
        credits: 3.0,
        semester: "FALL",
        upperLevel: false,
        creditKinds: [
            "HUMANITIES"
        ],
        required: [
        ],
    },
    {
        name: "Introduction to Cinema II",
        id: "AS.061.141",
        credits: 3.0,
        semester: "SPRING",
        upperLevel: false,
        creditKinds: [
            "HUMANITIES"
        ],
        required: [
          "AS>061.140"
        ],
    },
    {
        name: "Introduction to Expository Writing",
        id: "AS.060.100",
        credits: 3.0,
        semester: "BOTH",
        upperLevel: false,
        creditKinds: [
            "HUMANITIES",
            "WRITING_INTENSIVE"
        ],
        required: [
        ],
    },
    {
        name: "Introduction to Visual Language",
        id: "AS.061.145",
        credits: 3.0,
        semester: "BOTH",
        upperLevel: false,
        creditKinds: [
            "HUMANITIES"
        ],
        required: [
        ],
    },
    {
        name: "Introduction to Film Production",
        id: "AS.061.150",
        credits: 3.0,
        semester: "BOTH",
        upperLevel: false,
        creditKinds: [
            "HUMANITIES"
        ],
        required: [
        ],
    },
    {
        name: "Writing for the Screen",
        id: "AS.061.270",
        credits: 3.0,
        semester: "SPRING",
        upperLevel: false,
        creditKinds: [
            "HUMANITIES"
        ],
        required: [
        ],
    },
    {
        name: "Intermediate Film Production",
        id: "AS.061.211",
        credits: 3.0,
        semester: "BOTH",
        upperLevel: false,
        creditKinds: [
            "HUMANITIES"
        ],
        required: [
        "AS.061.150"
        ],
    },
    {
        name: "Advanced Film Production",
        id: "AS.061.301",
        credits: 3.0,
        semester: "BOTH",
        upperLevel: true,
        creditKinds: [
            "HUMANITIES"
        ],
        required: [
        "AS.061.211"
        ],
    },
    {
        name: "Senior Capstone Production",
        id: "AS.061.440",
        credits: 3.0,
        semester: "BOTH",
        upperLevel: true,
        creditKinds: [
            "HUMANITIES"
        ],
        required: [
        "AS.061.301"
        ],
    },
];


const classesByID = {};
classes.forEach(cls => {
    classesByID[cls.id] = cls;
    cls.required = cls.required.map(req => classesByID[req]);
});


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
