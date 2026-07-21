import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getPostSlugs } from "@/lib/blog";
import { getProjectSlugs } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const paths = [
    "",
    "/projects",
    "/blog",
    "/resume",
    "/contact",
    ...getProjectSlugs().map((s) => `/projects/${s}`),
    ...getPostSlugs().map((s) => `/blog/${s}`),
  ];
  return paths.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));
}
