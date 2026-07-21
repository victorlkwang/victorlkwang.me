import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `${site.name}'s résumé.`,
};

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-8 px-6 py-16 sm:py-20">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight">Resume</h1>
          <p className="text-muted">
            A snapshot of my experience, projects, and skills.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={site.resume}
            download
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Download PDF
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Open in new tab →
          </a>
        </div>
      </header>

      {/* Full-width preview of the résumé — renders large and crisp on every
          device (no tiny embedded PDF viewer). */}
      <a href={site.resume} target="_blank" rel="noreferrer" className="block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={site.resumePreview}
          alt={`${site.name}'s résumé`}
          className="w-full rounded-2xl border border-border shadow-sm"
        />
      </a>
    </div>
  );
}
