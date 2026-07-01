import type { NextConfig } from "next";
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

const isDev = process.argv.indexOf("dev") !== -1;
const isBuild = process.argv.indexOf("build") !== -1;
const veliteProjectsJson = join(process.cwd(), ".velite", "projects.json");

function ensureVeliteOutput() {
  if (existsSync(veliteProjectsJson)) {
    return;
  }

  const result = spawnSync("npx", ["velite", "build"], {
    cwd: process.cwd(),
    stdio: "inherit",
    shell: true,
  });

  if (result.status !== 0) {
    throw new Error(
      "Velite build failed — cannot start without .velite/projects.json",
    );
  }
}

if (isDev || isBuild) {
  ensureVeliteOutput();
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
