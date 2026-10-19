"use client";

import React, { useEffect, useState } from "react";

interface HeroBackgroundProps {
  children?: React.ReactNode;
}

/**
 * Modular background layer.
 * Keeps the hero visual layer decoupled from page layout and structure,
 * allowing future media or canvas backgrounds to be plugged in seamlessly
 * without modifying hero structure or breaking page interaction.
 */
export function HeroBackground({ children }: HeroBackgroundProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Restrained fade calculation: fades subtly to pure black as user scrolls down past hero
  const fadeOpacity = Math.min(1, scrollY / (typeof window !== "undefined" ? window.innerHeight * 0.7 : 700));

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden bg-black"
      aria-hidden="true"
    >
      {/* Optional future background media/canvas layer */}
      {children ? (
        <div className="absolute inset-0 w-full h-full">{children}</div>
      ) : (
        /* Solid black minimalist canvas */
        <div className="absolute inset-0 bg-[#000000]" />
      )}

      {/* Restrained black-to-black scroll fade matching reference architecture */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-150 ease-linear"
        style={{ opacity: fadeOpacity * 0.8 }}
      />
    </div>
  );
}
