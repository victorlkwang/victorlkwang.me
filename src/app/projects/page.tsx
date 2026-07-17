import type { Metadata } from "next";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of things I've designed and built.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto w-full max-w-4xl space-y-10 px-6 py-16 sm:py-20">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
        <p className="text-muted">
          Some things I&apos;ve built. A few are finished, a few aren&apos;t.
          Click into any for the details.
        </p>
      </header>

      {projects.length === 0 ? (
        <p className="text-muted">Nothing here yet — check back soon!</p>
      ) : (
        <div className="space-y-5">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent hover:bg-card-hover"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-medium group-hover:text-accent">
                  {p.title}
                  {p.featured && (
                    <span className="ml-2 rounded-full bg-accent-soft px-2 py-0.5 text-xs font-normal text-accent">
                      Featured
                    </span>
                  )}
                </h2>
                <div className="flex shrink-0 items-center gap-3">
                  {p.year && (
                    <span className="font-mono text-sm text-muted">
                      {p.year}
                    </span>
                  )}
                  <span className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent">
                    →
                  </span>
                </div>
              </div>

              {p.excerpt && (
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.excerpt}
                </p>
              )}

              {p.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-xs text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
