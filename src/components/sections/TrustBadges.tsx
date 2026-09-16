"use client";

import { ShieldCheck, Award, CheckCircle, FileText } from "lucide-react";

interface TrustSignals {
  yearsInBusiness: number;
  aseCertified?: boolean;
  bbbRating: string;
  warrantyText: string;
  insuredAndBonded: boolean;
  estimateBeforeWorkPolicy: boolean;
}

export default function TrustBadges({ signals }: { signals: TrustSignals }) {
  if (!signals) return null;

  return (
    <section className="py-24 bg-[#1A1815]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#F5F1EA]">Why Choose Us</h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {signals.insuredAndBonded && (
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-[#24211D] flex items-center justify-center mb-6 border border-[#38332C] shadow-md text-accent">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold font-heading text-[#F5F1EA] mb-2">Insured & Bonded</h4>
              <p className="text-[#A8A093]">Full coverage and peace of mind while your vehicle is in our care.</p>
            </div>
          )}

          {signals.bbbRating && (
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-[#24211D] flex items-center justify-center mb-6 border border-[#38332C] shadow-md text-accent">
                <Award className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold font-heading text-[#F5F1EA] mb-2">{signals.bbbRating} BBB Rating</h4>
              <p className="text-[#A8A093]">Recognized for excellence and trustworthy business practices.</p>
            </div>
          )}

          {signals.warrantyText && (
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-[#24211D] flex items-center justify-center mb-6 border border-[#38332C] shadow-md text-accent">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold font-heading text-[#F5F1EA] mb-2">Satisfaction Guarantee</h4>
              <p className="text-[#A8A093]">{signals.warrantyText}</p>
            </div>
          )}

          {signals.estimateBeforeWorkPolicy && (
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-[#24211D] flex items-center justify-center mb-6 border border-[#38332C] shadow-md text-accent">
                <FileText className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold font-heading text-[#F5F1EA] mb-2">Upfront Pricing</h4>
              <p className="text-[#A8A093]">No surprises. You'll always know the cost before we start the work.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
