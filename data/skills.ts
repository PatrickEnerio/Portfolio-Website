export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C++"],
  },
  {
    category: "Frontend & Mobile",
    items: ["React", "React Native", "Next.js", "Tailwind CSS", "Responsive Design"],
  },
  {
    category: "Backend & APIs",
    items: ["Flask", "FastAPI", "REST APIs", "WebSockets", "OAuth 2.0"],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "Cursor", "Agile/Scrum", "CI/CD", "Automated Testing"],
  },
];
