import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const review =
  "Five stars: says 'Gas' at 3 a.m., demands I never spoil his leaderboard surprise, then asks hourly if he won yet — five stars, zero patience, would serve again.";

// The gate requires one line of 1–200 characters; fail loudly instead of
// writing an entry the sealed scorer would mark invalid.
if (review.length < 1 || review.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${review.length}`);
}
if (review.includes("\n") || review.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), review + "\n", "utf8");
