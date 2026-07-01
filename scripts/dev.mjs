import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "velite";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const veliteBin = join(root, "node_modules", "velite", "bin", "velite.js");
const nextBin = join(root, "node_modules", "next", "dist", "bin", "next");

async function main() {
  console.log("[dev] Building Velite content...");
  await build({ clean: false });

  const veliteDev = spawn(process.execPath, [veliteBin, "dev"], {
    cwd: root,
    stdio: "inherit",
  });

  const nextDev = spawn(process.execPath, [nextBin, "dev"], {
    cwd: root,
    stdio: "inherit",
  });

  const shutdown = () => {
    veliteDev.kill();
    nextDev.kill();
    process.exit(0);
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);

  veliteDev.on("exit", (code) => {
    if (code && code !== 0) {
      console.error(`[dev] velite dev exited with code ${code}`);
      shutdown();
    }
  });

  nextDev.on("exit", (code) => {
    process.exit(code ?? 0);
  });
}

main().catch((error) => {
  console.error("[dev] Failed to start:", error);
  process.exit(1);
});
