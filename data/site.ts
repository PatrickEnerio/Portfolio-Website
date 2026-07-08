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
  url: "https://portfolio-website-patrickenerios-projects.vercel.app",
  email: "penerio2004@gmail.com",
  phone: "(214) 326-7178",
  location: "McKinney, TX",
  links,
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  contact: {
    title: "Let's work together",
    description: "Open to software engineering internships and collaborative projects.",
    card: {
      role: "Software Engineering Student",
      subtitle: "UT Dallas · May 2027",
      resumeLabel: "Download resume",
    },
    form: {
      title: "Send a message",
      description:
        "Have a project in mind or want to connect? Drop me a note and I'll get back to you.",
      submitLabel: "Send message",
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
  },
  hero: {
    eyebrow: "Software Engineering · UT Dallas · May 2027",
    headline: ["John Patrick", "Enerio"],
    subhead:
      "Bulding Software. From testing automation to full-stack applications.",
    meta: {
      location: "",
      availability: "",
    },
    image: {
      src: "/images/hero/profile.png",
      alt: "John Patrick Enerio",
    },
    ctas: {
      primary: { label: "View Projects", href: "#projects" },
      secondary: { label: "Download Resume", href: links.resume },
    },
    scrollTarget: "#about",
  },
} as const;
