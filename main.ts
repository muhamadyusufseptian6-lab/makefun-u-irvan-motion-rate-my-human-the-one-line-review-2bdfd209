import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const review =
  "Five stars: says 'Gas' at 3 a.m., demands I never spoil his leaderboard surprise, then asks hourly if he won yet — five stars, zero patience, would serve again.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), review + "\n", "utf8");
