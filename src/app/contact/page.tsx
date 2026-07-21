import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

const methods = [
  {
    label: "Personal email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "School email",
    value: site.schoolEmail,
    href: `mailto:${site.schoolEmail}`,
  },
  {
    label: "Phone",
    value: site.phone,
    href: `tel:+1${site.phone.replace(/\D/g, "")}`,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-10 px-6 py-16 sm:py-20">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="text-muted">
          Email is the best way to reach me. I read everything and usually reply
          within a day or two.
        </p>
      </header>

      {/* Direct contact methods */}
      <div className="grid gap-4 sm:grid-cols-3">
        {methods.map((m) => (
          <a
            key={m.label}
            href={m.href}
            className="group flex flex-col justify-between gap-6 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent hover:bg-card-hover"
          >
            <p className="text-sm text-muted">{m.label}</p>
            <p className="font-mono text-sm break-all group-hover:text-accent">
              {m.value}
            </p>
          </a>
        ))}
      </div>

      {/* Social links */}
      <div className="grid gap-4 sm:grid-cols-2">
        {site.socials
          .filter((s) => !s.href.startsWith("mailto:"))
          .map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent hover:bg-card-hover"
            >
              <span className="font-medium">{s.label}</span>
              <span className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent">
                ↗
              </span>
            </a>
          ))}
      </div>

      <p className="text-sm text-muted">Currently in {site.location}.</p>
    </div>
  );
}
