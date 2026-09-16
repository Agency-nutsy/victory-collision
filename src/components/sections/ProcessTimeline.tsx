"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClipboardList, Droplets, Sparkles, Shield, type LucideIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, LucideIcon> = {
  ClipboardList,
  Droplets,
  Sparkles,
  Shield,
};

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export default function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const isGridLayout = steps.length > 3;

  useEffect(() => {
    // Only apply GSAP ScrollTrigger on desktop devices (non-touch) and if not in grid layout
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isDesktop || prefersReducedMotion || isGridLayout) return;

    if (!containerRef.current || !scrollWrapperRef.current) return;

    const container = containerRef.current;
    const scrollWrapper = scrollWrapperRef.current;

    // Calculate total scroll distance needed
    const scrollWidth = scrollWrapper.scrollWidth - window.innerWidth;

    const tween = gsap.to(scrollWrapper, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1, // Smooth scrubbing
        end: () => `+=${scrollWidth}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [steps, isGridLayout]);

  if (!steps || steps.length === 0) return null;

  return (
    <section ref={containerRef} className={`py-24 bg-primary text-base overflow-hidden relative z-30 ${!isGridLayout ? 'lg:h-screen lg:flex lg:flex-col lg:justify-center' : ''}`}>
      <div className="absolute inset-0 bg-primary opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10 w-full">
        <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">How It Works</h2>
        <h3 className="text-4xl md:text-5xl font-heading font-bold text-base">Our Signature Process</h3>
      </div>

      <div className="relative z-10 w-full overflow-hidden">
        <div 
          ref={scrollWrapperRef} 
          className={isGridLayout 
            ? "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
            : "flex lg:flex-nowrap flex-nowrap overflow-x-auto snap-x snap-mandatory lg:overflow-visible lg:snap-none pl-4 pr-12 lg:px-[10vw] pb-8 gap-8 hide-scrollbar"}
        >
          {steps.map((step, idx) => {
            const Icon = iconMap[step.icon] || Sparkles;
            return (
              <div key={idx} className={isGridLayout ? "flex flex-col gap-6 w-full" : "w-[85vw] sm:w-[60vw] lg:w-[35vw] flex-shrink-0 snap-center flex flex-col gap-6"}>
                {step.videoUrl ? (
                  <div className="relative rounded-2xl h-[400px] border border-secondary/50 overflow-hidden bg-primary/80 backdrop-blur-md shadow-2xl">
                    <video 
                      src={step.videoUrl} 
                      poster={step.posterUrl} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      preload="none"
                      className="absolute inset-0 w-full h-full object-cover" 
                    />
                  </div>
                ) : (
                  <div className="bg-primary/80 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-secondary/50 flex flex-col justify-between group hover:border-[var(--secondary-color)] transition-colors h-[400px]">
                    <div>
                      <div className="flex justify-between items-start mb-12">
                        <span className="text-6xl font-black text-[#F5F1EA]/10 group-hover:text-[#F5F1EA]/20 transition-colors font-heading tracking-tighter">
                          {step.step}
                        </span>
                        <div className="w-16 h-16 rounded-full bg-primary/50 flex items-center justify-center text-secondary">
                          <Icon className="w-8 h-8" />
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold font-heading mb-4 text-base">{step.title}</h4>
                      <p className="text-secondary text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )}

                {step.videoUrl && (
                  <div className="px-2">
                    <h4 className="text-2xl font-bold font-heading mb-4 text-base">{step.title}</h4>
                    <p className="text-secondary text-lg leading-relaxed">{step.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

