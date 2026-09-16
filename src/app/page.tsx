import Hero from "@/components/sections/Hero";
import { siteConfig } from "@/config/site.config";
import Link from "next/link";
import { ShieldCheck, Star, Award, CheckCircle } from "lucide-react";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import TiltCard from "@/components/animations/TiltCard";
import MagneticButton from "@/components/animations/MagneticButton";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import PricingTable from "@/components/sections/PricingTable";
import TrustBadges from "@/components/sections/TrustBadges";
import ReviewSummary from "@/components/sections/ReviewSummary";
import FeaturedTransformationSection from "@/components/sections/FeaturedTransformationSection";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Services Overview */}
      <section className="py-24 bg-[#1A1815]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#F5F1EA] mb-4">Our Services</h2>
            <p className="text-xl text-[#A8A093] max-w-2xl mx-auto">
              Professional, high-quality automotive care tailored to your vehicle's needs.
            </p>
          </div>
          
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

      <TrustBadges signals={siteConfig.trustSignals} />

      {/* Before/After Showcase */}
      <section className="py-24 bg-[#1A1815] border-b border-[#38332C] overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#F5F1EA] mb-4">See the Difference</h2>
            <p className="text-xl text-[#A8A093] max-w-2xl mx-auto">
              Swipe the slider to see how our premium detailing transforms vehicles.
            </p>
          </div>
          <div className="shadow-2xl rounded-2xl">
            <BeforeAfterSlider 
              beforeImage={siteConfig.galleryImages[0]?.beforeUrl || "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80"}
              afterImage={siteConfig.galleryImages[0]?.afterUrl || "https://images.unsplash.com/photo-1600049449015-772c72b226e6?auto=format&fit=crop&q=80"}
              beforeLabel="Before"
              afterLabel="After"
            />
          </div>
        </div>
      </section>

      <ProcessTimeline steps={siteConfig.processSteps || []} />

      {/* Featured Transformation Case Study removed per user request */}

      <PricingTable packages={siteConfig.pricingPackages || []} />

      {/* Testimonials */}
      <section className="py-24 bg-[#1A1815] text-[#F5F1EA] relative z-50">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {siteConfig.testimonials.map((testimonial, i) => (
              <TiltCard key={i}>
                <div className="bg-[#24211D] p-8 rounded-2xl border border-[#38332C] hover:border-accent/30 transition-colors h-full flex flex-col shadow-lg">
                  <div className="flex items-center mb-4 space-x-1">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-[#E6E1D8] italic mb-6 leading-relaxed flex-grow">"{testimonial.text}"</p>
                  <div className="mt-auto">
                    <p className="font-bold text-[#F5F1EA] font-heading">{testimonial.name}</p>
                    <p className="text-sm text-[#A8A093]">{testimonial.service} • {new Date(testimonial.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative z-50 bg-[#141210] border-t border-[#38332C]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold text-[#F5F1EA] mb-6">Ready to get started?</h2>
          <p className="text-xl text-[#A8A093] mb-10">
            Book your appointment today or give us a call for a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <MagneticButton>
              <Link href="/contact" className="px-8 py-4 bg-accent text-[#1A1815] rounded-full font-bold text-lg transition-all hover:brightness-110 shadow-xl w-full sm:w-auto block">
                Get a Free Quote
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="px-8 py-4 border-2 border-[#F5F1EA]/30 text-[#F5F1EA] rounded-full font-bold text-lg hover:bg-white/10 transition-colors w-full sm:w-auto block">
                Call {siteConfig.phone}
              </a>
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
