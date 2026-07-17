import { site } from "@/lib/site";

export default function MobileFooter() {
  return (
    <footer className="border-t border-border px-6 py-8 text-sm text-muted lg:hidden">
      <div className="flex flex-wrap items-center gap-4">
        {site.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            {s.label}
          </a>
        ))}
      </div>
      <p className="mt-4 text-xs">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
