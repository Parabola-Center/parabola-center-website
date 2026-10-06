#!/usr/bin/env node
// Deploys the pages in shipsite/ (plus the images, fonts and PDFs they reference from src/)
// to shipsite.sh in a single API call.
//
//   SHIPSITE_API_KEY=sk_live_... node shipsite/deploy.js [--pin] [--dry-run]
//
// --pin      keep the site live permanently instead of letting it expire after 24h
// --dry-run  build the payload and list the files without calling the API

const fs = require("fs");
const path = require("path");

const API_URL = (process.env.SHIPSITE_API_URL || "https://shipsite.sh").replace(/\/$/, "");
const API_KEY = process.env.SHIPSITE_API_KEY;
const args = process.argv.slice(2);
const pin = args.includes("--pin");
const dryRun = args.includes("--dry-run");

const pageDir = __dirname;
const srcDir = path.join(__dirname, "..", "src");
const pages = fs.readdirSync(pageDir).filter((name) => name.endsWith(".html"));

// Collect every relative img/, fonts/ or pdf/ reference in the pages.
const files = {};
const assetPaths = new Map();
for (const page of pages) {
  const html = fs.readFileSync(path.join(pageDir, page), "utf8");
  files[page] = html;
  for (const match of html.matchAll(/(?:src|href)="((?:img|fonts|pdf)\/[^"]+)"|url\("((?:img|fonts|pdf)\/[^"]+)"\)/g)) {
    assetPaths.set(match[1] || match[2], page);
  }
}

for (const [assetPath, page] of assetPaths) {
  const filePath = path.join(srcDir, assetPath);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing asset referenced by ${page}: src/${assetPath}`);
    process.exit(1);
  }
  files[assetPath] = "base64:" + fs.readFileSync(filePath).toString("base64");
}

async function request(method, endpoint, body) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`${method} ${endpoint} failed (${res.status}): ${text}`);
  }
  return text ? JSON.parse(text) : {};
}

async function main() {
  console.log("Files:");
  for (const name of Object.keys(files)) console.log(`  ${name}`);

  if (dryRun) return;

  if (!API_KEY) {
    console.error("Set SHIPSITE_API_KEY to deploy.");
    process.exit(1);
  }

  const site = await request("POST", "/v1/sites", { files });
  console.log("\nDeployed:", JSON.stringify(site, null, 2));

  if (pin) {
    const id = site.id || site.site_id;
    if (!id) throw new Error("Deploy response did not include a site id to pin.");
    await request("POST", `/v1/sites/${id}/pin`);
    console.log(`Pinned site ${id}.`);
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
