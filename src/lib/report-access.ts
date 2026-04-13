/**
 * Marketing report QR landing page — build-time token only (static export).
 * Must not contain "/" (URL path segment). Use URL-safe characters only.
 *
 * Production: set REPORT_ACCESS_TOKEN before `next build` (e.g. 32+ chars from
 * `openssl rand -hex 16`).
 * Local dev: falls back to a fixed placeholder so `next dev` works without env.
 */
export function getReportAccessToken(): string {
  const raw = process.env.REPORT_ACCESS_TOKEN?.trim();
  if (raw && raw.length >= 16 && !raw.includes("/")) {
    return raw;
  }
  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "REPORT_ACCESS_TOKEN must be set for production builds (16+ chars, no '/')",
    );
  }
  return "dev-only-report-token-placeholder";
}
