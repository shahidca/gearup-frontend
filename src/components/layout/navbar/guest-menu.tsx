import Link from "next/link";

export default function GuestMenu() {
  return (
    <div className="hidden md:flex items-center gap-3">
      <Link
        href="/login"
        className="rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
      >
        Login
      </Link>

      <Link
        href="/register"
        className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        Get Started
      </Link>
    </div>
  );
}