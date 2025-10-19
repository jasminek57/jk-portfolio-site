import Link from "next/link";
import Section from "@/components/Section";
import { site } from "@/data/site";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-5">
        {site.experiences.map((exp, idx) => (
          <article
            key={idx}
            className="rounded-lg border border-black/10 dark:border-white/15 p-4 sm:p-5"
          >
            <header className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base sm:text-lg font-semibold tracking-tight">
                  {exp.role}
                </h3>
                <p className="text-sm sm:text-[15px] text-black/70 dark:text-white/70">
                  {exp.company}
                  {exp.location ? ` • ${exp.location}` : ""}
                </p>
              </div>
              <div className="text-xs sm:text-sm text-black/60 dark:text-white/60 whitespace-nowrap">
                {exp.start} — {exp.end}
              </div>
            </header>

            {exp.bullets && exp.bullets.length > 0 ? (
              <ul className="mt-3 list-disc pl-5 space-y-1">
                {exp.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="text-sm sm:text-[15px] text-black/80 dark:text-white/80"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}

            {exp.tags && exp.tags.length > 0 ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.tags.map((t, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-md bg-black/[0.04] dark:bg-white/[0.08] px-2 py-0.5 text-xs text-black/70 dark:text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </article>
        ))}

        {site.resumeUrl ? (
          <div className="pt-2">
            <Link
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90"
            >
              View full resume (PDF)
            </Link>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
