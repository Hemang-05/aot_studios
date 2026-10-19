"use client";

import React, { useEffect, useRef } from "react";

/**
 * Ambient Starfield and Nebula Glow Backdrop
 * - Fades in as user scrolls past the hero
 * - Completely vanishes when scrolled up to the hero (scrollY <= 0.4 * vh)
 * - Renders subtle twinkling stars drifting horizontally with cyan and cool white tints
 * - Distant soft cyan ambient nebula glows that anchor depth
 */
export function StarfieldBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const glow = glowRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Array<{
      x: number;
      y: number;
      size: number;
      baseAlpha: number;
      twinkleSpeed: number;
      twinkleOffset: number;
      driftX: number;
      tint: "white" | "cool" | "cyan";
      glow: boolean;
    }> = [];

    const resizeStars = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);

      const isMobile = w <= 768;
      const density = isMobile ? 2200 : 1100;
      const count = Math.floor((w * h) / density);

      stars = [];
      for (let i = 0; i < count; i++) {
        const roll = Math.random();
        const tint = roll < 0.62 ? "white" : roll < 0.84 ? "cool" : "cyan";
        const sizeRoll = Math.random();
        const size = sizeRoll < 0.55 ? 1 : sizeRoll < 0.85 ? 1.5 : sizeRoll < 0.97 ? 2 : 2.5;

        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size,
          baseAlpha: 0.4 + Math.random() * 0.5,
          twinkleSpeed: 0.3 + Math.random() * 2.2,
          twinkleOffset: Math.random() * Math.PI * 2,
          driftX: (Math.random() - 0.5) * 0.06,
          tint,
          glow: size >= 2,
        });
      }
    };

    const drawStars = (time: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const t = time * 0.001;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const twinkle = 0.5 + 0.5 * Math.sin(t * s.twinkleSpeed + s.twinkleOffset);
        const alpha = s.baseAlpha * (0.55 + twinkle * 0.45);

        // Drift and wrap around viewport
        s.x += s.driftX;
        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;

        let color = "";
        let glowColor = "";

        if (s.tint === "cyan") {
          color = `rgba(140, 240, 230, ${alpha})`;
          glowColor = `rgba(0, 230, 210, ${alpha * 0.5})`;
        } else if (s.tint === "cool") {
          color = `rgba(210, 230, 250, ${alpha})`;
          glowColor = `rgba(180, 220, 255, ${alpha * 0.4})`;
        } else {
          color = `rgba(250, 250, 252, ${alpha})`;
          glowColor = `rgba(255, 255, 255, ${alpha * 0.4})`;
        }

        if (s.glow) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = glowColor;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillStyle = color;
        ctx.fillRect(Math.round(s.x), Math.round(s.y), s.size, s.size);
      }
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(drawStars);
    };

    // Scroll opacity sync:
    // When scrollY <= vh * 0.4, opacity is 0 (vanishes completely when scrolled up to hero!)
    // Fades in smoothly between 0.4 * vh and 0.8 * vh
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      const vh = window.innerHeight || 800;
      const progress = Math.max(0, Math.min(1, (y - vh * 0.4) / (vh * 0.4)));

      canvas.style.opacity = `${progress}`;
      if (glow) {
        glow.style.opacity = `${progress}`;
      }
    };

    resizeStars();
    animationFrameId = requestAnimationFrame(drawStars);
    onScroll();

    window.addEventListener("resize", resizeStars);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeStars);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Distant nebula glow — soft cyan washes that anchor depth */}
      <div
        ref={glowRef}
        id="ambient-glow"
        className="fixed inset-0 pointer-events-none transition-opacity duration-700 ease-out z-[2]"
        style={{
          opacity: 0,
          background: `
            radial-gradient(ellipse 60% 50% at 12% 75%, rgba(0, 230, 210, 0.20) 0%, transparent 55%),
            radial-gradient(ellipse 55% 45% at 90% 22%, rgba(0, 200, 195, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0, 230, 210, 0.05) 0%, transparent 70%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Twinkling Starfield Canvas — vanishes when hero is in view */}
      <canvas
        ref={canvasRef}
        id="stars-canvas"
        className="fixed inset-0 pointer-events-none transition-opacity duration-600 ease-out z-[3] mix-blend-screen"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
    </>
  );
}
