import React from "react";
import { SectionReveal } from "@/components/section-reveal";

interface ApproachItem {
  number: string;
  title: string;
  description: string;
}

export function ApproachSection() {
  const approachItems: ApproachItem[] = [
    {
      number: "/ 01",
      title: "Speed",
      description:
        "Focused teams and modern development workflows help move from a clear idea to a working product without unnecessary complexity.",
    },
    {
      number: "/ 02",
      title: "Craft",
      description:
        "Architecture, interface design, and engineering decisions are made deliberately. Quality matters at every layer.",
    },
    {
      number: "/ 03",
      title: "Intelligence",
      description:
        "We use AI where it creates measurable value, integrating models and automation into products rather than adding AI for its own sake.",
    },
    {
      number: "/ 04",
      title: "Ownership",
      description:
        "From implementation and integrations to deployment and iteration, we focus on building systems that can be understood, maintained, and improved.",
    },
  ];

  return (
    <section
      id="approach"
      className="studio-section section-divider bg-black/55 relative z-10"
      aria-label="Our Approach"
    >
      <div className="studio-container">
        {/* Section Header */}
        <SectionReveal>
          <div className="section-head">
            <span className="text-eyebrow eyebrow-line mb-6 block">
              02 &mdash; Approach
            </span>
            <h2 className="text-heading max-w-[800px]">
              Built for the next generation
              <br />
              of digital products.
            </h2>
          </div>
        </SectionReveal>

        {/* 2-Column Approach Grid with cyan indices & luminous card hover */}
        <SectionReveal delayMs={150}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/[0.08] border border-white/[0.08]">
            {approachItems.map((item) => (
              <div
                key={item.title}
                className="group relative p-[clamp(32px,5vw,64px)] flex flex-col gap-5 min-h-[280px] transition-all duration-400 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-[inset_0_0_0_1px_rgba(var(--accent),0.18)]"
                style={{
                  background:
                    "radial-gradient(ellipse at top right, rgba(var(--accent), 0.08) 0%, transparent 55%), rgba(0, 0, 0, 0.65)",
                }}
              >
                {/* Luminous Cyan numeric index */}
                <span className="text-[11px] font-medium tracking-[0.28em] text-[rgb(var(--accent))] [text-shadow:0_0_12px_rgba(var(--accent),0.5)] uppercase">
                  {item.number}
                </span>

                {/* Body paragraph */}
                <p className="text-[15px] font-normal leading-[1.6] text-[#999999] max-w-[420px]">
                  {item.description}
                </p>

                {/* Title anchored to bottom */}
                <h3 className="text-[clamp(22px,2.5vw,30px)] font-semibold tracking-[-0.01em] uppercase text-[#F5F5F5] mt-auto pt-6">
                  {item.title}
                </h3>

                {/* Luminous cyan bottom sweep line on hover */}
                <div className="absolute left-0 bottom-0 h-[1px] w-0 bg-[rgba(var(--accent),0.85)] shadow-[0_0_12px_rgba(var(--accent),0.45)] transition-all duration-600 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:w-full" />
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
