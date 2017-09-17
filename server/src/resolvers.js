
const foo = 'Foo';


const classes = [
    {
        name: "Discrete Mathematics",
        id: "EN.553.171",
        credits: 4.0,
        semester: "BOTH",
        tags: [
            "QUANTITATIVE"
        ],
        required: [
        ],
    },
    {
        name: "Calculus I",
        id: "AS.110.108",
        credits: 4.0,
        semester: "BOTH",
        tags: [
            "QUANTITATIVE"
        ],
        required: [
        ],
    },
    {
        name: "Calculus II",
        id: "AS.110.109",
        credits: 4.0,
        semester: "BOTH",
        tags: [
            "QUANTITATIVE"
        ],
        required: [
          "AS.110.108"
        ],
    },
    {
        name: "Linear Algebra",
        id: "AS.110.201",
        credits: 4.0,
        semester: "BOTH",
        tags: [
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
        tags: [
            "QUANTITATIVE",
            "ENGINEERING",
            "UPPER_LEVEL"
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
        tags: [
            "QUANTITATIVE"
        ],
        required: [
          "AS.110.109"
        ],
    },
    {
        name: "Introductory Programming in Java",
        id: "EN.601.107",
        credits: 3.0,
        semester: "BOTH",
        tags: [
            "ENGINEERING"
        ],
        required: [
        ],
    },
    {
        name: "Intermediate Programming",
        id: "EN.601.220",
        credits: 4.0,
        semester: "BOTH",
        tags: [
            "ENGINEERING"
        ],
        required: [
          "EN.601.107"
        ],
    },
    {
        name: "Data Structures",
        id: "EN.601.226",
        credits: 4.0,
        semester: "BOTH",
        tags: [
            "ENGINEERING",
            "QUANTITATIVE"
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
        tags: [
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
        tags: [
            "ENGINEERING",
            "QUANTITATIVE"
        ],
        required: [
          "EN.553.171"
        ],
    },
    {
        name: "Computer System Fundamentals",
        id: "EN.601.229",
        credits: 3.0,
        semester: "BOTH",
        tags: [
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
        tags: [
            "ENGINEERING",
            "QUANTITATIVE",
            "UPPER_LEVEL"
        ],
        required: [
          "EN.601.226",
          "EN.553.171"
        ],
    },
    {
        name: "Introduction to Video Game Design",
        id: "EN.601.255",
        credits: 3.0,
        semester: "FALL",
        tags: [
            "ENGINEERING"
        ],
        required: [
        ],
    },
    {
        name: "Cognition",
        id: "AS.050.101",
        credits: 3.0,
        semester: "BOTH",
        tags: [
            "NATURAL_SCIENCE",
            "SOCIAL_SCIENCE"
        ],
        required: [
        ],
    },
    {
        name: "First Year Japanese I",
        id: "AS.378.115",
        credits: 4.5,
        semester: "FALL",
        tags: [
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
        tags: [
            "HUMANITIES"
        ],
        required: [
          "AS.378.115"
        ],
    },
    {
        name: "Second Year Japanese I",
        id: "AS.378.215",
        credits: 4.5,
        semester: "FALL",
        tags: [
            "HUMANITIES"
        ],
        required: [
          "AS.378.116"
        ],
    },
    {
        name: "Second Year Japanese II",
        id: "AS.378.216",
        credits: 4.5,
        semester: "SPRING",
        tags: [
            "HUMANITIES"
        ],
        required: [
          "AS.378.215"
        ],
    },
    {
        name: "General Physics: Physical Science Majors I",
        id: "AS.171.101",
        credits: 4.0,
        semester: "BOTH",
        tags: [
            "ENGINEERING",
            "NATURAL_SCIENCE"
        ],
        required: [
        ],
    },
    {
        name: "General Physics: Physical Science Majors II",
        id: "AS.171.102",
        credits: 4.0,
        semester: "BOTH",
        tags: [
            "ENGINEERING",
            "NATURAL_SCIENCE"
        ],
        required: [
            "AS.171.101"
        ],
    },
    {
        name: "Digital System Fundamentals",
        id: "EN.520.142",
        credits: 3.0,
        semester: "SPRING",
        tags: [
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
        tags: [
            "ENGINEERING",
        ],
        required: [
          "AS.110.109",
          "AS.171.102"
        ],
    },
    {
        name: "Introductory Chemistry I",
        id: "AS.030.101",
        credits: 3.0,
        semester: "FALL",
        tags: [
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
        tags: [
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
        tags: [
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
        tags: [
            "HUMANITIES"
        ],
        required: [
          "AS.061.140"
        ],
    },
    {
        name: "Introduction to Expository Writing",
        id: "AS.060.100",
        credits: 3.0,
        semester: "BOTH",
        tags: [
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
        tags: [
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
        tags: [
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
        tags: [
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
        tags: [
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
        tags: [
            "HUMANITIES",
            "UPPER_LEVEL"
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
        tags: [
            "HUMANITIES",
            "UPPER_LEVEL"
        ],
        required: [
        "AS.061.301"
        ],
    },
];


const calculateDepartment = (id) => {

    let deptNo = id.split('.')[1];
    switch (deptNo) {
    case '601': return 'COMPUTER_SCIENCE';
    case '520': return 'ELECTRICAL_ENGINEERING';
    case '050': return 'COGNITIVE_SCIENCE';
    case '378': return 'LANGUAGE';
    case '553': return 'APPLIED_MATH';
    case '110': return 'MATH';
    case '171': return 'PHYSICS';
    case '030': return 'CHEMISTRY';
    case '060': return 'ENGLISH';
    case '061': return 'FILM';
    // etc.
    }

}

const classesByID = {};
classes.forEach(cls => {
    classesByID[cls.id] = cls;
    cls.required = cls.required.map(req => classesByID[req]);
    cls.tags.push(calculateDepartment(cls.id));
});


const majors = [
    {
        name: "Computer Science (BS)",
        required: [
          "EN.601.104", //Computer Ethics
          "EN.601.107", //Intro Java
          "EN.601.220", //Intermediate
          "EN.601.226", //Data Structures
          "EN.601.231", //Automata
          "EN.601.229", //CSF
          "EN.601.433", //Algorithms
          "EN.601.255", //VGD
          "EN.553.171", //Discrete
          "AS.110.108", //Calc I
          "AS.110.109", //Calc II
          "AS.171.101", //Physics I
          "AS.171.102", //Physics II
        ],
        distributionRequirements: [
          {
            tags:["COMPUTER_SCIENCE"],
            expectedCreditTotal: 42
          },
          {
            tags:["MATH", "APPLIED_MATH"],
            expectedCreditTotal: 24
          },
          {
            tags:["NATURAL_SCIENCE"],
            expectedCreditTotal: 16
          },
          {
            tags: ["HUMANITIES", "SOCIAL_SCIENCE"],
            expectedCreditTotal: 18,
            expectedClassTotal: 6
          },
          {
            tags: ["WRITING_INTENSIVE"],
            expectedCreditTotal: 6,
            expectedClassTotal: 2
          },
        ],
    },
    {
        name: "Computer Engineering",
        required: [],
    },
    {
        name: "Film and Media Studies",
        required: [],
    },
];

majors.forEach(major => {
    major.required = major.required.map(id => classesByID[id]);
});


const filterWithArgs = (arr, args) => arr.filter(a => {
    for (let prop in args) {
        if (a[prop] != args[prop]) return false;
    }
    return true;
});


export const resolvers = {
    Query: {
        classes: (_, args) => filterWithArgs(classes, args),
        majors: (_, args) => filterWithArgs(majors, args)
    },
};
