import Link from "next/link";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Available for opportunities
        </div>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Hi, I&apos;m {site.name.split(" ")[0]}.
        </h1>
        <p className="text-lg text-muted">{site.role}</p>

        <div className="space-y-4 text-base leading-relaxed">
          {site.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Interest chips */}
        <div className="flex flex-wrap gap-2 pt-2">
          {site.highlights.map((h) => (
            <span
              key={h}
              className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted"
            >
              {h}
            </span>
          ))}
        </div>

        {/* Calls to action */}
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/projects"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View my work
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Quick links to the other pages */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          { href: "/projects", title: "Projects", desc: "Things I've built." },
          { href: "/blog", title: "Blog", desc: "Thoughts & writing." },
          { href: "/contact", title: "Contact", desc: "Let's connect." },
        ].map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{c.title}</h2>
              <span className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent">
                →
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">{c.desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
