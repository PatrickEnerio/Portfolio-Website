export type Education = {
  school: string;
  degree: string;
  period: string;
  details?: string;
  gpa?: string;
};

export const education: Education[] = [
  {
    school: "University of Texas at Dallas · Richardson, TX",
    degree: "Bachelor of Science in Software Engineering",
    period: "Expected May 2027",
    details:
      "Familiar with Cursor, Python, C++, Java, React, React Native, and JavaScript. Coursework and project work span full-stack development, Agile team delivery, and applied AI integrations.",
  },
];
