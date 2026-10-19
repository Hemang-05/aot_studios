"use client";

import React from "react";
import { HeroVideo } from "@/components/hero-video";

export function Hero() {
  const handleScrollClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutEl = document.getElementById("about");
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "#about";
    }
  };

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative w-full h-screen h-[100dvh] flex flex-col justify-end bg-transparent select-none pointer-events-none"
    >
      {/* 
        Hero Architecture:
        Hero
         ├── HeroVideo (renders globe.mp4, minimizes on scroll, crossfades to bg_network.mp4)
         ├── dark gradient/scrim (managed inside HeroVideo)
         ├── navigation/content
         └── scroll indicator
      */}

      {/* 1. HeroVideo Component */}
      <HeroVideo />

      {/* 2. Hero Content Area (Preserving sparse, cinematic restraint) */}
      <div className="relative z-10 w-full px-[4vw] flex-1 flex items-center justify-center pointer-events-none">
        {/* Intentionally sparse hero content per creative direction */}
      </div>

      {/* 3. Scroll Indicator */}
      <div className="relative z-10 w-full px-[4vw] pb-12 md:pb-16 pointer-events-auto">
        <div className="max-w-[1500px] mx-auto">
          <a
            href="#about"
            onClick={handleScrollClick}
            aria-label="Scroll to About section"
            className="group inline-flex flex-col items-start gap-3 text-[#999999] hover:text-[#F5F5F5] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white p-1 -ml-1"
          >
            <span className="text-[10px] font-medium tracking-[0.32em] uppercase text-inherit transition-colors">
              Scroll
            </span>
            {/* Minimal vertical line with animated wipe */}
            <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-[#F5F5F5] animate-scroll-line" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
