"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const currentYear = 2026;

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Approach", href: "#approach" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: siteConfig.socialLinks.find((s) => s.label.toLowerCase() === "linkedin")?.href || "",
    },
    {
      label: "X",
      href:
        siteConfig.socialLinks.find(
          (s) => s.label.toLowerCase() === "x" || s.label.toLowerCase() === "twitter"
        )?.href || "",
    },
    {
      label: "Instagram",
      href: siteConfig.socialLinks.find((s) => s.label.toLowerCase() === "instagram")?.href || "",
    },
  ];

  const legalLinks = [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Careers", href: "/careers" },
  ];

  return (
    <footer
      role="contentinfo"
      className="relative z-10 bg-black px-[4vw] pt-14 pb-12 border-t border-white/[0.08]"
    >
      <div className="max-w-[1500px] mx-auto flex flex-col gap-10">
        {/* Primary Brand (Clean Typographic Treatment, No Logo/Symbol) */}
        <div className="select-none">
          <span className="text-[15px] md:text-[17px] font-semibold tracking-[0.24em] uppercase text-[#F5F5F5] block">
            AOT
          </span>
          <span className="text-[10px] md:text-[11px] font-medium tracking-[0.28em] uppercase text-[#686868] block mt-1.5">
            Architecture of Thought
          </span>
        </div>

        {/* Thin Divider Line */}
        <div className="w-full h-[1px] bg-white/[0.08]" />

        {/* Navigation & Link Groups */}
        <div className="flex flex-col gap-7 md:gap-8">
          {/* Main Navigation */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] md:text-[11px] font-medium tracking-[0.24em] uppercase text-[#999999] hover:text-[rgb(var(--accent))] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Links (text-based, minimal) */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {socialLinks.map((social) =>
              social.href ? (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] md:text-[11px] font-medium tracking-[0.24em] uppercase text-[#999999] hover:text-[rgb(var(--accent))] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                >
                  {social.label}
                </a>
              ) : (
                <span
                  key={social.label}
                  className="text-[10px] md:text-[11px] font-medium tracking-[0.24em] uppercase text-[#686868] cursor-default select-none"
                  title="Coming soon"
                >
                  {social.label}
                </span>
              )
            )}
          </div>

          {/* Legal Links & Careers */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {legalLinks.map((legal) => (
              <Link
                key={legal.label}
                href={legal.href}
                className="text-[10px] md:text-[11px] font-medium tracking-[0.24em] uppercase text-[#686868] hover:text-[#999999] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
              >
                {legal.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/[0.04] flex items-center justify-between">
          <p className="text-[10px] font-medium tracking-[0.24em] uppercase text-[#686868]">
            &copy; {currentYear} AOT. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
