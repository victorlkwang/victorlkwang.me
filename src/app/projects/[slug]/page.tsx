import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjectSlugs } from "@/lib/projects";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.excerpt,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto w-full max-w-3xl space-y-8 px-6 py-16 sm:py-20">
      <Link
        href="/projects"
        className="inline-block text-sm text-muted hover:text-accent"
      >
        ← Back to projects
      </Link>

      {project.cover && (
        <div className="overflow-hidden rounded-2xl border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.cover}
            alt={`${project.title} preview`}
            className="w-full object-cover"
          />
        </div>
      )}

      <header className="space-y-4 border-b border-border pb-6">
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="text-4xl font-semibold tracking-tight">
            {project.title}
          </h1>
          {project.year && (
            <span className="shrink-0 font-mono text-sm text-muted">
              {project.year}
            </span>
          )}
        </div>

        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-xs text-accent"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {(project.repo || project.live) && (
          <div className="flex flex-wrap gap-3 pt-1">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Visit live site →
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                Source code →
              </a>
            )}
          </div>
        )}
      </header>

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: project.contentHtml }}
      />
    </article>
  );
}
