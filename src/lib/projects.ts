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
    title: "Personal Portfolio",
    description:
      "This very website — a fast, responsive portfolio built with Next.js and Tailwind CSS, deployed on Vercel.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    repo: "https://github.com/victorlkwang/victorlkwang.me",
    live: "https://victorlkwang.me",
    year: "2026",
    featured: true,
  },
  {
    title: "Project Two",
    description:
      "A short, punchy description of what this project does and why it's interesting. Focus on the problem it solves and the impact.",
    tags: ["React", "Node.js"],
    repo: "https://github.com/victorlkwang",
    year: "2025",
  },
  {
    title: "Project Three",
    description:
      "Another project. Replace this placeholder with something you're proud of — a class project, a hackathon build, or an experiment.",
    tags: ["Python", "Machine Learning"],
    year: "2025",
  },
];
