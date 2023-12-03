export interface Student {
    roll: number;
    position: number;
    name: string;
    totalMarks: number;
    subjectsWithMarks: Subject[];
}

export interface Subject {
    name : string;
    totalMarks: number;
    obtainedMarks: number;
}

export const dummyData: Student[] = [
  {
    roll: 300,
    name: "Jerry",
    position: 1,
    totalMarks: 299,
    subjectsWithMarks: [
        {
            name: "Bangla",
            totalMarks: 100,
            obtainedMarks: 72
        },
        {
            name: "English",
            totalMarks: 100,
            obtainedMarks: 78
        },
        {
            name: "Math",
            totalMarks: 100,
            obtainedMarks: 95
        },
    ]
  },
  {
    roll: 300,
    name: "Tom",
    position: 3,
    totalMarks: 282,
    subjectsWithMarks: [
        {
            name: "Bangla",
            totalMarks: 100,
            obtainedMarks: 72
        },
        {
            name: "English",
            totalMarks: 100,
            obtainedMarks: 78
        },
        {
            name: "Math",
            totalMarks: 100,
            obtainedMarks: 95
        },
    ]
  },
  {
    roll: 300,
    name: "Mamphy",
    position: 2,
    totalMarks: 280,
    subjectsWithMarks: [
        {
            name: "Bangla",
            totalMarks: 100,
            obtainedMarks: 72
        },
        {
            name: "English",
            totalMarks: 100,
            obtainedMarks: 78
        },
        {
            name: "Math",
            totalMarks: 100,
            obtainedMarks: 95
        },
    ]
  }
]