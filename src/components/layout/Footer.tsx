import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#141210] text-[#D6D0C5] py-14 lg:py-18 mt-auto border-t border-[#38332C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-[#F5F1EA] mb-4">{siteConfig.businessName}</h2>
            <p className="text-sm text-[#A8A093] mb-6 max-w-sm leading-relaxed">{siteConfig.tagline}</p>
            <div className="flex space-x-4">
              {siteConfig.socialLinks.facebook && (
                <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-[#A8A093] hover:text-accent transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {siteConfig.socialLinks.instagram && (
                <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-[#A8A093] hover:text-accent transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {siteConfig.socialLinks.twitter && (
                <a href={siteConfig.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-[#A8A093] hover:text-accent transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-[#F5F1EA] mb-4">Our Services</h3>
            <ul className="space-y-3 text-sm">
              {siteConfig.services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-[#A8A093] hover:text-accent transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (NAP) */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-[#F5F1EA] mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-[#A8A093]">
                  {siteConfig.address}<br />
                  {siteConfig.city}, {siteConfig.state} {siteConfig.zip}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="text-[#A8A093] hover:text-accent transition-colors">{siteConfig.phone}</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-[#A8A093] hover:text-accent transition-colors">{siteConfig.email}</a>
              </li>
            </ul>
          </div>

          {/* Hours & Area */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-[#F5F1EA] mb-4">Hours & Service Area</h3>
            <div className="flex items-start mb-4 text-sm">
              <Clock className="w-5 h-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
              <span className="text-[#A8A093]">{siteConfig.hoursOfOperation}</span>
            </div>
            <div className="text-sm">
              <p className="font-semibold text-[#F5F1EA] mb-2">Serving:</p>
              <p className="text-[#A8A093]">{siteConfig.serviceArea.join(", ")}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#38332C] mt-12 pt-8 text-sm text-center flex flex-col md:flex-row justify-between items-center text-[#8E867A]">
          <p>&copy; {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Premium Auto Detailing Experience</p>
        </div>
      </div>
    </footer>
  );
}
