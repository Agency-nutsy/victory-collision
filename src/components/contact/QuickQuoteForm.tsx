"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { Check, ArrowRight, ArrowLeft, Phone, ShieldCheck } from "lucide-react";

interface StepOption {
  id: string;
  label: string;
  description?: string;
}

const SERVICE_OPTIONS: StepOption[] = [
  { id: "collision", label: "Collision Repair", description: "Bodywork, frame & structural" },
  { id: "dent_bumper", label: "Dent & Bumper", description: "Fender bender, ding, bumper repair" },
  { id: "paint", label: "Paint & Refinishing", description: "Color match, scratches, clear coat" },
  { id: "mechanical", label: "Auto Repair & Diagnostics", description: "Mechanical, brakes, suspension" },
  { id: "other", label: "Other / Free Inspection", description: "Not sure / general estimate" },
];

const SIZE_OPTIONS: StepOption[] = [
  { id: "small", label: "Small", description: "Minor scratch, door ding, spot touch-up" },
  { id: "medium", label: "Medium", description: "Bumper damage, single body panel" },
  { id: "large", label: "Large", description: "Major collision, multi-panel, structural" },
];

export default function QuickQuoteForm() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Format phone number nicely as user types (e.g. (516) 830-5997)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    let formatted = raw;
    if (raw.length > 0) {
      if (raw.length <= 3) {
        formatted = `(${raw}`;
      } else if (raw.length <= 6) {
        formatted = `(${raw.slice(0, 3)}) ${raw.slice(3)}`;
      } else {
        formatted = `(${raw.slice(0, 3)}) ${raw.slice(3, 6)}-${raw.slice(6, 10)}`;
      }
    }
    setPhone(formatted);
    if (error) setError("");
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedService(serviceId);
    setTimeout(() => {
      setStep(2);
    }, 180);
  };

  const handleSelectSize = (sizeId: string) => {
    setSelectedSize(sizeId);
    setTimeout(() => {
      setStep(3);
    }, 180);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanDigits = phone.replace(/\D/g, "");
    if (cleanDigits.length < 7) {
      setError("Please enter a valid phone number");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4);
    }, 600);
  };

  const handleReset = () => {
    setSelectedService("");
    setSelectedSize("");
    setPhone("");
    setError("");
    setStep(1);
  };

  return (
    <div className="w-full h-full min-h-[520px] flex flex-col justify-center items-center p-6 sm:p-10 md:p-12 bg-[#24211D] text-[#F5F1EA] select-none">
      <div className="w-full max-w-lg mx-auto flex flex-col items-center">
        
        {/* Top Tagline */}
        <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#A8A093] mb-4 text-center">
          One Question At A Time
        </p>

        {/* Step Indicator Text */}
        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#B8935F] mb-3 text-center">
          {step === 4 ? "All Set" : `Step ${step} of 3`}
        </p>

        {/* 3 Progress Dots */}
        <div className="flex items-center justify-center gap-2 mb-8" aria-hidden="true">
          {/* Dot 1 */}
          <span
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              step === 1
                ? "bg-accent scale-125 shadow-[0_0_8px_rgba(250,204,21,0.6)]"
                : "bg-emerald-500"
            }`}
          />
          {/* Dot 2 */}
          <span
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              step === 2
                ? "bg-accent scale-125 shadow-[0_0_8px_rgba(250,204,21,0.6)]"
                : step > 2
                ? "bg-emerald-500"
                : "bg-white/15"
            }`}
          />
          {/* Dot 3 */}
          <span
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              step === 3
                ? "bg-accent scale-125 shadow-[0_0_8px_rgba(250,204,21,0.6)]"
                : step === 4
                ? "bg-emerald-500"
                : "bg-white/15"
            }`}
          />
        </div>

        {/* ────────────────────────────────────────────────────────── */}
        {/* STEP 1: What do you need done? */}
        {/* ────────────────────────────────────────────────────────── */}
        {step === 1 && (
          <div className="w-full flex flex-col items-center animate-fadeIn">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center text-[#F5F1EA] mb-8 leading-snug">
              What do you need done?
            </h2>

            <div className="w-full flex flex-col gap-3">
              {SERVICE_OPTIONS.map((opt) => {
                const isSelected = selectedService === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelectService(opt.id)}
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-base sm:text-lg text-left transition-all duration-200 border flex items-center justify-between group active:scale-[0.99] ${
                      isSelected
                        ? "bg-accent text-[#1A1815] border-accent shadow-xl scale-[1.01]"
                        : "bg-[#2A2621] hover:bg-[#332E27] text-[#F5F1EA] border-[#38332C] hover:border-accent/40 shadow-md"
                    }`}
                  >
                    <div>
                      <div className="font-heading font-semibold">{opt.label}</div>
                      {opt.description && (
                        <div
                          className={`text-xs mt-0.5 font-normal ${
                            isSelected ? "text-[#1A1815]/80" : "text-[#A8A093]"
                          }`}
                        >
                          {opt.description}
                        </div>
                      )}
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                        isSelected ? "text-[#1A1815]" : "text-accent/60 group-hover:text-accent"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ────────────────────────────────────────────────────────── */}
        {/* STEP 2: How big, roughly? */}
        {/* ────────────────────────────────────────────────────────── */}
        {step === 2 && (
          <div className="w-full flex flex-col items-center animate-fadeIn">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center text-[#F5F1EA] mb-8 leading-snug">
              How big, roughly?
            </h2>

            <div className="w-full flex flex-col gap-3 mb-6">
              {SIZE_OPTIONS.map((opt) => {
                const isSelected = selectedSize === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelectSize(opt.id)}
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-base sm:text-lg text-left transition-all duration-200 border flex items-center justify-between group active:scale-[0.99] ${
                      isSelected
                        ? "bg-accent text-[#1A1815] border-accent shadow-xl scale-[1.01]"
                        : "bg-[#2A2621] hover:bg-[#332E27] text-[#F5F1EA] border-[#38332C] hover:border-accent/40 shadow-md"
                    }`}
                  >
                    <div>
                      <div className="font-heading font-semibold text-lg">{opt.label}</div>
                      {opt.description && (
                        <div
                          className={`text-xs mt-0.5 font-normal ${
                            isSelected ? "text-[#1A1815]/80" : "text-[#A8A093]"
                          }`}
                        >
                          {opt.description}
                        </div>
                      )}
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                        isSelected ? "text-[#1A1815]" : "text-accent/60 group-hover:text-accent"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Back button */}
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-sm font-semibold text-[#A8A093] hover:text-[#F5F1EA] transition-colors flex items-center gap-1.5 py-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Change service
            </button>
          </div>
        )}

        {/* ────────────────────────────────────────────────────────── */}
        {/* STEP 3: Where do we text it? */}
        {/* ────────────────────────────────────────────────────────── */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center animate-fadeIn">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center text-[#F5F1EA] mb-3 leading-snug">
              Where do we text it?
            </h2>
            <p className="text-sm text-[#A8A093] text-center mb-8 max-w-xs">
              We'll send your customized estimate straight to your phone.
            </p>

            <div className="w-full mb-4">
              <div className="relative">
                <input
                  type="tel"
                  autoFocus
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="(516) 000-0000"
                  className="w-full text-center text-2xl sm:text-3xl tracking-wide font-heading font-bold py-5 px-4 bg-[#2A2621] border-2 border-[#4A4237] focus:border-accent focus:ring-4 focus:ring-accent/20 rounded-2xl text-[#F5F1EA] placeholder-[#6E675D] outline-none transition-all shadow-inner"
                />
              </div>
              {error && (
                <p className="text-red-400 text-xs text-center mt-2 font-medium">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || phone.replace(/\D/g, "").length < 7}
              className="w-full py-4 px-8 rounded-2xl bg-accent text-[#1A1815] font-bold text-lg hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl flex items-center justify-center gap-2 mb-6"
            >
              {isSubmitting ? (
                <span>Generating your estimate...</span>
              ) : (
                <>
                  <span>Get My Instant Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-[#A8A093] mb-6">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Free • No obligation • No spam guarantee</span>
            </div>

            {/* Back button */}
            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-sm font-semibold text-[#A8A093] hover:text-[#F5F1EA] transition-colors flex items-center gap-1.5 py-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </form>
        )}

        {/* ────────────────────────────────────────────────────────── */}
        {/* STEP 4: Done — quote on its way. */}
        {/* ────────────────────────────────────────────────────────── */}
        {step === 4 && (
          <div className="w-full flex flex-col items-center text-center animate-fadeIn py-4">
            {/* Big Green Check Circle */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-[0_0_32px_rgba(16,185,129,0.4)] mb-6 animate-scaleIn">
              <Check className="w-10 h-10 sm:w-12 sm:h-12 stroke-[3]" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F5F1EA] mb-3">
              Done — quote on its way.
            </h2>

            <p className="text-base text-[#D6D0C5] mb-2 max-w-sm">
              We received your request! A specialist is preparing your estimate now.
            </p>

            {phone && (
              <p className="text-sm text-accent font-semibold mb-8">
                Sending details to {phone}
              </p>
            )}

            <div className="w-full pt-6 border-t border-[#38332C] flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#2A2621] hover:bg-[#332E27] border border-[#38332C] text-[#F5F1EA] font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>Need immediate help? Call {siteConfig.phone}</span>
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-[#A8A093] hover:text-accent font-medium underline py-2 transition-colors"
              >
                Start another estimate
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
