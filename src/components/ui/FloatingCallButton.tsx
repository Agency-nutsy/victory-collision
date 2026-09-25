"use client";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function FloatingCallButton() {
  const phoneNumber = siteConfig.phone.replace(/[^0-9]/g, "");
  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      <a
        href={`tel:${phoneNumber}`}
        className="flex items-center justify-center w-14 h-14 bg-accent text-[#1A1815] rounded-full shadow-2xl hover:scale-110 hover:brightness-110 transition-all duration-300 animate-pulse hover:animate-none group"
        title="Call Us Now"
      >
        <Phone className="w-6 h-6 fill-current group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
}
