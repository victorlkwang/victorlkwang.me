import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPostSlugs, formatDate } from "@/lib/blog";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto w-full max-w-3xl space-y-8 px-6 py-16 sm:py-20">
      <Link
        href="/blog"
        className="inline-block text-sm text-muted hover:text-accent"
      >
        ← Back to blog
      </Link>

      <header className="space-y-3 border-b border-border pb-6">
        <h1 className="text-4xl font-semibold tracking-tight">{post.title}</h1>
        <div className="flex items-center gap-3 text-sm text-muted">
          <time className="font-mono">{formatDate(post.date)}</time>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-xs text-accent"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
