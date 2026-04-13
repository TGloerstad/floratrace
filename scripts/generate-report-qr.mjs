/**
 * Writes public/reports/marketing-report-qr.png for print (high error correction).
 *
 * Usage (same token as production build):
 *   REPORT_ACCESS_TOKEN=your_token REPORT_BASE_URL=https://floratrace.com npm run generate-report-qr
 *
 * Requires: npm install (devDependency `qrcode`)
 */
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outPath = join(root, "public/reports/marketing-report-qr.png");

const token = process.env.REPORT_ACCESS_TOKEN?.trim();
const baseUrl = (process.env.REPORT_BASE_URL ?? "https://floratrace.com").replace(
  /\/$/,
  "",
);

if (!token || token.length < 16 || token.includes("/")) {
  console.error(
    "Set REPORT_ACCESS_TOKEN (16+ chars, no '/') to match your production build.",
  );
  process.exit(1);
}

const url = `${baseUrl}/r/${encodeURIComponent(token)}`;

mkdirSync(dirname(outPath), { recursive: true });

await QRCode.toFile(outPath, url, {
  type: "png",
  errorCorrectionLevel: "H",
  width: 1024,
  margin: 2,
  color: { dark: "#0a1628", light: "#ffffff" },
});

console.log(`Wrote ${outPath}`);
console.log(`Encodes: ${url}`);
