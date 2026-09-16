"use client";

import Link from "next/link";
import { Quote } from "lucide-react";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { FeaturedTransformation } from "@/config/types";

interface FeaturedTransformationSectionProps {
  data: FeaturedTransformation;
}

export default function FeaturedTransformationSection({ data }: FeaturedTransformationSectionProps) {
  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Label */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Featured Case Study</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-base leading-tight">{data.title}</h2>
          <p className="mt-4 text-secondary font-medium">{data.vehicleDescription}</p>
        </div>

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left: Large Before/After Slider (3/5 width on desktop) */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-secondary/20">
              <BeforeAfterSlider
                beforeImage={data.beforeImage}
                afterImage={data.afterImage}
                beforeLabel="Before"
                afterLabel="After"
              />
            </div>
          </div>

          {/* Right: Story + Meta (2/5 width on desktop) */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            
            {/* Story Narrative */}
            <p className="text-base/80 text-[#F5F1EA]/80 leading-relaxed text-lg mb-8">
              {data.story}
            </p>

            {/* Services Used Pills */}
            <div className="mb-8">
              <p className="text-xs font-bold tracking-widest text-secondary uppercase mb-3">Services Performed</p>
              <div className="flex flex-wrap gap-2">
                {data.servicesUsed.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="px-4 py-1.5 rounded-full text-sm font-semibold border border-accent/40 text-accent hover:bg-accent hover:text-primary transition-all duration-200"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Inline Testimonial Quote (if present) */}
            {data.testimonialQuote && (
              <div className="border-l-2 border-accent pl-6 py-2">
                <Quote className="w-5 h-5 text-accent mb-3 opacity-70" />
                <p className="text-[#F5F1EA]/70 italic leading-relaxed mb-3">
                  "{data.testimonialQuote}"
                </p>
                {data.testimonialAuthor && (
                  <p className="text-sm font-bold text-secondary tracking-wide">— {data.testimonialAuthor}</p>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
