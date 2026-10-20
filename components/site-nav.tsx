"use client";

import React, { useState, useEffect, useCallback } from "react";
import { siteConfig } from "@/config/site";

export function SiteNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? "hidden" : "";
      return next;
    });
  }, []);

  // Handle ESC key and resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen, closeMenu]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isMobileMenuOpen) closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      closeMenu();
      const targetId = href.replace("#", "");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      } else {
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          isScrolled
            ? "bg-black/55 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        } px-[4vw]`}
      >
        <div className="max-w-[1500px] mx-auto flex items-center justify-between w-full">
          {/* Studio Wordmark / Brand Lockup: AOT + Architecture of Thought */}
          <a
            href="#top"
            onClick={scrollToTop}
            className="flex flex-col items-start group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white select-none"
            aria-label={`${siteConfig.name} - ${siteConfig.baseline}`}
          >
            <span className="text-[14px] font-semibold tracking-[0.24em] uppercase text-white transition-colors group-hover:text-white/80">
              {siteConfig.wordmark}
            </span>
            <span className="text-[9px] font-normal tracking-[0.22em] uppercase text-[#999999] transition-colors group-hover:text-white/70">
              {siteConfig.baseline}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-9"
          >
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[11px] font-medium tracking-[0.28em] uppercase text-[#999999] hover:text-[rgb(var(--accent))] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white p-2"
          >
            <span
              className={`w-6 h-[1px] bg-white/80 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                isMobileMenuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`w-6 h-[1px] bg-white/80 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                isMobileMenuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-10 md:hidden transition-all duration-400 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-center">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-[15px] font-medium tracking-[0.28em] uppercase text-[#999999] hover:text-[rgb(var(--accent))] transition-colors py-2 px-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="absolute bottom-12 text-center flex flex-col items-center gap-1 select-none">
          <span className="text-[13px] font-semibold tracking-[0.24em] uppercase text-white">
            {siteConfig.name}
          </span>
          <span className="text-[9px] tracking-[0.22em] uppercase text-[#686868]">
            {siteConfig.baseline}
          </span>
        </div>
      </div>
    </>
  );
}
