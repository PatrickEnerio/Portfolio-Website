export type Education = {
  school: string;
  degree: string;
  period: string;
  gpa?: string;
  relevantCoursework?: string[];
};

export const education: Education[] = [
  {
    school: "University of Texas at Dallas · Richardson, TX",
    degree: "Bachelor of Science in Software Engineering",
    period: "Expected May 2027",
    gpa: "3.1",
    relevantCoursework: [
      "Data Structures & Algorithms",
      "Software Engineering Principles",
      "Database Systems",
      "Operating Systems",
    ],
  },
];
