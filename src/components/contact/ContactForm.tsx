"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site.config";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#24211D] border border-accent/40 text-[#F5F1EA] rounded-2xl p-8 text-center shadow-xl">
        <h3 className="text-2xl font-bold mb-2 text-[#F5F1EA]">Quote Request Sent!</h3>
        <p className="text-[#A8A093]">Thank you for reaching out. We will get back to you shortly.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-accent underline font-medium hover:brightness-110"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#D6D0C5] mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full bg-[#2A2621] border border-[#4A4237] rounded-xl px-4 py-3.5 text-[#F5F1EA] placeholder-[#8E867A] focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all shadow-inner"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[#D6D0C5] mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            required
            className="w-full bg-[#2A2621] border border-[#4A4237] rounded-xl px-4 py-3.5 text-[#F5F1EA] placeholder-[#8E867A] focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all shadow-inner"
            placeholder="(555) 000-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-[#D6D0C5] mb-1.5">
          Service Needed
        </label>
        <select
          id="service"
          required
          className="w-full bg-[#2A2621] border border-[#4A4237] rounded-xl px-4 py-3.5 text-[#F5F1EA] focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all shadow-inner"
        >
          <option value="" className="bg-[#24211D] text-[#8E867A]">Select a service...</option>
          {siteConfig.services.map((s) => (
            <option key={s.slug} value={s.slug} className="bg-[#24211D] text-[#F5F1EA]">
              {s.name}
            </option>
          ))}
          <option value="other" className="bg-[#24211D] text-[#F5F1EA]">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="vehicle" className="block text-sm font-semibold text-[#D6D0C5] mb-1.5">
          Vehicle Make & Model
        </label>
        <input
          type="text"
          id="vehicle"
          className="w-full bg-[#2A2621] border border-[#4A4237] rounded-xl px-4 py-3.5 text-[#F5F1EA] placeholder-[#8E867A] focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all shadow-inner"
          placeholder="e.g. 2020 Ford F-150"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#D6D0C5] mb-1.5">
          Additional Details
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full bg-[#2A2621] border border-[#4A4237] rounded-xl px-4 py-3.5 text-[#F5F1EA] placeholder-[#8E867A] focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all shadow-inner resize-none"
          placeholder="How can we help you?"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-accent text-[#1A1815] font-bold py-4 rounded-xl transition-all hover:brightness-110 active:scale-[0.98] shadow-xl cursor-pointer text-lg"
      >
        Send Request
      </button>
    </form>
  );
}
