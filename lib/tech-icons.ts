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

export function truncateTechLabel(label: string, maxLength = 14): string {
  if (label.length <= maxLength) {
    return label;
  }

  return `${label.slice(0, maxLength - 1)}…`;
}
