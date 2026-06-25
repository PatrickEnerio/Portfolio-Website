export type FeaturedSkill = {
  name: string;
  slug: string;
  description: string;
};

export type SkillItem = {
  name: string;
  slug?: string;
  proficiency: number;
};

export type SkillGroup = {
  category: string;
  items: SkillItem[];
};

export const featuredSkills: FeaturedSkill[] = [
  {
    name: "Cursor",
    slug: "cursor",
    description: "AI-assisted development for faster iteration and cleaner code.",
  },
  {
    name: "Python",
    slug: "python",
    description: "Backend services, automation scripts, and data tooling.",
  },
  {
    name: "React",
    slug: "react",
    description: "Component-driven UIs for web and React Native mobile apps.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", slug: "javascript", proficiency: 88 },
      { name: "TypeScript", slug: "typescript", proficiency: 82 },
      { name: "Java", slug: "openjdk", proficiency: 72 },
      { name: "C++", slug: "cplusplus", proficiency: 65 },
    ],
  },
  {
    category: "Frontend & Mobile",
    items: [
      { name: "React Native", slug: "react", proficiency: 85 },
      { name: "Next.js", slug: "nextdotjs", proficiency: 80 },
      { name: "Tailwind CSS", slug: "tailwindcss", proficiency: 86 },
      { name: "Responsive Design", proficiency: 90 },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Flask", slug: "flask", proficiency: 78 },
      { name: "FastAPI", slug: "fastapi", proficiency: 76 },
      { name: "REST APIs", proficiency: 84 },
      { name: "WebSockets", proficiency: 70 },
      { name: "OAuth 2.0", proficiency: 68 },
    ],
  },
  {
    category: "Tools & Practices",
    items: [
      { name: "Git", slug: "git", proficiency: 88 },
      { name: "Agile/Scrum", proficiency: 85 },
      { name: "CI/CD", proficiency: 72 },
      { name: "Automated Testing", proficiency: 70 },
    ],
  },
];
