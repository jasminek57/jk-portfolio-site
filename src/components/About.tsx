import Image from "next/image";
import { site } from "@/data/site";
import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 sm:gap-8 items-start">
        <div className="space-y-4 text-sm sm:text-base leading-7">
          {site.about.paragraphs.map((p, i) => (
            <p key={i} className="text-black/80 dark:text-white/80">
              {p}
            </p>
          ))}
        </div>

        <div className="justify-self-start sm:justify-self-end">
          <div className="relative overflow-hidden rounded-lg border border-black/10 dark:border-white/15 shadow-sm">
            <Image
              src={site.about.image}
              alt={site.about.imageAlt}
              width={160}
              height={160}
              className="block object-cover w-[160px] h-[160px]"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
