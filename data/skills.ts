export type SkillTier = 1 | 2 | 3 | 4;

export const TIER_LABELS: Record<SkillTier, string> = {
  4: "Expert",
  3: "Advanced",
  2: "Intermediate",
  1: "Familiar",
};

export type SkillUsedIn = {
  label: string;
  href?: string;
};

export type FeaturedSkill = {
  name: string;
  slug: string;
  description: string;
  usedIn?: SkillUsedIn[];
};

export type SkillItem = {
  name: string;
  slug?: string;
  tier: SkillTier;
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
    usedIn: [{ label: "Portfolio & side projects", href: "#projects" }],
  },
  {
    name: "Python",
    slug: "python",
    description: "Backend services, automation scripts, and data tooling.",
    usedIn: [{ label: "Nokia RF Platform Intern", href: "#experience-nokia-rf-platform" }],
  },
  {
    name: "React",
    slug: "react",
    description: "Component-driven UIs for web and React Native mobile apps.",
    usedIn: [
      { label: "ACM Frontend Developer", href: "#experience-acm-frontend" },
      { label: "Portfolio site", href: "#projects" },
    ],
  },
];

export const softSkills: FeaturedSkill[] = [
  {
    name: "Cross-functional leadership",
    slug: "leadership",
    description:
      "Led a team of five engineers on a UTDesign EPICS project — defining requirements, mentoring teammates, and delivering on sponsor milestones.",
    usedIn: [{ label: "UTDesign EPICS", href: "#experience-utdesign-epics" }],
  },
  {
    name: "Stakeholder communication",
    slug: "communication",
    description:
      "Translate technical decisions for non-technical sponsors and teammates in weekly releases and sponsor reviews.",
    usedIn: [
      { label: "UTDesign EPICS", href: "#experience-utdesign-epics" },
      { label: "ACM Frontend Developer", href: "#experience-acm-frontend" },
    ],
  },
  {
    name: "Agile delivery",
    slug: "agile",
    description:
      "Sprint planning, standups, and backlog grooming across internship and team projects — shipping incremental improvements each cycle.",
    usedIn: [
      { label: "Nokia RF Platform Intern", href: "#experience-nokia-rf-platform" },
      { label: "ACM Frontend Developer", href: "#experience-acm-frontend" },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", slug: "javascript", tier: 3 },
      { name: "TypeScript", slug: "typescript", tier: 3 },
      { name: "Java", slug: "openjdk", tier: 2 },
      { name: "C++", slug: "cplusplus", tier: 2 },
    ],
  },
  {
    category: "Frontend & Mobile",
    items: [
      { name: "React Native", slug: "react", tier: 3 },
      { name: "Next.js", slug: "nextdotjs", tier: 3 },
      { name: "Tailwind CSS", slug: "tailwindcss", tier: 3 },
      { name: "Responsive Design", tier: 4 },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Flask", slug: "flask", tier: 1 },
      { name: "FastAPI", slug: "fastapi", tier: 1 },
      { name: "REST APIs", tier: 1 },
      { name: "WebSockets", tier: 1 },
      { name: "OAuth 2.0", tier: 1 },
    ],
  },
  {
    category: "Tools & Practices",
    items: [
      { name: "Git", slug: "git", tier: 4 },
      { name: "Agile/Scrum", tier: 3 },
      { name: "CI/CD", tier: 2 },
      { name: "Automated Testing", tier: 2 },
    ],
  },
];
