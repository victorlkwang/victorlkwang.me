import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of things I've designed and built.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="text-muted">
          Some things I&apos;ve built. A few are finished, a few aren&apos;t.
          Code and demos are linked where they exist.
        </p>
      </header>

      <div className="space-y-5">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-lg font-medium">
                {p.title}
                {p.featured && (
                  <span className="ml-2 rounded-full bg-accent-soft px-2 py-0.5 text-xs font-normal text-accent">
                    Featured
                  </span>
                )}
              </h2>
              {p.year && (
                <span className="shrink-0 font-mono text-sm text-muted">
                  {p.year}
                </span>
              )}
            </div>

            <p className="mt-2 text-sm leading-relaxed text-muted">
              {p.description}
            </p>

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

            {(p.repo || p.live) && (
              <div className="mt-4 flex gap-4 text-sm">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-accent hover:underline"
                  >
                    Live demo →
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium hover:text-accent hover:underline"
                  >
                    Source code →
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
