#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const appRoot = path.join(repoRoot, "apps", "web");
const outputRoot = path.join(repoRoot, "apps", "web_recovered");
const mapRoots = [
  path.join(appRoot, ".next", "server", "chunks", "ssr"),
  path.join(appRoot, ".next", "server", "app"),
];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".map")) {
      files.push(fullPath);
    }
  }
  return files;
}

function normalizeSourcePath(rawPath) {
  const cleaned = rawPath.replace(/%5B/g, "[").replace(/%5D/g, "]");
  if (cleaned.includes("/__nextjs-internal-proxy.")) {
    return null;
  }
  const structuredImageSuffix = ".mjs%20%28structured%20image%20object%29";
  const withoutImageSuffix = cleaned.endsWith(structuredImageSuffix)
    ? cleaned.replace(structuredImageSuffix, "")
    : cleaned;

  const relPath = withoutImageSuffix.replace(/^(\.\.\/)+/, "");
  if (
    !relPath.startsWith("src/") &&
    !relPath.startsWith("public/") &&
    !relPath.startsWith("package.json") &&
    !relPath.startsWith("tsconfig.json") &&
    !relPath.startsWith("next.config.") &&
    !relPath.startsWith("postcss.config.") &&
    !relPath.startsWith("tailwind.config.")
  ) {
    return null;
  }

  return relPath;
}

function collectEntries(mapJson, out) {
  if (Array.isArray(mapJson.sources) && Array.isArray(mapJson.sourcesContent)) {
    for (let i = 0; i < mapJson.sources.length; i += 1) {
      const normalized = normalizeSourcePath(mapJson.sources[i]);
      const content = mapJson.sourcesContent[i];
      if (!normalized || typeof content !== "string") {
        continue;
      }

      const existing = out.get(normalized);
      if (!existing || existing.length < content.length) {
        out.set(normalized, content);
      }
    }
  }

  if (Array.isArray(mapJson.sections)) {
    for (const section of mapJson.sections) {
      if (section && section.map) {
        collectEntries(section.map, out);
      }
    }
  }
}

const recovered = new Map();

for (const mapRoot of mapRoots) {
  if (!fs.existsSync(mapRoot)) {
    continue;
  }

  for (const file of walk(mapRoot)) {
    try {
      const parsed = JSON.parse(fs.readFileSync(file, "utf8"));
      collectEntries(parsed, recovered);
    } catch (error) {
      console.error(`Skipping invalid sourcemap: ${file}`);
    }
  }
}

let written = 0;
for (const [relPath, content] of recovered) {
  const target = path.join(outputRoot, relPath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content, "utf8");
  written += 1;
}

console.log(`Recovered ${written} files from sourcemaps.`);
