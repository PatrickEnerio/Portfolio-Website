const labelToSlug: Record<string, string> = {
  "react native": "react",
  python: "python",
  fastapi: "fastapi",
  openai: "openai",
  whisper: "whisper",
  react: "react",
  flask: "flask",
  "openai clip": "openai",
  websockets: "websockets",
  "next.js": "nextdotjs",
  typescript: "typescript",
  mdx: "mdx",
  "tailwind css": "tailwindcss",
  "mdx content": "mdx",
  velite: "velite",
  vercel: "vercel",
  camera: "camera",
  microcontroller: "microcontroller",
  "react dashboard": "react",
  "openai + whisper": "openai",
  javascript: "javascript",
  "tailwind css v4": "tailwindcss",
  git: "git",
};

const labelAbbreviations: Record<string, string> = {
  "React Native": "RN",
  "REST APIs": "API",
  "Agile/Scrum": "Agile",
  "Automated Testing": "Test",
  Python: "Py",
  FastAPI: "API",
  OpenAI: "AI",
  Whisper: "STT",
  React: "React",
  Flask: "Flask",
  "OpenAI CLIP": "CLIP",
  WebSockets: "WS",
  "Next.js": "Next",
  TypeScript: "TS",
  MDX: "MDX",
  "Tailwind CSS": "TW",
  "OAuth 2.0": "Auth",
  JavaScript: "JS",
  "OpenAI + Whisper": "AI",
  "MDX Content": "MDX",
  Velite: "Velite",
  Vercel: "Vercel",
  Camera: "Cam",
  Microcontroller: "MCU",
  "React Dashboard": "UI",
};

export function resolveTechSlug(label: string): string | undefined {
  const normalized = label.toLowerCase().trim();
  if (labelToSlug[normalized]) {
    return labelToSlug[normalized];
  }

  for (const [key, slug] of Object.entries(labelToSlug)) {
    if (normalized.includes(key)) {
      return slug;
    }
  }

  return undefined;
}

export function abbreviateTechLabel(label: string): string {
  if (labelAbbreviations[label]) {
    return labelAbbreviations[label];
  }

  const words = label.split(/[\s+/]+/).filter(Boolean);
  if (words.length > 1) {
    return words
      .map((word) => word[0]?.toUpperCase() ?? "")
      .join("")
      .slice(0, 4);
  }

  return label.length <= 6 ? label : label.slice(0, 5);
}
