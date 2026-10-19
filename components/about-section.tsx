import React from "react";
import { SectionReveal } from "@/components/section-reveal";

export function AboutSection() {
  const pillars = [
    {
      label: "What we build",
      description:
        "AI-powered applications, web and mobile products, SaaS platforms, and tailored software built around real business needs.",
    },
    {
      label: "How we work",
      description:
        "Small, focused engineering teams combining thoughtful product decisions, modern technology, and rapid iteration.",
    },
    {
      label: "Our focus",
      description:
        "From the first technical decisions through launch and refinement, we help turn promising ideas into reliable, usable software.",
    },
  ];

  return (
    <section
      id="about"
      className="studio-section section-divider bg-black/65 relative z-10"
      aria-label="About the Studio"
    >
      <div className="studio-container">
        {/* Section Header with glowing cyan eyebrow prefix */}
        <SectionReveal>
          <div className="section-head">
            <span className="text-eyebrow eyebrow-line">01 &mdash; About</span>
          </div>
        </SectionReveal>

        {/* Large Editorial Statement */}
        <SectionReveal delayMs={100}>
          <h2 className="text-statement max-w-[1160px] text-left">
            <span className="text-[#F5F5F5]">
              Architecture of Thought.
            </span>{" "}
            <span className="text-[#686868]">
              Designing the systems through which ideas, intelligence, and technology become useful products.
            </span>
          </h2>
        </SectionReveal>

        {/* Three Columns with Glowing Cyan Accents matching reference */}
        <SectionReveal delayMs={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 lg:gap-16 mt-[clamp(50px,7vh,90px)] pt-10 border-t border-white/[0.08]">
            {pillars.map((pillar) => (
              <div key={pillar.label} className="relative group">
                {/* Luminous cyan top-edge indicator line */}
                <div className="w-10 h-[1px] bg-[rgb(var(--accent))] shadow-[0_0_10px_rgba(var(--accent),0.45)] mb-5" />

                {/* Cyan label with tick line */}
                <div className="flex items-center gap-3 mb-3 text-[rgb(var(--accent))] [text-shadow:0_0_12px_rgba(var(--accent),0.35)]">
                  <span className="block w-4 h-[1px] bg-[rgba(var(--accent),0.85)]" />
                  <h3 className="text-eyebrow text-[rgb(var(--accent))]">
                    {pillar.label}
                  </h3>
                </div>

                <p className="text-[14px] md:text-[15px] font-normal leading-[1.7] text-[#999999]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
