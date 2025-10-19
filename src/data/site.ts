export type Experience = {
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  bullets?: string[];
  tags?: string[];
};

export type SiteConfig = {
  initials: string;
  name: string;
  title: string;
  tagline?: string;
  about: {
    paragraphs: string[];
    image: string; // e.g., "/me.jpg" in public/
    imageAlt: string;
  };
  experiences: Experience[];
  resumeUrl: string; // e.g., "/resume.pdf" in public/
  social: {
    github: string;
    linkedin: string;
  };
  email: string;
  accentColor?: string; // e.g., "#3b82f6"
};

export const site: SiteConfig = {
  initials: "JK",
  name: "Your Name",
  title: "Your Role",
  tagline: "Building useful things on the web.",
  about: {
    paragraphs: [
      "Write about your hobbies, dislikes, current experiences, and interests here.",
      "You can include what you are exploring or learning right now.",
    ],
    image: "/me.jpg",
    imageAlt: "Portrait of Your Name",
  },
  experiences: [
    {
      role: "Job Title",
      company: "Company Name",
      location: "City, Country",
      start: "Jan 2023",
      end: "Present",
      bullets: [
        "Briefly describe impact and responsibilities.",
        "Quantify results where possible.",
      ],
      tags: ["TypeScript", "React", "Next.js"],
    },
    {
      role: "Misc Experience",
      company: "Project/Organization",
      start: "2021",
      end: "2022",
      bullets: ["Add miscellaneous projects or volunteer experiences."],
    },
  ],
  resumeUrl: "/resume.pdf",
  social: {
    github: "",
    linkedin: "",
  },
  email: "",
  accentColor: "#3b82f6",
};
