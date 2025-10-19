"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";

function IconGitHub(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20" {...props}>
      <path
        fill="currentColor"
        d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.11-.76.08-.75.08-.75 1.22.09 1.86 1.26 1.86 1.26 1.09 1.86 2.86 1.32 3.56 1.01.11-.79.43-1.33.78-1.64-2.66-.3-5.47-1.33-5.47-5.94 0-1.31.47-2.38 1.25-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.49 11.49 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.78.84 1.25 1.91 1.25 3.22 0 4.62-2.81 5.63-5.49 5.93.44.38.83 1.12.83 2.26v3.35c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z"
      />
    </svg>
  );
}

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20" {...props}>
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.55v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.67H9.36V9h3.41v1.56h.05c.48-.91 1.66-1.86 3.41-1.86 3.65 0 4.33 2.4 4.33 5.51v6.24ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm-1.78 13.02h3.56V9H3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z"
      />
    </svg>
  );
}

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!site.email) return;
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // no-op
    }
  };

  return (
    <footer className="border-t border-black/5 dark:border-white/10 mt-16">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {site.social.github ? (
            <Link
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:underline underline-offset-4"
              aria-label="GitHub"
            >
              <IconGitHub />
              <span className="hidden sm:inline">GitHub</span>
            </Link>
          ) : null}

          {site.social.linkedin ? (
            <Link
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:underline underline-offset-4"
              aria-label="LinkedIn"
            >
              <IconLinkedIn />
              <span className="hidden sm:inline">LinkedIn</span>
            </Link>
          ) : null}
        </div>

        <div className="flex items-center gap-3">
          {site.email ? (
            <>
              <a
                href={`mailto:${site.email}`}
                className="text-sm hover:underline underline-offset-4"
                aria-label={`Email ${site.email}`}
              >
                {site.email}
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="text-xs rounded-md border border-black/10 dark:border-white/20 px-2 py-1 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                aria-live="polite"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </>
          ) : (
            <span className="text-sm text-black/60 dark:text-white/60">
              Add your email in src/data/site.ts
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}
