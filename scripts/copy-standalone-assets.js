const { cpSync, mkdirSync } = require("node:fs");
const { join } = require("node:path");

const standalonePath = join(".next", "standalone");
const staticPath = join(".next", "static");
const publicPath = join(standalonePath, "public");
const standalonePages = [
  "index.html",
  "about.html",
  "products.html",
  "product-details.html",
  "contact.html",
  "privacy.html",
];

mkdirSync(join(standalonePath, ".next"), { recursive: true });
mkdirSync(publicPath, { recursive: true });
cpSync("public", publicPath, { recursive: true, force: true });
cpSync(staticPath, join(standalonePath, ".next", "static"), { recursive: true, force: true });
cpSync("css", join(publicPath, "css"), { recursive: true, force: true });
cpSync("js", join(publicPath, "js"), { recursive: true, force: true });
cpSync("images", join(publicPath, "images"), { recursive: true, force: true });

for (const page of standalonePages) {
  cpSync(page, join(publicPath, page));
}
