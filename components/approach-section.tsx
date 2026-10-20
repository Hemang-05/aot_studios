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
      number: "01",
      title: "Architecture",
      description:
        "We design systems around the problem first - choosing the right foundations, boundaries, and technologies without adding complexity for its own sake.",
    },
    {
      number: "02",
      title: "Engineering",
      description:
        "Strong products are built on strong foundations. We engineer reliable software across interfaces, application logic, data, integrations, and infrastructure.",
    },
    {
      number: "03",
      title: "Intelligence",
      description:
        "We integrate AI where it creates real leverage - from intelligent workflows and automation to models, agents, retrieval, and decision systems.",
    },
    {
      number: "04",
      title: "Evolution",
      description:
        "We build for change. Products are designed to be understood, improved, extended, and scaled as users, requirements, and businesses evolve.",
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
              02 - Approach
            </span>
            <h2 className="text-heading max-w-[850px]">
              From first principles
              <br />
              to production.
            </h2>
          </div>
        </SectionReveal>

        {/* 2-Column Approach Grid with cyan indices & luminous card hover */}
        <SectionReveal delayMs={150}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/[0.08] border border-white/[0.08]">
            {approachItems.map((item) => (
              <div
                key={item.title}
                className="group relative p-[clamp(32px,5vw,60px)] flex flex-col gap-6 min-h-[300px] transition-all duration-400 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-[inset_0_0_0_1px_rgba(var(--accent),0.18)]"
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
                <p className="text-[16px] lg:text-[16.5px] font-normal leading-[1.68] text-[#999999] max-w-[460px]">
                  {item.description}
                </p>

                {/* Title anchored to bottom */}
                <h3 className="text-[clamp(24px,2.7vw,33px)] font-semibold tracking-[-0.01em] uppercase text-[#F5F5F5] mt-auto pt-8">
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
