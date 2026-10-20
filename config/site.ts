export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  wordmark: string;
  baseline: string;
  descriptor: string;
  description: string;
  email: string;
  emailSubject: string;
  emailBodyTemplate: string;
  services: string[];
  socialLinks: SocialLink[];
  navLinks: {
    label: string;
    href: string;
  }[];
  videos: {
    globe: string;
    network: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "AOT",
  wordmark: "AOT",
  baseline: "Architecture of Thought",
  descriptor: "Architecture of Thought",
  description:
    "AOT (Architecture of Thought) — Independent product engineering studio designing the systems through which ideas, intelligence and technology become useful products.",
  email: "hello.aot.studio@gmail.com",
  emailSubject: "Project Inquiry — AOT",
  emailBodyTemplate:
`Hi AOT,

I would like to discuss a project with your studio.

1. Who we are:
2. What we want to build:
3. Estimated timeline and budget:
4. Reference links / materials:

Best regards,`,
  services: [
    "AI & Intelligent Systems",
    "Software Engineering",
    "Product Development",
    "Automation",
    "Custom Applications",
  ],
  socialLinks: [
    {
      label: "Twitter",
      href: "", // Set URL when available (only renders when valid URL provided)
    },
    {
      label: "GitHub",
      href: "", // Set URL when available
    },
    {
      label: "LinkedIn",
      href: "", // Set URL when available
    },
  ],
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Approach", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ],
  videos: {
    globe: "https://oi2sxhmfg4bsmow1.public.blob.vercel-storage.com/globe.mp4",
    network: "https://oi2sxhmfg4bsmow1.public.blob.vercel-storage.com/bg_network.mp4",
  },
};
