"use client";

import { useState } from "react";
import MagneticButton from "../animations/MagneticButton";
import { Calendar, Clock, Car, User, Mail, Phone, MessageSquare } from "lucide-react";

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-[#24211D] p-12 rounded-3xl shadow-2xl border border-accent/40 text-center">
        <div className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-3xl font-heading font-bold text-[#F5F1EA] mb-4">Request Received</h3>
        <p className="text-[#A8A093] mb-8">We'll review your preferred time and contact you shortly to confirm your appointment.</p>
        <button onClick={() => setSubmitted(false)} className="text-accent font-bold underline hover:brightness-110">Book another vehicle</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#24211D] p-8 md:p-12 rounded-3xl shadow-2xl border border-[#38332C]">
      <div className="mb-8 border-b border-[#38332C] pb-8">
        <h3 className="text-2xl font-heading font-bold text-[#F5F1EA] mb-6 flex items-center gap-3">
          <Calendar className="w-6 h-6 text-accent" />
          Preferred Schedule
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-[#D6D0C5] mb-2">Date</label>
            <div className="relative">
              <input 
                type="date" 
                required
                className="w-full px-4 py-3.5 bg-[#2A2621] border border-[#4A4237] rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all text-[#F5F1EA]"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#D6D0C5] mb-2">Time</label>
            <div className="relative">
              <input 
                type="time" 
                required
                className="w-full px-4 py-3.5 bg-[#2A2621] border border-[#4A4237] rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all text-[#F5F1EA]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8 border-b border-[#38332C] pb-8">
        <h3 className="text-2xl font-heading font-bold text-[#F5F1EA] mb-6 flex items-center gap-3">
          <Car className="w-6 h-6 text-accent" />
          Vehicle Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-[#D6D0C5] mb-2">Make / Model / Year</label>
            <input 
              type="text" 
              placeholder="e.g. 2022 Porsche 911"
              required
              className="w-full px-4 py-3.5 bg-[#2A2621] border border-[#4A4237] rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all text-[#F5F1EA] placeholder-[#8E867A]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#D6D0C5] mb-2">Service Type</label>
            <select 
              required
              className="w-full px-4 py-3.5 bg-[#2A2621] border border-[#4A4237] rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all text-[#F5F1EA]"
            >
              <option value="" className="bg-[#24211D] text-[#8E867A]">Select a service...</option>
              <option value="basic" className="bg-[#24211D] text-[#F5F1EA]">Basic Detail</option>
              <option value="premium" className="bg-[#24211D] text-[#F5F1EA]">Premium Detail</option>
              <option value="ultimate" className="bg-[#24211D] text-[#F5F1EA]">Ultimate Detail / Ceramic</option>
              <option value="other" className="bg-[#24211D] text-[#F5F1EA]">Not Sure / Other</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-heading font-bold text-[#F5F1EA] mb-6 flex items-center gap-3">
          <User className="w-6 h-6 text-accent" />
          Contact Info
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-[#D6D0C5] mb-2">Full Name</label>
            <div className="relative">
              <input type="text" required className="w-full px-4 py-3.5 pl-11 bg-[#2A2621] border border-[#4A4237] rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all text-[#F5F1EA] placeholder-[#8E867A]" placeholder="John Doe" />
              <User className="w-5 h-5 text-accent absolute left-4 top-4" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#D6D0C5] mb-2">Phone Number</label>
            <div className="relative">
              <input type="tel" required className="w-full px-4 py-3.5 pl-11 bg-[#2A2621] border border-[#4A4237] rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all text-[#F5F1EA] placeholder-[#8E867A]" placeholder="(555) 000-0000" />
              <Phone className="w-5 h-5 text-accent absolute left-4 top-4" />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-semibold text-[#D6D0C5] mb-2">Email Address</label>
          <div className="relative">
            <input type="email" required className="w-full px-4 py-3.5 pl-11 bg-[#2A2621] border border-[#4A4237] rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all text-[#F5F1EA] placeholder-[#8E867A]" placeholder="john@example.com" />
            <Mail className="w-5 h-5 text-accent absolute left-4 top-4" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#D6D0C5] mb-2">Additional Notes (Optional)</label>
          <div className="relative">
            <textarea rows={3} className="w-full px-4 py-3.5 pl-11 bg-[#2A2621] border border-[#4A4237] rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition-all text-[#F5F1EA] placeholder-[#8E867A] resize-none" placeholder="Any specific areas of concern or questions..."></textarea>
            <MessageSquare className="w-5 h-5 text-accent absolute left-4 top-4" />
          </div>
        </div>
      </div>

      <MagneticButton className="w-full">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-accent text-[#1A1815] py-5 rounded-2xl font-bold text-lg hover:brightness-110 transition-all disabled:opacity-70 flex justify-center items-center shadow-xl cursor-pointer"
        >
          {isSubmitting ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#1A1815]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          ) : "Request Appointment"}
        </button>
      </MagneticButton>
    </form>
  );
}
