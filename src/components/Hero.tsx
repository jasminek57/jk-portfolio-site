import Link from "next/link";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 sm:px-8 pt-12 sm:pt-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
        {site.name}
      </h1>
      <p className="mt-2 text-base sm:text-lg text-black/70 dark:text-white/70">
        {site.title}
      </p>
      {site.tagline ? (
        <p className="mt-4 text-sm sm:text-base text-black/70 dark:text-white/70">
          {site.tagline}
        </p>
      ) : null}

      <div className="mt-6 flex gap-3">
        <a
          href="#about"
          className="inline-flex items-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90"
        >
          About me
        </a>
        <a
          href="#experience"
          className="inline-flex items-center rounded-md border border-black/10 dark:border-white/20 px-4 py-2 text-sm font-medium hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
        >
          Experience
        </a>
        {site.resumeUrl ? (
          <Link
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium hover:underline underline-offset-4"
          >
            View resume →
          </Link>
        ) : null}
      </div>
    </section>
  );
}
