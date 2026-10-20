import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Privacy Policy - ${siteConfig.name}`,
  description: "Privacy policy and data governance practices at Architecture of Thought (AOT).",
};

export default function PrivacyPage() {
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
          Legal
        </span>
        <h1 className="text-[clamp(32px,5vw,56px)] font-semibold tracking-[-0.01em] uppercase leading-[1.1] mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-[15px] font-normal leading-[1.7] text-[#999999]">
          <p>
            Architecture of Thought (AOT) respects your privacy. We collect only information directly provided to us through project inquiries and correspondence to evaluate and execute engineering engagements.
          </p>
          <p>
            We do not sell, rent, or trade personal data to third parties. Any technical details, codebases, or proprietary information shared with AOT during discovery or active engagements are protected under mutual confidentiality.
          </p>
          <p>
            For privacy inquiries or data requests, contact us directly at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
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
