import { siteConfig } from "@/config/site.config";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, Star, ShieldCheck } from "lucide-react";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import TiltCard from "@/components/animations/TiltCard";
import MagneticButton from "@/components/animations/MagneticButton";
import TrustBadges from "@/components/sections/TrustBadges";

// Pre-render all service pages at build time
export function generateStaticParams() {
  return siteConfig.services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata based on the specific service
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = siteConfig.services.find((s) => s.slug === params.slug);
  
  if (!service) {
    return { title: 'Service Not Found' };
  }
  
  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = siteConfig.services.find((s) => s.slug === params.slug);
  
  if (!service) {
    notFound();
  }

  // Find a specific testimonial for this service, or fallback to the first one if none explicitly match
  const specificTestimonial = siteConfig.testimonials.find(t => t.service === service.name) || siteConfig.testimonials[0];

  return (
    <div className="bg-[#1A1815] text-[#F5F1EA]">
      
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#1A1815] text-[#F5F1EA]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#1A1815]/85 z-10"></div>
          <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services" className="text-[#A8A093] hover:text-[#F5F1EA] transition-colors mb-6 inline-block font-medium">&larr; Back to all services</Link>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-[#F5F1EA]">{service.name}</h1>
            <p className="text-xl md:text-2xl text-[#E6E1D8] mb-8">{service.shortDescription}</p>
            <div className="inline-block bg-black/50 backdrop-blur-md border border-white/15 rounded-full px-6 py-3 font-bold text-accent text-xl">
              {service.priceRange}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content (Overview & Sidebar) */}
      <section className="py-24 bg-[#1A1815]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Left Column: Details & Inclusions */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-heading font-bold text-[#F5F1EA] mb-6">Service Overview</h2>
              <div className="text-[#E6E1D8] text-lg leading-relaxed space-y-6 mb-16">
                {service.longDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* What's Included */}
              {service.serviceIncludes && service.serviceIncludes.length > 0 && (
                <div className="bg-[#24211D] rounded-3xl p-8 md:p-10 mb-16 border border-[#38332C] shadow-xl text-[#F5F1EA]">
                  <h3 className="text-2xl font-heading font-bold text-[#F5F1EA] mb-6">What's Included</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.serviceIncludes.map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0 mt-0.5" />
                        <span className="text-[#E6E1D8]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-[#24211D] rounded-3xl p-8 border border-[#38332C] shadow-2xl">
                <h3 className="text-2xl font-heading font-bold text-[#F5F1EA] mb-2">Book This Service</h3>
                <p className="text-[#A8A093] mb-8">Secure your appointment today. No hidden fees, transparent pricing.</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start text-[#E6E1D8] font-medium">
                    <CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0 mt-0.5" />
                    {siteConfig.trustSignals.estimateBeforeWorkPolicy ? "Free estimate before work" : "Expert Technicians"}
                  </li>
                  <li className="flex items-start text-[#E6E1D8] font-medium">
                    <ShieldCheck className="w-5 h-5 text-accent mr-3 shrink-0 mt-0.5" />
                    {siteConfig.trustSignals.warrantyText}
                  </li>
                </ul>

                <Link href="/contact" className="w-full block text-center bg-accent text-[#1A1815] font-bold py-4 rounded-full transition-transform hover:scale-[1.02] hover:brightness-110 shadow-xl mb-4">
                  Request a Quote
                </Link>
                
                <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="w-full flex items-center justify-center text-center bg-[#2A2621] border border-[#38332C] text-[#F5F1EA] font-bold py-4 rounded-full transition-colors hover:bg-[#332E27]">
                  <Phone className="w-5 h-5 mr-2 text-accent" />
                  Call Us Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Before & After Section */}
      {service.beforeImage && service.afterImage && (
        <section className="py-24 bg-[#1A1815] text-[#F5F1EA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">Real Results</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-[#F5F1EA]">Before & After</h3>
            </div>
            <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-[#38332C]">
              <BeforeAfterSlider 
                beforeImage={service.beforeImage} 
                afterImage={service.afterImage} 
              />
            </div>
          </div>
        </section>
      )}

      {/* Process Steps for this specific service */}
      {service.processSteps && service.processSteps.length > 0 && (
        <ProcessTimeline steps={service.processSteps} />
      )}

      {/* Relevant Testimonial */}
      {specificTestimonial && (
        <section className="py-24 bg-[#1A1815] text-[#F5F1EA] border-t border-[#38332C]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">Client Experience</h2>
              <h3 className="text-4xl font-heading font-bold text-[#F5F1EA]">What They Say About This Service</h3>
            </div>
            
            <TiltCard>
              <div className="bg-[#24211D] p-10 rounded-3xl border border-[#38332C] shadow-2xl text-center relative overflow-hidden">
                {/* Decorative quote mark */}
                <div className="absolute top-4 left-4 text-9xl text-white/5 font-serif leading-none select-none">"</div>
                
                <div className="flex justify-center mb-6 relative z-10">
                  {[...Array(specificTestimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-6 h-6 text-accent fill-current mx-1" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-[#E6E1D8] font-medium italic mb-8 relative z-10 leading-relaxed">"{specificTestimonial.text}"</p>
                <div className="relative z-10">
                  <p className="font-bold text-lg text-[#F5F1EA] font-heading">{specificTestimonial.name}</p>
                  <p className="text-sm text-[#A8A093] font-medium">{specificTestimonial.date}</p>
                </div>
              </div>
            </TiltCard>
          </div>
        </section>
      )}

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-24 bg-[#1A1815]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">Have Questions?</h2>
              <h3 className="text-4xl font-heading font-bold text-[#F5F1EA]">Service FAQ</h3>
            </div>
            
            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <div key={index} className="bg-[#24211D] rounded-2xl p-6 md:p-8 border border-[#38332C] shadow-md">
                  <h4 className="text-xl font-bold font-heading text-[#F5F1EA] mb-3 flex items-start">
                    <span className="text-accent mr-3">Q:</span>
                    {faq.question}
                  </h4>
                  <p className="text-[#E6E1D8] leading-relaxed flex items-start">
                    <span className="text-secondary font-bold mr-3 opacity-0">A:</span>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trust Badges */}
      <div className="border-t border-[#38332C] bg-[#1A1815]">
        <TrustBadges signals={siteConfig.trustSignals} />
      </div>

      {/* Final Strong CTA */}
      <section className="py-24 bg-[#141210] text-[#F5F1EA] border-t border-[#38332C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#F5F1EA] mb-6">Ready to Transform Your Vehicle?</h2>
          <p className="text-xl text-[#A8A093] mb-10 leading-relaxed">
            Book your {service.name} appointment today and experience the {siteConfig.businessName} standard of perfection.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <MagneticButton>
              <Link href="/contact" className="px-8 py-4 rounded-full font-bold text-lg bg-accent text-[#1A1815] hover:brightness-110 transition-all block text-center shadow-xl">
                Book This Service
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
