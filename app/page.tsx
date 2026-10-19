import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { StarfieldBackdrop } from "@/components/starfield-backdrop";
import { AboutSection } from "@/components/about-section";
import { ApproachSection } from "@/components/approach-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-[#F5F5F5] selection:bg-[#222222] selection:text-white">
      {/* Ambient Starfield & Nebula Glow (fades in past hero, vanishes when scrolled up) */}
      <StarfieldBackdrop />

      {/* Fixed Navigation Header */}
      <SiteNav />

      {/* Page Content in exact order */}
      <main id="main-content">
        <Hero />
        <AboutSection />
        <ApproachSection />
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <SiteFooter />
    </div>
  );
}
