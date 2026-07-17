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
    title: "This site",
    description:
      "The site you're on. Next.js and Tailwind, blog posts written in Markdown, hosted on Vercel. I keep it simple so I actually update it.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    repo: "https://github.com/victorlkwang/victorlkwang.me",
    live: "https://victorlkwang.me",
    year: "2026",
    featured: true,
  },
  {
    title: "Project Two",
    description:
      "Replace this with a real project. Say what it does in one line, then why you built it. Skip the buzzwords.",
    tags: ["React", "Node.js"],
    repo: "https://github.com/victorlkwang",
    year: "2025",
  },
  {
    title: "Project Three",
    description:
      "Another slot for something you've made. A class project, a hackathon build, or a thing you made to scratch your own itch.",
    tags: ["Python", "Machine learning"],
    year: "2025",
  },
];
