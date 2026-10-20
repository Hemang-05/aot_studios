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
    "AOT (Architecture of Thought) - Independent product engineering studio designing the systems through which ideas, intelligence and technology become useful products.",
  email: "hello.aot.studio@gmail.com",
  emailSubject: "Project Inquiry - AOT",
  emailBodyTemplate:
`Hi AOT,

I would like to discuss a project with your team.

1. Who we are and what we're building:
2. The problem or opportunity:
3. What we'd like you to build:
4. Expected timeline and budget:
5. Relevant references or existing product links:

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
      label: "LinkedIn",
      href: "", // Set URL when available
    },
    {
      label: "X",
      href: "", // Set URL when available
    },
    {
      label: "Instagram",
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
