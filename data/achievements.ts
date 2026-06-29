// Ordered from biggest accomplishment to smallest.
export type Achievement = {
  title: string;
  organization: string;
  date: string;
  description: string;
};

export const achievements: Achievement[] = [
  {
    title: "Best Beginner Project",
    organization: "HackAI",
    date: "Mar. 2026",
    description:
      "Recognized among all first-time hackathon teams for Sensora, a biometric focus-tracking dashboard with real-time CLIP-based analysis and live WebSocket streaming.",
  },
  {
    title: "Excellence in Design Award",
    organization: "UTDesign EPICS Program",
    date: "May 2025",
    description:
      "Awarded for leading a team of five engineers in designing and prototyping a cost-effective vacuum former, standing out among 20+ competing projects.",
  },
];
