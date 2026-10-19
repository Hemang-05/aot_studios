"use client";

import React, { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  globeSrc?: string;
  networkSrc?: string;
  globePoster?: string;
  networkPoster?: string;
  className?: string;
}

/**
 * HeroVideo component:
 * - Plays globe.mp4 prominently before scroll at full scale
 * - Immediate poster preview via globe-poster.png prevents any black flash
 * - As user scrolls, the globe starts to minimize (scales down from 1.0 to ~0.55)
 * - Smoothly crossfades from globe.mp4 to bg_network.mp4 as user scrolls into subsequent sections
 * - Scrim is calibrated for high legibility while letting the globe shine through
 * - Placed at z-0 with pointer-events-none so mousewheel/trackpad scroll pass cleanly through
 */
export function HeroVideo({
  globeSrc = "/globe.mp4",
  networkSrc = "/bg_network.mp4",
  globePoster = "/globe-poster.png",
  networkPoster = "/network-poster.png",
  className = "",
}: HeroVideoProps) {
  const globeRef = useRef<HTMLVideoElement>(null);
  const networkRef = useRef<HTMLVideoElement>(null);

  const [globeReady, setGlobeReady] = useState(false);
  const [networkReady, setNetworkReady] = useState(false);

  // Scroll interpolation states
  const [globeScale, setGlobeScale] = useState(1);
  const [globeOpacity, setGlobeOpacity] = useState(1);
  const [networkOpacity, setNetworkOpacity] = useState(0);
  const [darkenOverlay, setDarkenOverlay] = useState(0);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      if (globeRef.current) globeRef.current.pause();
      if (networkRef.current) networkRef.current.pause();
      return;
    }

    const handleScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      const vh = window.innerHeight || 800;

      // Scroll progress through the hero (0 at top, 1 at 75% of viewport height)
      const progress = Math.min(1, Math.max(0, y / (vh * 0.75)));

      // Minimize effect: globe scales down smoothly from 1.0 to ~0.55 as user scrolls
      const scale = 1 - progress * 0.45;
      setGlobeScale(scale);

      // Smooth crossfade: globe fades from 1 -> 0, network fades from 0 -> 1
      setGlobeOpacity(Math.max(0, 1 - progress * 1.05));
      setNetworkOpacity(progress);

      // Deep page scroll darkening: ensures maximum contrast over reading sections
      const deepFade = Math.min(0.65, Math.max(0, (y - vh * 0.4) / (vh * 0.8)));
      setDarkenOverlay(deepFade);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Ensure videos autoplay muted
    const tryPlay = () => {
      if (globeRef.current && globeRef.current.paused) {
        globeRef.current.muted = true;
        globeRef.current.play().catch(() => {});
      }
      if (networkRef.current && networkRef.current.paused) {
        networkRef.current.muted = true;
        networkRef.current.play().catch(() => {});
      }
    };

    tryPlay();
    window.addEventListener("click", tryPlay, { once: true });
    window.addEventListener("touchstart", tryPlay, { once: true });
    window.addEventListener("wheel", tryPlay, { once: true, passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", tryPlay);
      window.removeEventListener("touchstart", tryPlay);
      window.removeEventListener("wheel", tryPlay);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-black ${className}`}
      aria-hidden="true"
    >
      {/* ── Solid Black Fallback Baseline ── */}
      <div className="absolute inset-0 bg-[#000000] -z-20" />

      {/* ── Background Video Layer 2: Network (Crossfades in as user scrolls) ── */}
      <div
        className="absolute inset-0 w-full h-full transition-opacity duration-500 ease-out z-[1] pointer-events-none"
        style={{
          opacity: networkOpacity * 0.75,
        }}
      >
        <video
          ref={networkRef}
          src={networkSrc}
          poster={networkPoster}
          className="w-full h-full object-cover pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setNetworkReady(true)}
          onCanPlay={() => setNetworkReady(true)}
        >
          <source src={networkSrc} type="video/mp4" />
        </video>
      </div>

      {/* ── Hero Video Layer 1: Globe (Active Before Scroll, Minimizes on Scroll) ── */}
      <div
        className="absolute inset-0 w-full h-full flex items-center justify-center z-[2] transition-transform duration-100 ease-out pointer-events-none"
        style={{
          opacity: globeOpacity,
          transform: `scale(${globeScale})`,
          transformOrigin: "center center",
        }}
      >
        <video
          ref={globeRef}
          src={globeSrc}
          poster={globePoster}
          className="w-full h-full object-cover pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setGlobeReady(true)}
          onCanPlay={() => setGlobeReady(true)}
        >
          <source src={globeSrc} type="video/mp4" />
        </video>
      </div>

      {/* ── Dark Gradient / Scrim Layer ── */}
      {/* Leaves center clear for the globe, with top/bottom gradients for nav and cues */}
      <div
        className="absolute inset-0 pointer-events-none z-[3]"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.45) 0%,
            rgba(0, 0, 0, 0.10) 25%,
            rgba(0, 0, 0, 0.15) 70%,
            rgba(0, 0, 0, 0.60) 100%
          )`,
        }}
      />

      {/* Subtle radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-[3]"
        style={{
          background: "radial-gradient(ellipse at center, transparent 45%, rgba(0, 0, 0, 0.55) 100%)",
        }}
      />

      {/* ── Deep Scroll Darkening Layer (fades in past hero for reading sections) ── */}
      <div
        className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-200 ease-linear z-[4]"
        style={{ opacity: darkenOverlay }}
      />
    </div>
  );
}
