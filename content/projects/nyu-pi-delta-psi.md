---
title: "NYU Pi Delta Psi"
date: "2025-07-08"
year: "2025"
excerpt: "A full-stack chapter operations platform for NYU's Pi Delta Psi — public site, member directory, and an admin console for roster, rush, and messaging."
tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"]
repo: "https://github.com/victorlkwang/nyupdpsi.org"
live: "https://nyupdpsi.org"
featured: true
---

The official website and internal platform for the Zeta Chapter of Pi Delta Psi
Fraternity, Inc. at NYU. I rebuilt a static, hard-coded site into a full-stack
application backed by a database, with a members' area and an admin console that
the chapter uses to run its roster, rush, and communications.

## What it does

**Public site** — chapter intro and story, plus Active House and Alumni rosters
rendered from the database and grouped by pledge class. The Rush page doubles as
either an interest form or, when an admin flips a switch, an event sign-in sheet.

**Members' area** — email/password accounts with email verification and password
reset. Every brother can browse a searchable directory with a clickable
**lineage** view (ancestry of bigs and a tree of littles) and CSV export.

**Admin console** — manage brothers and pledge classes, upload photos, set
big/little relationships, and graduate members from Active to Alumni. Admins can
customize automated rush emails, control what the public rush form shows, and
work a unified list of rushees with bulk follow-up emails and CSV export.

## Engineering highlights

- **Next.js (App Router) + React + TypeScript** front to back, with a REST API
  layer serving the members' and admin features.
- **PostgreSQL via Prisma** for the roster, accounts, and rush data. Rushees are
  keyed by normalized (NYU email, term) so interest-form submissions and event
  check-ins always resolve to the same person.
- **Custom session auth** — bcrypt-hashed passwords and hashed tokens, with
  role-based access for members vs. admins.
- **Image pipeline** — uploaded photos are resized and re-encoded to WebP with
  `sharp`, cutting payload sizes significantly.
- **Transactional email** through Resend for verification, resets, and rush
  follow-ups.
