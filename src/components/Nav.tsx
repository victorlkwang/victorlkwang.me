"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight hover:text-accent"
          onClick={() => setOpen(false)}
        >
          {site.domain}
        </Link>

        {/* Desktop nav — the page legend */}
        <ul className="hidden items-center gap-1 sm:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                  isActive(item.href)
                    ? "bg-accent-soft text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border sm:hidden"
        >
          <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-border px-6 py-3 sm:hidden">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm ${
                  isActive(item.href)
                    ? "bg-accent-soft text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
