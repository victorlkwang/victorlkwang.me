import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

// Blog posts live as Markdown files in /content/blog/*.md
const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // ISO string, e.g. "2026-01-15"
  excerpt: string;
  tags: string[];
};

export type Post = PostMeta & {
  contentHtml: string;
};

function readPostFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
}

export function getAllPosts(): PostMeta[] {
  return readPostFiles()
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        excerpt: data.excerpt ?? "",
        tags: data.tags ?? [],
      } satisfies PostMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostSlugs(): string[] {
  return readPostFiles().map((f) => f.replace(/\.md$/, ""));
}

export async function getPost(slug: string): Promise<Post | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark().use(remarkGfm).use(html).process(content);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    tags: data.tags ?? [],
    contentHtml: processed.toString(),
  };
}

export function formatDate(date: string): string {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
