import { mkdirSync, writeFileSync } from "node:fs";

// One Word, One Username, One Reward — our entry is our own make.fun
// username, one word and nothing else. The gate wants 1-30 chars of
// UTF-8 text, not only whitespace, so keep it exactly one word.
const username = "oreo";

if (!/^\S{1,30}$/.test(username)) {
  throw new Error("username must be a single word of 1-30 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", username, "utf8");
