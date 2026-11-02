const { cpSync, mkdirSync } = require("node:fs");
const { join } = require("node:path");

const standalonePath = join(".next", "standalone");
const staticPath = join(".next", "static");

mkdirSync(join(standalonePath, ".next"), { recursive: true });
cpSync("public", join(standalonePath, "public"), { recursive: true, force: true });
cpSync(staticPath, join(standalonePath, ".next", "static"), { recursive: true, force: true });
