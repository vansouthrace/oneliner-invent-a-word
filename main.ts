import { mkdirSync, writeFileSync } from "fs";

// Planlief: plan + relief. The word English never grew for the secret
// happiness of a cancelled plan — familiar to anyone who has ever
// quietly celebrated a rain check.
const entry = "Planlief — the quiet joy when a plan gets cancelled and you realise you never wanted to go.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
