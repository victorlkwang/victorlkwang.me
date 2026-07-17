# victorlkwang.me

My personal portfolio, built with [Next.js](https://nextjs.org), TypeScript, and
Tailwind CSS. Deployed on [Vercel](https://vercel.com).

## Pages

- **Home** (`/`) — About me
- **Projects** (`/projects`) — Things I've built
- **Blog** (`/blog`) — Writing, powered by Markdown files
- **Contact** (`/contact`) — Ways to reach me

A persistent nav bar (the "page legend") lets you switch between all pages.

## Editing your content

Almost everything is data-driven, so you rarely need to touch the layout code:

| What to change | File |
| --- | --- |
| Name, bio, role, socials, nav links | `src/lib/site.ts` |
| Projects | `src/lib/projects.ts` |
| Blog posts | `content/blog/*.md` (one file per post) |

### Adding your profile photo

Drop your photo into the `public/` folder (e.g. `public/profile.jpg`), then set
`avatar: "/profile.jpg"` in `src/lib/site.ts`. It shows on the home page next to
your intro. A placeholder (`public/profile.svg`) is used until you swap it in.

### Adding a blog post

Create a new Markdown file in `content/blog/`, e.g. `content/blog/my-post.md`:

```md
---
title: "My Post Title"
date: "2026-03-01"
excerpt: "A one-line summary shown on the blog index."
tags: ["tag1", "tag2"]
---

Write your post in **Markdown** here.
```

Commit and push — Vercel redeploys automatically.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
   Vercel auto-detects Next.js — no config needed. Click **Deploy**.
3. Every push to `main` triggers a new deployment.

### Connecting your free Namecheap domain (GitHub Student Pack)

1. Claim your free `.me` domain from the
   [GitHub Student Developer Pack](https://education.github.com/pack) →
   Namecheap.
2. In Vercel: **Project → Settings → Domains → Add**, enter `victorlkwang.me`.
3. Vercel shows the DNS records to set. In the Namecheap dashboard:
   **Domain List → Manage → Advanced DNS**, then add the records Vercel gives
   you (typically an `A` record `@ → 76.76.21.21` and a `CNAME`
   `www → cname.vercel-dns.com`).
4. Wait for DNS to propagate (usually minutes, up to a few hours). Vercel
   provisions HTTPS automatically.
