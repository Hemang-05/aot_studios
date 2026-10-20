import React from "react";
import { siteConfig } from "@/config/site";
import { SectionReveal } from "@/components/section-reveal";

export function ContactSection() {
  const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    siteConfig.emailSubject
  )}&body=${encodeURIComponent(siteConfig.emailBodyTemplate)}`;

  const checklistItems = [
    "Who you are and what you're building",
    "The problem or opportunity",
    "What you'd like us to build",
    "Expected timeline and budget",
    "Relevant references or existing product links",
  ];

  return (
    <section
      id="contact"
      className="studio-section section-divider min-h-screen min-h-[100dvh] flex items-center bg-black/68 relative overflow-hidden z-10"
      aria-label="Contact and Inquiries"
    >
      {/* ── Ambient Cyan Nebula Glows (Anchor the contact section depth) ── */}
      {/* Top-Left Soft Cyan Glow */}
      <div
        className="absolute -top-[8%] -left-[10%] w-[60%] h-[55%] pointer-events-none filter blur-[80px] -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(var(--accent-soft), 0.22) 0%, rgba(var(--accent-soft), 0.08) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom-Right Intense Cyan Glow */}
      <div
        className="absolute -bottom-[25%] -right-[15%] w-[90%] h-[110%] pointer-events-none filter blur-[60px] -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(var(--accent), 0.32) 0%, rgba(var(--accent), 0.15) 30%, rgba(var(--accent), 0.05) 55%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="studio-container relative z-10">
        {/* Section Header with glowing cyan line */}
        <SectionReveal>
          <div className="section-head">
            <span className="text-eyebrow eyebrow-line">
              03 - Contact
            </span>
          </div>
        </SectionReveal>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(48px,8vw,140px)] items-start">
          {/* Left Column: Oversized Editorial Headline */}
          <SectionReveal delayMs={100}>
            <div className="contact-headline">
              <h2 className="text-display leading-[1.05] tracking-[-0.02em] uppercase text-[#F5F5F5] mb-8">
                Let&apos;s
                <br />
                build
                <br />
                <span className="whitespace-nowrap">what&apos;s next.</span>
              </h2>
              <p className="text-[16px] md:text-[16.5px] font-normal leading-[1.7] text-[#999999] max-w-[500px]">
                Have a product, system, or technical problem in mind? Tell us what you&apos;re building. We work across product development, software engineering, AI integration, and complex technical systems.
              </p>
            </div>
          </SectionReveal>

          {/* Right Column: Project Inquiry Area */}
          <SectionReveal delayMs={200}>
            <div className="flex flex-col items-start">
              <span className="text-[10px] md:text-[11px] font-medium tracking-[0.28em] uppercase text-[#686868] mb-5">
                Project Inquiries
              </span>

              {/* Direct email link with cyan hover */}
              <a
                href={mailtoUrl}
                className="text-[clamp(22px,3.2vw,40px)] font-semibold tracking-[-0.01em] leading-[1.2] text-[#F5F5F5] border-b border-white/[0.18] pb-2 break-all hover:text-[rgb(var(--accent))] hover:border-[rgba(var(--accent),0.6)] hover:[text-shadow:0_0_12px_rgba(var(--accent),0.3)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                aria-label={`Send inquiry email to ${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>

              {/* Inquiry context */}
              <p className="text-[15px] md:text-[16px] font-normal leading-[1.7] text-[#999999] max-w-[480px] mt-8">
                Tell us what you&apos;re building, what problem you&apos;re solving, and where you need engineering support.
              </p>

              {/* Checklist with glowing cyan dashes */}
              <ul className="flex flex-col gap-3.5 max-w-[480px] mt-6 list-none">
                {checklistItems.map((item) => (
                  <li
                    key={item}
                    className="relative pl-6 text-[14px] md:text-[15px] font-normal leading-[1.7] text-[#999999]"
                  >
                    <span className="absolute left-0 top-[11px] w-3 h-[1px] bg-[rgba(var(--accent),0.85)] shadow-[0_0_6px_rgba(var(--accent),0.5)]" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Main CTA with glowing cyan hover */}
              <div className="mt-10 w-full sm:w-auto">
                <a
                  href={mailtoUrl}
                  className="studio-btn w-full sm:w-auto focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                >
                  Start a conversation
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
