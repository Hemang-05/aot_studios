import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Careers - ${siteConfig.name}`,
  description: "Careers and talent network at Architecture of Thought (AOT).",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-[#F5F5F5] px-[4vw] py-24 flex flex-col justify-between selection:bg-[#222222] selection:text-white">
      <div className="max-w-[720px] mx-auto w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.24em] uppercase text-[#686868] hover:text-[rgb(var(--accent))] transition-colors mb-16"
        >
          &larr; Return to Studio
        </Link>

        <span className="text-[11px] font-medium tracking-[0.28em] uppercase text-[rgb(var(--accent))] block mb-4">
          Team
        </span>
        <h1 className="text-[clamp(32px,5vw,56px)] font-semibold tracking-[-0.01em] uppercase leading-[1.1] mb-8">
          Careers at AOT
        </h1>

        <div className="space-y-6 text-[15px] font-normal leading-[1.7] text-[#999999]">
          <p>
            We are not actively recruiting for open roles at this time.
          </p>
          <p>
            However, we are always open to connecting with experienced systems architects, AI engineers, and full-stack craftspeople who value deliberate technical foundations and high engineering standards.
          </p>
          <p>
            If you care deeply about software craft and architectural clarity, send your background and past work to{" "}
            <a
              href={`mailto:${siteConfig.email}?subject=Engineering%20Introduction`}
              className="text-[#F5F5F5] border-b border-white/20 hover:text-[rgb(var(--accent))] transition-colors"
            >
              {siteConfig.email}
            </a>.
          </p>
        </div>
      </div>

      <div className="max-w-[720px] mx-auto w-full pt-16 border-t border-white/[0.08] mt-24">
        <p className="text-[10px] font-medium tracking-[0.24em] uppercase text-[#686868]">
          &copy; 2026 AOT. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
}
