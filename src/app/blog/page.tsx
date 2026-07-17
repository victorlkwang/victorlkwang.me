import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing about what I'm learning and building.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto w-full max-w-4xl space-y-10 px-6 py-16 sm:py-20">
      <header className="space-y-3">
        <h1 className="text-4xl font-semibold tracking-tight">Blog</h1>
        <p className="text-muted">
          Occasional posts about what I&apos;m working on.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted">No posts yet — check back soon!</p>
      ) : (
        <ul className="space-y-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent hover:bg-card-hover"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-lg font-medium group-hover:text-accent">
                    {post.title}
                  </h2>
                  <time className="shrink-0 font-mono text-sm text-muted">
                    {formatDate(post.date)}
                  </time>
                </div>
                {post.excerpt && (
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                )}
                {post.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
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
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
