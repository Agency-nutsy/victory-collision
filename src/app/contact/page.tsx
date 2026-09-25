import { siteConfig } from "@/config/site.config";
import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import BookingForm from "@/components/contact/BookingForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.businessName} to schedule your service.`,
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-0 bg-[#1A1815] text-[#F5F1EA]">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#F5F1EA] mb-4">Get An Instant Estimate</h1>
        <p className="text-xl text-[#A8A093] max-w-2xl mx-auto">
          Takes less than 30 seconds. Answer 3 quick questions and we'll text your quote.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#24211D] rounded-3xl shadow-2xl overflow-hidden border border-[#38332C]">
          
          {/* Contact Info Column */}
          <div className="p-10 lg:p-12 flex flex-col justify-between relative bg-[#1E1B17] border-b lg:border-b-0 lg:border-r border-[#38332C] text-[#F5F1EA]">
            <div className="relative z-10">
              <h2 className="text-3xl font-heading font-bold mb-8 text-[#F5F1EA]">Get In Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mt-1 mr-4 text-accent shrink-0" />
                  <div>
                    <p className="font-semibold text-lg text-[#F5F1EA]">Phone</p>
                    <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="hover:text-accent transition-colors text-[#A8A093]">{siteConfig.phone}</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 mt-1 mr-4 text-accent shrink-0" />
                  <div>
                    <p className="font-semibold text-lg text-[#F5F1EA]">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-accent transition-colors text-[#A8A093]">{siteConfig.email}</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mt-1 mr-4 text-accent shrink-0" />
                  <div>
                    <p className="font-semibold text-lg text-[#F5F1EA]">Location</p>
                    <p className="text-[#A8A093]">{siteConfig.address}<br/>{siteConfig.city}, {siteConfig.state} {siteConfig.zip}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 mt-1 mr-4 text-accent shrink-0" />
                  <div>
                    <p className="font-semibold text-lg text-[#F5F1EA]">Business Hours</p>
                    <p className="text-[#A8A093]">{siteConfig.hoursOfOperation}</p>
                  </div>
                </div>
              </div>

              {/* What Happens Next - Trust Block */}
              <div className="pt-8 border-t border-[#38332C]">
                <h3 className="text-xl font-bold font-heading mb-6 text-accent">What Happens Next?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <p className="text-[#D6D0C5] text-sm">We'll review your request and call you within 24 hours.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <p className="text-[#D6D0C5] text-sm">We'll provide a free, no-obligation customized estimate.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <p className="text-[#D6D0C5] text-sm">Book your slot and bring your car in for transformation.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="p-0 bg-[#24211D]">
            <BookingForm />
          </div>
        </div>
      </div>

      {/* Map Embed Section */}
      <section className="py-24 bg-[#141210] text-[#F5F1EA] border-y border-[#38332C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-[#F5F1EA]">Find Us</h2>
            <p className="text-xl text-[#A8A093] max-w-2xl mx-auto">
              Conveniently located in the heart of {siteConfig.city}. Drop by during business hours!
            </p>
          </div>
          <div className="w-full h-96 rounded-3xl overflow-hidden border border-[#38332C] shadow-2xl">
            {/* Generic Map Embed based on Config City/State */}
            <iframe 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              allowFullScreen 
              referrerPolicy="no-referrer-when-downgrade"
              src={siteConfig.googleMapsEmbedUrl}
              className="grayscale contrast-125 brightness-75 invert" // Invert map slightly to fit dark theme
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section specifically for Booking/Contact */}
      <section className="py-24 bg-[#1A1815]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">Before You Visit</h2>
            <h3 className="text-4xl font-heading font-bold text-[#F5F1EA]">Booking FAQ</h3>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "Do you accept walk-ins?", a: "To guarantee the highest quality of service, we operate by appointment only. However, feel free to call ahead to see if we have any same-day cancellations." },
              { q: "How far in advance should I book?", a: "We recommend booking at least 1-2 weeks in advance, especially during the spring and summer months when demand is highest." },
              { q: "Do I need to leave my car all day?", a: "It depends on the package. Basic packages take a few hours, while advanced corrections and coatings require 24-48 hours. We will give you an exact timeframe when booking." },
              { q: "Is there a waiting area?", a: "Yes! We have a comfortable, climate-controlled waiting area with complimentary Wi-Fi and refreshments for shorter services." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-[#24211D] border border-[#38332C] rounded-2xl p-6 shadow-md">
                <h4 className="text-xl font-bold font-heading text-[#F5F1EA] mb-3">{faq.q}</h4>
                <p className="text-[#E6E1D8] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
