"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-[#1A1815]/95 backdrop-blur-md border-b border-[#38332C]/60 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 font-heading font-bold text-lg sm:text-xl md:text-2xl text-[#F5F1EA]">
              {siteConfig.logoUrl && (
                <img
                  src={siteConfig.logoUrl}
                  alt={siteConfig.businessName}
                  className="h-9 w-9 sm:h-10 sm:w-10 object-contain drop-shadow"
                />
              )}
              <span className="truncate max-w-[220px] sm:max-w-none">{siteConfig.businessName}</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#D6D0C5] hover:text-accent transition-colors duration-medium ease-premium font-medium active:scale-[0.98]">Home</Link>
            <div className="group relative">
              <Link href="/services" className="text-[#D6D0C5] hover:text-accent transition-colors duration-medium ease-premium font-medium cursor-pointer active:scale-[0.98] inline-block py-2">Services</Link>
              <div className="absolute top-full left-0 hidden group-hover:block w-56 bg-[#24211D] border border-[#38332C] shadow-2xl py-2 rounded-xl">
                {siteConfig.services.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="block px-4 py-2.5 text-sm text-[#D6D0C5] hover:bg-[#2E2A24] hover:text-accent transition-colors">
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/gallery" className="text-[#D6D0C5] hover:text-accent transition-colors duration-medium ease-premium font-medium active:scale-[0.98]">Gallery</Link>
            <Link href="/about" className="text-[#D6D0C5] hover:text-accent transition-colors duration-medium ease-premium font-medium active:scale-[0.98]">About</Link>
            <Link href="/contact" className="text-[#D6D0C5] hover:text-accent transition-colors duration-medium ease-premium font-medium active:scale-[0.98]">Contact</Link>
          </div>

          {/* CTA & Phone */}
          <div className="hidden md:flex items-center space-x-5">
            <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="flex items-center text-[#D6D0C5] font-bold hover:text-accent transition-colors duration-medium ease-premium active:scale-[0.98]">
              <Phone className="w-5 h-5 mr-2 text-accent" />
              {siteConfig.phone}
            </a>
            <Link href="/contact" className="px-6 py-2.5 rounded-full text-[#1A1815] font-bold transition-all duration-medium ease-premium hover:scale-105 active:scale-[0.98] bg-accent hover:brightness-110 shadow-md">
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#D6D0C5] hover:text-accent focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1A1815] border-t border-[#38332C] absolute w-full shadow-2xl">
          <div className="px-4 pt-3 pb-6 space-y-2">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#F5F1EA] hover:text-accent transition-colors rounded-md">Home</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#F5F1EA] hover:text-accent transition-colors rounded-md">Services Overview</Link>
            {siteConfig.services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} onClick={() => setIsOpen(false)} className="block pl-6 pr-3 py-1.5 text-sm font-medium text-[#A8A093] hover:text-accent transition-colors rounded-md">
                - {service.name}
              </Link>
            ))}
            <Link href="/gallery" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#F5F1EA] hover:text-accent transition-colors rounded-md">Gallery</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#F5F1EA] hover:text-accent transition-colors rounded-md">About</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#F5F1EA] hover:text-accent transition-colors rounded-md">Contact</Link>
            
            <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="block px-4 py-3.5 text-center text-[#1A1815] font-bold rounded-xl mt-4 transition-transform active:scale-[0.98] bg-accent shadow-md">
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
