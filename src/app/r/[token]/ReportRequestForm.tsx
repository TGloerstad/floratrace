"use client";

import { useState } from "react";
import { Mail, User, Building2, Loader2, CheckCircle2 } from "lucide-react";

export default function ReportRequestForm() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/report-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, organization, email }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong.");
      }
      setStatus("sent");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-green" />
        </div>
        <h2 className="text-2xl font-display font-bold text-navy mb-3">
          Check your inbox!
        </h2>
        <p className="text-gray-dark leading-relaxed max-w-md mx-auto">
          The report has been sent to <strong>{email}</strong>. If you
          don&apos;t see it within a few minutes, please check your spam
          folder.
        </p>
        <p className="mt-6 text-sm text-gray-dark">
          Questions? Reach us at{" "}
          <a
            href="mailto:info@floratrace.com"
            className="text-green hover:underline"
          >
            info@floratrace.com
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
          Name
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-medium/60 bg-white text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green/40 focus:border-green transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-navy mb-1.5">
          Organization
        </label>
        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          <input
            id="organization"
            type="text"
            required
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            placeholder="Company or organization"
            className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-medium/60 bg-white text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green/40 focus:border-green transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
          Email address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-medium/60 bg-white text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green/40 focus:border-green transition"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md font-semibold text-base transition-all duration-300 cursor-pointer bg-green text-white hover:bg-green-dark shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending…
          </>
        ) : (
          "Send me the report"
        )}
      </button>

      <p className="text-xs text-center text-gray-dark">
        We will email the report link to the address you provide. Your
        information is not shared with third parties.
      </p>
    </form>
  );
}
