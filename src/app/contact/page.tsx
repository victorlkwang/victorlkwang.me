import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Get in touch</h1>
        <p className="text-muted">
          Have a question, an opportunity, or just want to say hi? I&apos;d love
          to hear from you. The fastest way to reach me is email.
        </p>
      </header>

      {/* Primary email CTA */}
      <a
        href={`mailto:${site.email}`}
        className="group flex items-center justify-between rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent"
      >
        <div>
          <p className="text-sm text-muted">Email me</p>
          <p className="mt-1 font-mono text-lg group-hover:text-accent">
            {site.email}
          </p>
        </div>
        <span className="text-2xl text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent">
          →
        </span>
      </a>

      {/* Other links */}
      <div className="grid gap-4 sm:grid-cols-2">
        {site.socials
          .filter((s) => !s.href.startsWith("mailto:"))
          .map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent"
            >
              <span className="font-medium">{s.label}</span>
              <span className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent">
                ↗
              </span>
            </a>
          ))}
      </div>

      <p className="text-sm text-muted">
        Based in {site.location}. Usually replying within a day or two.
      </p>
    </div>
  );
}
