import Link from "next/link";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero — full-bleed with ambient glow */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="hero-glow" />
        <div className="relative mx-auto grid min-h-[70vh] w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-[1fr_auto]">
          {/* Left: intro */}
          <div>
            <p className="font-mono text-sm text-accent">Hi there 👋</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              I&apos;m {site.name.split(" ")[0]}—a student, builder, and{" "}
              <span className="text-gradient">aspiring software engineer.</span>
            </h1>
            <div className="mt-8 max-w-xl space-y-4 text-lg leading-relaxed text-muted">
              {site.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {site.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted"
                >
                  {h}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
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
                Contact me
              </Link>
            </div>
          </div>

          {/* Right: profile photo */}
          <div className="order-first lg:order-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={site.avatar}
              alt={site.name}
              className="h-44 w-44 rounded-3xl border border-border object-cover shadow-sm sm:h-56 sm:w-56 lg:h-72 lg:w-72"
            />
          </div>
        </div>
      </section>

      {/* Quick links — full-width band */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted">
          Around the site
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              href: "/projects",
              title: "Projects",
              desc: "Stuff I've made.",
            },
            { href: "/blog", title: "Blog", desc: "Occasional writing." },
            { href: "/contact", title: "Contact", desc: "Say hi." },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent hover:bg-card-hover"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{c.title}</h3>
                <span className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent">
                  →
                </span>
              </div>
              <p className="mt-2 text-sm text-muted">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
