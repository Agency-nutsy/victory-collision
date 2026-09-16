"use client";

import { Check } from "lucide-react";
import MagneticButton from "../animations/MagneticButton";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PricingPackage {
  name: string;
  price: string;
  isPopular?: boolean;
  features: string[];
}

export default function PricingTable({ packages }: { packages: PricingPackage[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Select all pricing cards inside the container
    const cards = containerRef.current.querySelectorAll('.pricing-card');
    
    // Animate cards popping up
    gsap.fromTo(
      cards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [packages]);

  if (!packages || packages.length === 0) return null;

  return (
    <section ref={containerRef} className="py-24 bg-[#1A1815] border-b border-[#38332C] relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">Transparent Pricing</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-[#F5F1EA]">Premium Packages</h3>
          <p className="mt-4 text-xl text-[#A8A093] max-w-2xl mx-auto">
            Choose the level of perfection your vehicle deserves. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {packages.map((pkg, idx) => {
            const isPopular = pkg.isPopular;
            return (
              <div 
                key={idx} 
                className={`pricing-card relative flex flex-col p-8 rounded-3xl bg-[#24211D] ${
                  isPopular 
                    ? "border-2 border-accent shadow-2xl md:-translate-y-4" 
                    : "border border-[#38332C] shadow-lg mt-0 md:mt-4"
                } transition-all duration-300 hover:shadow-2xl`}
              >
                {isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-[#1A1815] text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg z-10">
                    Most Popular
                  </div>
                )}
                
                <h4 className="text-2xl font-bold font-heading text-[#F5F1EA] mb-2">{pkg.name}</h4>
                <div className="flex items-baseline gap-2 mb-6 border-b border-[#38332C] pb-6">
                  <span className="text-4xl font-bold text-[#F5F1EA]">{pkg.price}</span>
                  <span className="text-[#A8A093] font-medium tracking-wide text-sm">/ starting at</span>
                </div>
                
                <ul className="flex-grow space-y-4 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-[#D6D0C5]">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <MagneticButton className="w-full">
                  <a href="/contact" className={`block w-full text-center py-4 rounded-full font-bold transition-all ${
                    isPopular 
                      ? "bg-accent text-[#1A1815] hover:brightness-110 shadow-lg" 
                      : "border border-[#F5F1EA]/25 text-[#F5F1EA] hover:bg-[#F5F1EA]/10"
                  }`}>
                    Book Now
                  </a>
                </MagneticButton>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
