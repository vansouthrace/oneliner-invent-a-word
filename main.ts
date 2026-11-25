// Entry for the make.fun bounty "Invent a Word We Need"
// (u-deranalabs-invent-a-word-we-need-17a020e0).
//
// The coinage: "doorlapse" — the sudden forgetting of why you entered
// a room the moment you step through its doorway. Everyone has felt
// it; English just never gave it a name. Built from "door" + "lapse",
// so it sounds like a word English could have grown on its own.
//
// This program writes the word and its one-line definition to
// /output/entry.txt, the artifact the gate scorer checks (UTF-8 text,
// 1 to 140 characters, not only whitespace).

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Doorlapse (n.) \u2014 the sudden forgetting of why you entered a room the moment you step through its doorway.";

// The gate only accepts 1-140 characters of non-whitespace UTF-8 text,
// so refuse to write anything that would fail it instead of silently
// producing an invalid entry.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 140 || ENTRY.trim().length === 0) {
  throw new Error(`Entry is ${charCount} characters; must be 1-140.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${charCount} characters to /output/entry.txt`);
console.log(ENTRY);
