import Link from "next/link";
import { site } from "@/data/site";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-3xl px-6 sm:px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-tight text-lg hover:opacity-80"
          aria-label="Go to home"
        >
          {site.initials}
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <a
            href="#about"
            className="hover:underline underline-offset-4 decoration-1"
          >
            About
          </a>
          <a
            href="#experience"
            className="hover:underline underline-offset-4 decoration-1"
          >
            Experience
          </a>
        </div>
      </nav>
    </header>
  );
}
