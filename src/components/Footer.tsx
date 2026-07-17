import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex items-center gap-4">
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
      </div>
    </footer>
  );
}
