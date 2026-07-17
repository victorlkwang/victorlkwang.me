import Link from "next/link";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="space-y-6">
        <p className="font-mono text-sm text-accent">Hi there 👋</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          I&apos;m {site.name.split(" ")[0]} — I build things for the web.
        </h1>

        <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
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
            My projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Say hi
          </Link>
        </div>
      </section>

      {/* Quick links to the other pages */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          { href: "/projects", title: "Projects", desc: "Stuff I've made." },
          { href: "/blog", title: "Blog", desc: "Occasional writing." },
          { href: "/contact", title: "Contact", desc: "Say hi." },
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
