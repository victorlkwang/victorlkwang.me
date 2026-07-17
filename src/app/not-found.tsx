import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-center justify-center gap-6 px-6 py-20 text-center">
      <p className="font-mono text-6xl font-semibold text-accent">404</p>
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        Back home
      </Link>
    </div>
  );
}
