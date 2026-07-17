// ---------------------------------------------------------------------------
// EDIT ME: Add / edit your projects here. They render on the /projects page.
// ---------------------------------------------------------------------------

export type Project = {
  title: string;
  description: string;
  tags: string[];
  // Optional links — omit or set to undefined to hide a button
  repo?: string;
  live?: string;
  year?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "NYU Pi Delta Psi",
    description:
      "The website for NYU's Pi Delta Psi chapter (ΠΔΨ). A proper home online for the org — who the brothers are, what the fraternity is about, and how to rush. Designed and built it end to end.",
    tags: ["Next.js", "TypeScript"],
    repo: "https://github.com/victorlkwang/nyupdpsi.org",
    live: "https://nyupdpsi.org",
    year: "2025",
    featured: true,
  },
  {
    title: "Bobst Bot",
    description:
      "A Python bot that automates booking study rooms at NYU's Bobst Library, so you can grab a room before they're all gone instead of hammering refresh on the reservation page.",
    tags: ["Python", "Automation"],
    repo: "https://github.com/victorlkwang/bobst-bot",
    year: "2026",
  },
];
