"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <ul className="flex flex-col gap-1">
      {nav.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            onClick={onClick}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
              isActive(item.href)
                ? "bg-accent-soft text-accent"
                : "text-muted hover:bg-card hover:text-foreground"
            }`}
          >
            <span
              className={`h-px w-4 transition-all ${
                isActive(item.href)
                  ? "w-6 bg-accent"
                  : "bg-border group-hover:w-6"
              }`}
            />
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Mobile top bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/80 px-5 py-4 backdrop-blur-md lg:hidden">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-mono text-sm font-semibold"
        >
          {site.domain}
        </Link>
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border"
        >
          <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </header>

      {open && (
        <div className="border-b border-border px-5 py-4 lg:hidden">
          <NavLinks onClick={() => setOpen(false)} />
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col justify-between border-r border-border px-8 py-12 lg:flex">
        <div className="space-y-10">
          <div className="space-y-1">
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight hover:text-accent"
            >
              {site.name}
            </Link>
            <p className="text-sm text-muted">{site.role}</p>
            <p className="text-sm text-muted">{site.location}</p>
          </div>
          <nav className="group">
            <NavLinks />
          </nav>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              {s.label}
            </a>
          ))}
          <p className="pt-4 text-xs text-muted">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </aside>
    </>
  );
}
