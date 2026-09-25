import { siteConfig } from "@/config/site.config";
import { MapPin, Clock, Phone } from "lucide-react";

export default function LocationMap() {
  return (
    <section className="py-24 bg-[#1A1815] border-t border-[#38332C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info Side */}
          <div>
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">Visit Our Shop</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-[#F5F1EA] mb-8">
              Conveniently Located in New Hyde Park
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#24211D] border border-[#38332C] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-[#F5F1EA] mb-1">Address</h4>
                  <p className="text-[#A8A093]">2215 Jericho Tpke<br/>New Hyde Park, NY 11040</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#24211D] border border-[#38332C] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-[#F5F1EA] mb-1">Hours</h4>
                  <p className="text-[#A8A093]">Mon - Fri: 8:00 AM - 6:00 PM<br/>Sat: 8:00 AM - 2:00 PM<br/>Sun: Closed</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#24211D] border border-[#38332C] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-[#F5F1EA] mb-1">Contact</h4>
                  <p className="text-[#A8A093]">{siteConfig.phone}</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://maps.google.com/?q=2215+Jericho+Tpke,+New+Hyde+Park,+NY+11040" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#24211D] border border-[#38332C] text-[#F5F1EA] font-bold rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              Get Directions
            </a>
          </div>
          
          {/* Map Side */}
          <div className="rounded-2xl overflow-hidden border border-[#38332C] h-[500px] shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.1979929871576!2d-73.68449622359404!3d40.73566117138865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c262f3c3a4f665%3A0xb3cf5d3a5ef57134!2s2215%20Jericho%20Turnpike%2C%20New%20Hyde%20Park%2C%20NY%2011040!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
