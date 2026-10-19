"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Filter valid social links (only render when a non-empty, valid URL is provided)
  const validSocialLinks = siteConfig.socialLinks.filter(
    (item) => item.href && item.href.trim().length > 0 && item.href.startsWith("http")
  );

  return (
    <footer
      role="contentinfo"
      className="relative z-10 bg-black px-[4vw] py-9 border-t border-white/[0.08]"
    >
      <div className="max-w-[1500px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
        {/* Studio Mark & Baseline & Dynamic Year */}
        <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 text-center sm:text-left select-none">
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-white">
            {siteConfig.name}
          </span>
          <span className="text-[10px] font-normal tracking-[0.20em] uppercase text-[#999999]">
            &mdash; {siteConfig.baseline} &mdash; {currentYear}
          </span>
        </div>


        {/* Footer Links */}
        <div className="flex flex-wrap items-center justify-center gap-7">
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-[10px] font-medium tracking-[0.28em] uppercase text-[#999999] hover:text-[rgb(var(--accent))] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
          >
            {siteConfig.email}
          </a>

          {validSocialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-[10px] font-medium tracking-[0.28em] uppercase text-[#999999] hover:text-[rgb(var(--accent))] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
