import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getReportAccessToken } from "@/lib/report-access";

const REPORT_URL_BASE = process.env.REPORT_BASE_URL ?? "https://floratrace.com";
const NOTIFY_TO = process.env.GMAIL_USER ?? "info@floratrace.com";

function buildTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    throw new Error("GMAIL_USER / GMAIL_APP_PASSWORD not configured");
  }
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });
}

function reportLink() {
  const base = REPORT_URL_BASE.replace(/\/$/, "");
  return `${base}/r/${getReportAccessToken()}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = (body.email ?? "").trim();
    const name = (body.name ?? "").trim();
    const organization = (body.organization ?? "").trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 },
      );
    }

    const transport = buildTransporter();
    const link = reportLink();
    const pdfUrl = `${REPORT_URL_BASE.replace(/\/$/, "")}/reports/marketing-report.pdf`;
    const now = new Date().toUTCString();

    await transport.sendMail({
      from: `FloraTrace <${NOTIFY_TO}>`,
      to: email,
      subject: "FloraTrace Paprika Retail Survey Report",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0a1628;">Thank you for your interest${name ? `, ${name}` : ""}!</h2>
          <p>Here is the FloraTrace Paprika Retail Survey Report you requested:</p>
          <p style="margin: 24px 0;">
            <a href="${link}"
               style="display: inline-block; padding: 12px 28px; background: #2d6a4f; color: #fff;
                      text-decoration: none; border-radius: 6px; font-weight: 600;">
              View the Report
            </a>
          </p>
          <p>Or download the PDF directly:<br/>
            <a href="${pdfUrl}" style="color: #2d6a4f;">${pdfUrl}</a>
          </p>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 32px 0;" />
          <p style="font-size: 13px; color: #666;">
            FloraTrace &mdash; Origin verification for sustainable sourcing.<br/>
            <a href="https://floratrace.com" style="color: #2d6a4f;">floratrace.com</a>
          </p>
        </div>
      `,
    });

    await transport.sendMail({
      from: `FloraTrace Report Bot <${NOTIFY_TO}>`,
      to: NOTIFY_TO,
      subject: `New report request – ${name || email}`,
      text: [
        "New report request from the QR landing page",
        "",
        `Name:         ${name || "(not provided)"}`,
        `Organization: ${organization || "(not provided)"}`,
        `Email:        ${email}`,
        `Time:         ${now}`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("report-request error:", err);
    return NextResponse.json(
      { error: "Unable to send email. Please try again." },
      { status: 500 },
    );
  }
}
