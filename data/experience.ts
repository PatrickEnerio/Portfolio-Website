export type Experience = {
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    title: "Engineering Project Lead",
    organization: "UTDesign EPICS Program · Richardson, TX",
    period: "Jan. 2025 – May 2025",
    description:
      "Led a team of five engineers in designing and prototyping a cost-effective vacuum former for industry sponsors.",
    highlights: [
      "Led team of 5 engineers in designing and prototyping cost-effective vacuum former, collaborating cross-functionally to define requirements and reduce production costs by 40% through iterative problem-solving and data-driven decision making.",
      "Coordinated with industry sponsors to validate technical specifications and communicate complex engineering concepts to non-technical stakeholders, ensuring alignment with real-world manufacturing constraints.",
      "Mentored team members in CAD design and testing methodologies, taking ownership of project outcomes and delivering exceptional results recognized with Excellence in Design award among 20+ competing projects.",
    ],
  },
  {
    title: "Frontend Developer",
    organization: "Association for Computing Machinery (ACM) · Richardson, TX",
    period: "Sep. 2025 – Nov. 2025",
    description:
      "Owned all frontend deliverables for Simmer, an AI-powered voice cooking assistant built with React Native.",
    highlights: [
      "Built and designed end-to-end frontend for an AI-powered voice cooking assistant using React Native, crafting all UI/UX layouts, page designs, and navigation routes for seamless cross-platform mobile experience.",
      "Implemented RESTful API integration connecting frontend to backend recipe database and AI agent, handling data fetching, user authentication flows, and personalized response rendering across 100+ recipe entries.",
      "Collaborated within a cross-functional Agile team of 6 developers, owning all frontend deliverables from wireframe to deployment and communicating design decisions to non-technical stakeholders in weekly releases.",
    ],
  },
  {
    title: "RF Platform Intern",
    organization: "Nokia Inc. · Coppell, TX",
    period: "June 2026 – Present",
    description:
      "Developing automation and documentation for RF platform validation within an Agile engineering team.",
    highlights: [
      "Developed automated test scripts that reduced manual test-encoding effort by 60%, replacing repetitive hand-authored steps with repeatable checks and tightening RF platform validation cycles.",
      "Built a documentation pipeline for a legacy codebase—templates, structured onboarding notes, and living references—so engineers could ramp faster, trace behavior, and change unfamiliar modules with less guesswork.",
      "Delivered work within an Agile cadence (sprint planning, standups, backlog grooming), partnering with cross-functional teammates to prioritize platform fixes, surface blockers early, and ship incremental improvements each sprint.",
    ],
  },
];
