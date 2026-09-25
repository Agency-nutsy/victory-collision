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
  
  // Loading screen states
  const [loadingPhase, setLoadingPhase] = useState<'loading' | 'fading' | 'hidden'>('loading');

  const handleVideoReady = () => {
    if (reducedMotion || loadingPhase !== 'loading') return;
    
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.play().catch(() => {});
    }

    // Video starts playing, wait 0.2s before the loading screen begins to fade/end
    setTimeout(() => {
      setLoadingPhase('fading');
      setTimeout(() => setLoadingPhase('hidden'), 500);
    }, 200);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(prefersReducedMotion);

    if (prefersReducedMotion) {
      // If reduced motion, just hide the loader immediately since we won't play the video
      setLoadingPhase('hidden');
    } else {
      const videoEl = videoRef.current;
      // If video is already loaded from cache, trigger immediately
      if (videoEl && videoEl.readyState >= 3) {
        handleVideoReady();
      }

      // Fallback: hide loader after 5 seconds just in case video takes too long or fails
      const fallback = setTimeout(() => {
        setLoadingPhase('fading');
        setTimeout(() => setLoadingPhase('hidden'), 500);
      }, 5000);
      return () => clearTimeout(fallback);
    }
  }, [loadingPhase, reducedMotion]);

  useEffect(() => {
    if (!containerRef.current || !textWrapperRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(textWrapperRef.current, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Immediate entrance animation on mount
      gsap.fromTo(
        textWrapperRef.current,
        { opacity: 0, y: 24, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power2.out", delay: 0.1 }
      );

      // 2. Simple, clean scroll behavior: text fades up/out as user scrolls past hero
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      // Text fades out smoothly
      scrollTl.to(textWrapperRef.current, { opacity: 0, y: -45, ease: "none" }, 0);

      // Subtle video parallax drift (moves slightly slower than scroll)
      const videoEl = videoRef.current;
      if (videoEl) {
        scrollTl.to(videoEl, { y: "14%", ease: "none" }, 0);
      }
    }, containerRef);

    // Refresh ScrollTrigger to account for any React layout shifts during client routing
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ctx.revert();
      clearTimeout(refreshTimer);
    };
  }, []);

  const videoSource = siteConfig.heroVideoUrl || "/videos/hero.mp4";
  const posterSource = siteConfig.heroImage || "/images/hero-mercedes.png";
  const serviceCity = siteConfig.serviceArea?.[0] || "Los Angeles";

  return (
    <>
      {/* Loading Screen Overlay */}
      {loadingPhase !== 'hidden' && (
        <div 
          className={`fixed inset-0 z-[9999] bg-[#141210] flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${loadingPhase === 'fading' ? 'opacity-0' : 'opacity-100'}`}
        >
          <div className="flex flex-col items-center">
            {/* Simple spinner */}
            <div className="w-16 h-16 border-4 border-[#38332C] border-t-accent rounded-full animate-spin mb-6"></div>
            <h2 className="text-2xl font-heading font-bold text-[#F5F1EA] tracking-widest uppercase">
              {siteConfig.businessName}
            </h2>
            <p className="text-[#A8A093] mt-2 animate-pulse">Loading Experience...</p>
          </div>
        </div>
      )}

      <section
        ref={containerRef}
        id="hero-section"
        className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center"
      >
        {/* Background Media Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Static poster fallback image shown under video / if video is loading or paused */}
        <img
          src={posterSource}
          alt={siteConfig.heroImageAlt || siteConfig.businessName}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          loading="eager"
        />

        {/* Full-bleed video background */}
        {!reducedMotion && (
          <video
            ref={videoRef}
            src={videoSource}
            poster={posterSource}
            onCanPlayThrough={handleVideoReady}
            onLoadedData={handleVideoReady} // Backup event in case CanPlayThrough doesn't fire immediately
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none"
          />
        )}

        {/* Dark gradient overlay for maximum text legibility & contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
      </div>

      {/* Hero Content Overlay — centered, legible, visible immediately on load */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-16 sm:pt-20">
        <div
          ref={textWrapperRef}
          className="flex flex-col items-center will-change-transform"
        >
          {/* Business Badge */}
          <span
            style={{ backgroundColor: "var(--primary-color)" }}
            className="text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-xl border border-white/15 backdrop-blur-md inline-block"
          >
            {siteConfig.businessName}
          </span>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6 leading-[1.1] max-w-4xl text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            {siteConfig.tagline}
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] font-normal">
            Serving {serviceCity} and surrounding areas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
            <MagneticButton>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full font-bold text-base sm:text-lg text-center transition-all duration-medium ease-premium active:scale-[0.98] shadow-2xl block w-full sm:w-auto text-white border border-white/20 hover:brightness-110"
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
    </>
  );
}
