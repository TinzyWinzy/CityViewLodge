import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = "https://www.cityviewguesthouse.co.zw";
const IMAGE_PATHS = [
  "/assets/images/property/Hero.jpg",
  "/assets/images/property/494724128_658807363571901_7077018319187238123_n.jpg",
  "/assets/images/property/494700947_658807310238573_3674695008729771176_n.jpg",
  "/assets/images/property/480430306_601771529275485_4476888978896392227_n.jpg",
  "/assets/images/property/logo.jpg",
];

const ROUTES = ["/", "/about", "/gallery", "/suites", "/suites/deluxe-garden", "/contact", "/faq"];

let failures = 0;

// 1. Check images exist in dist
console.log("\n[1/3] Verifying images in dist/...");
for (const p of IMAGE_PATHS) {
  const localPath = join(__dirname, "dist", p);
  const ok = existsSync(localPath);
  console.log(`  ${ok ? "✓" : "✗"} dist${p} — ${ok ? existsSync(localPath) : "MISSING"}`);
  if (!ok) failures++;
}

// 2. Check images serve from Vercel
console.log("\n[2/3] Checking images on deployed site...");
for (const p of IMAGE_PATHS) {
  try {
    const res = await fetch(`${BASE}${p}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const type = res.headers.get("content-type") || "";
    if (!type.startsWith("image/")) throw new Error(`Wrong content-type: ${type}`);
    console.log(`  ✓ ${BASE}${p} — ${type} (${(res.headers.get("content-length") || "?").padStart(8)} bytes)`);
  } catch (e) {
    console.log(`  ✗ ${BASE}${p} — FAILED: ${e.message}`);
    failures++;
  }
}

// 3. Check all routes load
console.log("\n[3/3] Checking page routes...");
for (const route of ROUTES) {
  try {
    const res = await fetch(`${BASE}${route}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    const hasAppRoot = html.includes('id="root"');
    console.log(`  ✓ ${BASE}${route} — ${res.status} (${html.length.toLocaleString()} bytes, root: ${hasAppRoot})`);
    if (!hasAppRoot) { failures++; console.log("    ⚠ No <div id=\"root\"> found"); }
  } catch (e) {
    console.log(`  ✗ ${BASE}${route} — FAILED: ${e.message}`);
    failures++;
  }
}

console.log(`\n${"=".repeat(50)}`);
if (failures === 0) {
  console.log("✅ ALL CHECKS PASSED");
} else {
  console.log(`❌ ${failures} CHECK(S) FAILED`);
}
process.exit(failures > 0 ? 1 : 0);
