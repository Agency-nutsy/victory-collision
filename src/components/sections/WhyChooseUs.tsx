import { ShieldCheck, FileText, Star, Wrench, Clock, PhoneCall } from "lucide-react";

const reasons = [
  {
    icon: FileText,
    title: "Full Insurance Assistance",
    description: "We deal directly with your insurance company from start to finish — no stress for you.",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Workmanship Warranty",
    description: "Every repair we do is backed by a warranty on our craftsmanship.",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Hundreds of happy customers across New Hyde Park and Nassau County.",
  },
  {
    icon: Wrench,
    title: "Body & Mechanical Under One Roof",
    description: "Collision repair and full auto service — no need to visit multiple shops.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "We know you need your car back. We work efficiently without cutting corners.",
  },
  {
    icon: PhoneCall,
    title: "Free Estimates, Always",
    description: "Get a transparent, no-obligation quote before any work begins.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#141210]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">Why Victory?</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-[#F5F1EA]">
            The Shop You Can Trust
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="flex gap-5 p-6 rounded-2xl border border-[#38332C] bg-[#1A1815] hover:border-accent/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <r.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold font-heading text-[#F5F1EA] mb-1">{r.title}</h4>
                <p className="text-[#A8A093] text-sm leading-relaxed">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
