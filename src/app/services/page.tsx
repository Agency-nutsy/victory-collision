import { siteConfig } from "@/config/site.config";
import type { Metadata } from "next";
import Link from "next/link";
import TiltCard from "@/components/animations/TiltCard";
import MagneticButton from "@/components/animations/MagneticButton";
import TrustBadges from "@/components/sections/TrustBadges";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Explore the premium automotive services offered by ${siteConfig.businessName}.`,
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-0 bg-[#1A1815] text-[#F5F1EA]">
      
      {/* Header / Intro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#F5F1EA] mb-6">Our Services</h1>
        <p className="text-xl text-[#A8A093] max-w-3xl mx-auto leading-relaxed">
          At {siteConfig.businessName}, we believe every vehicle deserves meticulous attention to detail. We offer a comprehensive suite of premium services designed to restore, protect, and enhance your investment.
        </p>
      </div>

      {/* Services Grid (Reused from Homepage) */}
      <section className="pb-24 bg-[#1A1815]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service) => (
              <TiltCard key={service.slug}>
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div className="bg-[#24211D] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full flex flex-col border border-[#38332C] hover:border-accent/40">
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-[#1A1815]" />
                      <img 
                        src={service.image} 
                        alt={service.name} 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="text-[#F5F1EA] font-bold px-3 py-1 rounded-full text-sm backdrop-blur-md bg-black/40 border border-white/10">
                          {service.priceRange}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-heading font-bold text-[#F5F1EA] mb-3">{service.name}</h3>
                      <p className="text-[#A8A093] mb-6 flex-grow leading-relaxed">{service.shortDescription}</p>
                      <span className="text-accent font-medium group-hover:text-[#F5F1EA] transition-colors inline-flex items-center">
                        Learn More &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="border-y border-[#38332C] bg-[#1A1815]">
        <TrustBadges signals={siteConfig.trustSignals} />
      </div>

      {/* FAQ Section */}
      <section className="py-24 bg-[#1A1815]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">Common Questions</h2>
            <h3 className="text-4xl font-heading font-bold text-[#F5F1EA]">Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "How long does a typical service take?", a: "Service times vary by package. A standard interior detail takes 2-3 hours, while a full ceramic coating can take 1-2 days to allow for proper curing." },
              { q: "Do I need to make an appointment?", a: "Yes, we operate by appointment only to ensure we can dedicate the proper amount of time and attention to every vehicle we service." },
              { q: "Do you offer mobile services?", a: "Depending on the service requested and your location within our service area, we can arrange mobile detailing. Please contact us for details." },
              { q: "What kind of products do you use?", a: "We exclusively use premium, professional-grade products that are safe for your vehicle's specific materials and finishes." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-[#24211D] border border-[#38332C] rounded-2xl p-6 shadow-md">
                <h4 className="text-xl font-bold font-heading text-[#F5F1EA] mb-3">{faq.q}</h4>
                <p className="text-[#E6E1D8] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-[#141210] text-[#F5F1EA] border-t border-[#38332C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Not sure which service is right for you?</h2>
          <p className="text-xl mb-10 text-[#A8A093]">
            Contact our team for a personalized consultation and free estimate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <MagneticButton>
              <Link href="/contact" className="px-8 py-4 rounded-full font-bold text-lg bg-accent text-[#1A1815] hover:brightness-110 transition-all block text-center shadow-xl">
                Get a Free Quote
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

    </div>
  );
}
