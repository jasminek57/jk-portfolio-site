import React from "react";

type SectionProps = {
  id?: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, title, className, children }: SectionProps) {
  return (
    <section id={id} className={["scroll-mt-24", className].filter(Boolean).join(" ")}>
      <div className="mx-auto max-w-3xl px-6 sm:px-8 py-16 sm:py-24">
        {title ? (
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export default Section;
