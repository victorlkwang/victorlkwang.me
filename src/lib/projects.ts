import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

// Projects live as Markdown files in /content/projects/*.md — same idea as the
// blog. Add a file, push, and it shows up with its own page you can click into.
const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

export type ProjectMeta = {
  slug: string;
  title: string;
  date: string; // ISO string, used for ordering, e.g. "2025-07-08"
  year: string; // shown on the card, e.g. "2025"
  excerpt: string; // short blurb on the projects list
  tags: string[];
  repo?: string;
  live?: string;
  cover?: string; // path to a cover image in /public
  featured?: boolean;
};

export type Project = ProjectMeta & {
  contentHtml: string;
};

function readProjectFiles(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".md"));
}

function toMeta(file: string): ProjectMeta {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), "utf8");
  const { data } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    year: data.year ?? (data.date ? String(data.date).slice(0, 4) : ""),
    excerpt: data.excerpt ?? "",
    tags: data.tags ?? [],
    repo: data.repo,
    live: data.live,
    cover: data.cover,
    featured: data.featured ?? false,
  };
}

export function getAllProjects(): ProjectMeta[] {
  return readProjectFiles()
    .map(toMeta)
    .sort((a, b) => {
      // Featured first, then newest by date.
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return a.date < b.date ? 1 : -1;
    });
}

export function getProjectSlugs(): string[] {
  return readProjectFiles().map((f) => f.replace(/\.md$/, ""));
}

export async function getProject(slug: string): Promise<Project | null> {
  const filePath = path.join(PROJECTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { content } = matter(raw);
  const processed = await remark().use(remarkGfm).use(html).process(content);

  return {
    ...toMeta(`${slug}.md`),
    contentHtml: processed.toString(),
  };
}
