"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site.config";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/animations/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Detect reduced motion preference and start video
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    if (!mq.matches && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  // GSAP entrance + scroll parallax — isolated in a context so ctx.revert()
  // fully cleans up inline styles when the user navigates away and comes back.
  useEffect(() => {
    if (!containerRef.current || !textWrapperRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(textWrapperRef.current, { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      // Entrance: text fades up into view
      gsap.fromTo(
        textWrapperRef.current,
        { opacity: 0, y: 28, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out", delay: 0.15 }
      );

      // Scroll parallax: text drifts up and fades as user scrolls
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      scrollTl.to(textWrapperRef.current, { opacity: 0, y: -50, ease: "none" }, 0);

      // Video subtle parallax
      const videoEl = videoRef.current;
      if (videoEl) {
        scrollTl.to(videoEl, { y: "15%", ease: "none" }, 0);
      }
    }, containerRef);

    // Refresh after layout settles (handles client-side navigation layout shifts)
    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 150);

    return () => {
      ctx.revert();
      clearTimeout(refreshTimer);
    };
  }, []);

  const videoSource = siteConfig.heroVideoUrl || "/videos/hero.mp4";
  const posterSource = siteConfig.heroImage || "/images/hero-mercedes.png";
  const serviceCity = siteConfig.serviceArea?.[0] || "New Hyde Park";

  return (
    <section
      ref={containerRef}
      id="hero-section"
      className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center"
    >
      {/* ── Background layer ── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Static poster — visible immediately, acts as video placeholder */}
        <img
          src={posterSource}
          alt={siteConfig.heroImageAlt || siteConfig.businessName}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          loading="eager"
          fetchPriority="high"
        />

        {/* Hero video — preloads aggressively in the background */}
        {!reducedMotion && (
          <video
            ref={videoRef}
            src={videoSource}
            poster={posterSource}
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none"
          />
        )}

        {/* Dark gradient overlays for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-black/15 z-10 pointer-events-none" />
      </div>

      {/* ── Hero content ── */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-12 sm:pt-16">
        <div
          ref={textWrapperRef}
          className="flex flex-col items-center will-change-transform"
        >
          {/* Logo above hero text */}
          {siteConfig.logoUrl && (
            <div className="mb-6 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[#D4AF37]/20 blur-xl rounded-full scale-125 pointer-events-none" />
              <img
                src={siteConfig.logoUrl}
                alt={siteConfig.businessName}
                className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)]"
                loading="eager"
              />
            </div>
          )}

          {/* Business name as main headline — original size -20%, one line */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-6 leading-tight whitespace-nowrap text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            {siteConfig.businessName}
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] font-normal">
            Serving {serviceCity} and surrounding areas.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
            <MagneticButton>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full font-bold text-base sm:text-lg text-center transition-all active:scale-[0.98] shadow-2xl block w-full sm:w-auto text-white border border-white/20 hover:brightness-110"
                style={{ backgroundColor: "var(--primary-color)" }}
              >
                Book Appointment
              </Link>
            </MagneticButton>

            <MagneticButton>
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                className="px-8 py-4 rounded-full font-bold text-base sm:text-lg text-center bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all text-white border border-white/25 shadow-xl block w-full sm:w-auto active:scale-[0.98]"
              >
                Call {siteConfig.phone}
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
