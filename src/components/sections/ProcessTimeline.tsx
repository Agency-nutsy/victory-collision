"use client";

import { ClipboardList, Sparkles, Shield, CheckCircle, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  ClipboardList,
  Sparkles,
  Shield,
  CheckCircle,
};

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
  videoUrl?: string;
  posterUrl?: string;
}

export default function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="py-24 bg-primary text-base relative z-30">
      <div className="absolute inset-0 bg-primary opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">How It Works</h2>
        <h3 className="text-4xl md:text-5xl font-heading font-bold text-base">Our Signature Process</h3>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = iconMap[step.icon] || Sparkles;
            return (
              <div key={idx} className="flex flex-col gap-4">
                {step.videoUrl ? (
                  <div className="relative rounded-2xl overflow-hidden border border-secondary/30 shadow-2xl" style={{ aspectRatio: "9/14" }}>
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
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
                      <span className="text-accent font-black text-sm">{step.step}</span>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-secondary/30 bg-primary/80 p-6 flex items-center justify-center" style={{ aspectRatio: "9/14" }}>
                    <Icon className="w-12 h-12 text-accent" />
                  </div>
                )}
                <div>
                  <h4 className="text-lg font-bold font-heading text-base mb-1">{step.title}</h4>
                  <p className="text-secondary text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
