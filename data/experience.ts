export type Experience = {
  slug: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

export const experience: Experience[] = [
  {
    slug: "canes-cross-trainer",
    title: "Cross-Trainer",
    organization: "Raising Cane's",
    period: "May 2023 – May 2024",
    description:
      "Cross-trained across front-of-house and kitchen stations while onboarding and supporting new crew members in a high-volume restaurant.",
    technologies: [],
    highlights: [
      "Trained new team members on station workflows, food safety standards, and customer service expectations so shifts stayed covered during peak volume.",
      "Rotated across multiple roles — register, fry, and expo — adapting quickly when the line backed up or staffing shifted mid-rush.",
      "Modeled consistent quality and pace for the crew, helping maintain order accuracy and wait times during lunch and dinner rushes.",
    ],
  },
  {
    slug: "utdesign-epics",
    title: "Engineering Project Lead",
    organization: "UTDesign EPICS Program · Richardson, TX",
    period: "Jan. 2025 – May 2025",
    description:
      "Led a team of five engineers in designing and prototyping a cost-effective vacuum former for industry sponsors.",
    technologies: ["Agile/Scrum", "Git", "Automated Testing"],
    highlights: [
      "Led team of 5 engineers in designing and prototyping cost-effective vacuum former, collaborating cross-functionally to define requirements and reduce production costs by 40% through iterative problem-solving and data-driven decision making.",
      "Coordinated with industry sponsors to validate technical specifications and communicate complex engineering concepts to non-technical stakeholders, ensuring alignment with real-world manufacturing constraints.",
      "Mentored team members in CAD design and testing methodologies, taking ownership of project outcomes and delivering exceptional results recognized with Excellence in Design award among 20+ competing projects.",
    ],
  },
  {
    slug: "acm-frontend",
    title: "Frontend Developer",
    organization: "Association for Computing Machinery (ACM) · Richardson, TX",
    period: "Sep. 2025 – Nov. 2025",
    description:
      "Owned all frontend deliverables for Simmer, an AI-powered voice cooking assistant built with React Native.",
    technologies: ["React Native", "REST APIs", "Agile/Scrum"],
    highlights: [
      "Built and designed end-to-end frontend for an AI-powered voice cooking assistant using React Native, crafting all UI/UX layouts, page designs, and navigation routes for seamless cross-platform mobile experience.",
      "Implemented RESTful API integration connecting frontend to backend recipe database and AI agent, handling data fetching, user authentication flows, and personalized response rendering across 100+ recipe entries.",
      "Collaborated within a cross-functional Agile team of 6 developers, owning all frontend deliverables from wireframe to deployment and communicating design decisions to non-technical stakeholders in weekly releases.",
    ],
  },
  {
    slug: "nokia-rf-platform",
    title: "RF Platform Intern",
    organization: "Nokia Inc. · Coppell, TX",
    period: "June 2026 – Present",
    description:
      "Developing automation and documentation for RF platform validation within an Agile engineering team.",
    technologies: ["Python", "Git", "Agile/Scrum", "Automated Testing"],
    highlights: [
      "Developed automated test scripts that reduced manual test-encoding effort by 60%, replacing repetitive hand-authored steps with repeatable checks and tightening RF platform validation cycles.",
      "Built a documentation pipeline for a legacy codebase—templates, structured onboarding notes, and living references—so engineers could ramp faster, trace behavior, and change unfamiliar modules with less guesswork.",
      "Delivered work within an Agile cadence (sprint planning, standups, backlog grooming), partnering with cross-functional teammates to prioritize platform fixes, surface blockers early, and ship incremental improvements each sprint.",
    ],
  },
];
