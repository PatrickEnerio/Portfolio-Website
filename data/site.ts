const links = {
  github: "https://github.com/PatrickEnerio",
  linkedin: "https://linkedin.com/in/john-patrick-enerio",
  resume: "/resume.pdf",
} as const;

export const siteConfig = {
  name: "John Patrick Enerio",
  title: "John Patrick Enerio | Software Engineering Student",
  description:
    "Software engineering student at UT Dallas building full-stack applications, AI-powered tools, and reliable platform software. Explore my projects, experience, and what I'm working on.",
  url: "https://portfolio-website-patrickenerio.vercel.app",
  email: "penerio2004@gmail.com",
  phone: "(214) 326-7178",
  location: "Richardson, TX",
  links,
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Software Engineering Student · RF Platform Intern @ Nokia",
    headline: ["John Patrick", "Enerio"],
    subhead:
      "Your Friendly, Neighborhood Engineer!",
    meta: {
      location: "",
      availability: "",
    },
    image: {
      src: "/images/hero/profile.png",
      alt: "John Patrick Enerio",
    },
    ctas: {
      primary: { label: "Resume", href: links.resume },
      secondary: { label: "Get in Touch", href: "#contact" },
    },
    social: [
      {
        platform: "github",
        href: links.github,
        ariaLabel: "GitHub profile",
      },
      {
        platform: "linkedin",
        href: links.linkedin,
        ariaLabel: "LinkedIn profile",
      },
    ],
    scrollTarget: "#about",
  },
} as const;
