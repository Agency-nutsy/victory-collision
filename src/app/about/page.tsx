import { siteConfig } from "@/config/site.config";
import type { Metadata } from "next";
import Link from "next/link";
import { Star } from "lucide-react";
import TrustBadges from "@/components/sections/TrustBadges";
import ReviewSummary from "@/components/sections/ReviewSummary";
import TiltCard from "@/components/animations/TiltCard";
import MagneticButton from "@/components/animations/MagneticButton";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn more about ${siteConfig.businessName} and our experienced team.`,
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-0 bg-[#1A1815] text-[#F5F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#F5F1EA] mb-4">About {siteConfig.businessName}</h1>
          <p className="text-xl text-[#A8A093] max-w-3xl mx-auto leading-relaxed">
            Providing top-tier automotive services with a commitment to excellence and customer satisfaction.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-[#24211D] rounded-3xl p-8 md:p-12 mb-24 shadow-xl border border-[#38332C]">
          <h2 className="text-3xl font-heading font-bold text-[#F5F1EA] mb-6">Our Story</h2>
          <div className="space-y-6 text-[#E6E1D8] text-lg leading-relaxed max-w-none">
            <p>
              For over {siteConfig.trustSignals.yearsInBusiness} years, {siteConfig.businessName} has been the trusted choice for automotive care in {siteConfig.city} and surrounding areas. We started with a simple mission: to provide honest, high-quality service that our community can rely on.
            </p>
            <p>
              Our facility is equipped with state-of-the-art tools, and our team stays up-to-date with the latest industry standards and techniques. Whether you're coming in for a routine check-up or a comprehensive detailing package, we treat every vehicle as if it were our own.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">Our People</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-[#F5F1EA]">Meet Our Experts</h3>
          </div>
          
          <div className={`grid grid-cols-1 ${siteConfig.teamMembers.length > 1 ? 'md:grid-cols-2 lg:grid-cols-3' : 'max-w-md mx-auto'} gap-8`}>
            {siteConfig.teamMembers.map((member, index) => (
              <div key={index} className="bg-[#24211D] border border-[#38332C] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className="h-72 bg-[#1A1815] relative overflow-hidden">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold font-heading text-[#F5F1EA]">{member.name}</h3>
                  <p className="text-accent font-bold mb-6">{member.role}</p>
                  
                  {member.certifications.length > 0 && (
                    <div>
                      <p className="text-xs font-bold text-[#A8A093] mb-3 uppercase tracking-widest">Certifications</p>
                      <ul className="space-y-2">
                        {member.certifications.map((cert, idx) => (
                          <li key={idx} className="text-[#D6D0C5] text-sm flex items-center font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></span>
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Badges Reused */}
      <div className="border-t border-[#38332C] bg-[#1A1815]">
        <TrustBadges signals={siteConfig.trustSignals} />
      </div>

      {/* Testimonials Reused */}
      <section className="py-24 bg-[#1A1815] text-[#F5F1EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2 leading-loose pt-1">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-[#F5F1EA]">What Our Clients Say</h3>
          </div>
          
          <ReviewSummary 
            rating={siteConfig.googleRating || 5} 
            count={siteConfig.googleReviewCount || 0} 
            link={siteConfig.googleReviewLink} 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {siteConfig.testimonials.slice(0, 3).map((testimonial, i) => (
              <TiltCard key={i}>
                <div className="bg-[#24211D] p-8 rounded-2xl border border-[#38332C] hover:border-accent/30 transition-colors h-full flex flex-col shadow-lg">
                  <div className="flex items-center mb-4 space-x-1">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-[#E6E1D8] italic mb-6 flex-grow text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div className="mt-auto">
                    <p className="font-bold text-[#F5F1EA] font-heading">{testimonial.author}</p>
                    <p className="text-sm text-[#A8A093]">{testimonial.service} • {testimonial.date}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-[#141210] border-t border-[#38332C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#F5F1EA] mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-[#A8A093] mb-10 leading-relaxed">
            Join hundreds of satisfied customers in {siteConfig.city} and treat your vehicle to the best care possible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <MagneticButton>
              <Link href="/contact" className="px-8 py-4 rounded-full font-bold text-lg bg-accent text-[#1A1815] hover:brightness-110 transition-all block text-center shadow-xl">
                Book Your Appointment
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="px-8 py-4 rounded-full font-bold text-lg border border-[#F5F1EA]/30 text-[#F5F1EA] hover:bg-white/10 transition-all block text-center">
                Call {siteConfig.phone}
              </a>
            </MagneticButton>
          </div>
        </div>
      </section>

    </div>
  );
}
