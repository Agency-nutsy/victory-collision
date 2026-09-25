import { SiteConfig } from '../types';

/*
 * TODO FOR BUSINESS OWNER:
 * 1. Confirm hoursOfOperation
 * 2. Provide a real Google Review Link (googleReviewLink)
 * 3. Provide a real Google Maps Embed URL (googleMapsEmbedUrl)
 * 4. Provide Team Member details (names, roles, photos)
 * 5. Provide real Testimonials from Google Reviews
 * 6. Provide Gallery Images (Before/After photos)
 * 7. Provide Logo image file (replace /images/logo-placeholder.png)
 * 8. Provide specific Pricing (currently using "Free Estimate" or "Call for quote")
 * 9. Provide Hero image/video and Service photos if desired
 */

export const victoryCollisionConfig: SiteConfig = {
  businessName: "Victory Collision & Auto Repair",
  tagline: "Expert Collision & Auto Repair.",
  logoUrl: "/images/logo-placeholder.png", // TODO: Need real logo
  phone: "(516) 830-5997",
  email: "info@victorycollision.com", // Placeholder
  address: "2215 Jericho Tpke",
  city: "New Hyde Park",
  state: "NY",
  zip: "11040",
  serviceArea: ["New Hyde Park", "Floral Park", "Garden City Park", "Mineola"],
  hoursOfOperation: "Mon-Fri: 8:00am - 6:00pm, Sat: 9:00am - 2:00pm", // TODO: Confirm with owner
  
  brandColors: {
    primary: "#1A1815", // dark-grey
    secondary: "#A8A093", // gray text
    accent: "#facc15", // yellow-400
  },
  
  heroImage: "https://images.unsplash.com/photo-1599256621730-535171e28f32?w=1600&q=80", // Placeholder Unsplash
  heroImageAlt: "Auto mechanic working on an engine in a professional shop",
  heroAnimationMode: 'repair',
  
  googleRating: 5.0,
  googleReviewCount: 10,
  googleReviewLink: "#TODO-GOOGLE-REVIEW-LINK", // TODO
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.005269421564!2d-73.66863612372804!3d40.73990957138948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c263e517220309%3A0xd745a293f6023a5b!2sVictory%20Collision%20%26%20Auto%20Repair!5e0!3m2!1sen!2sin!4v1790332604421!5m2!1sen!2sin",
  
  trustSignals: {
    yearsInBusiness: 1, // TODO: Confirm years in business
    aseCertified: true,
    bbbRating: "A+",
    warrantyText: "Quality warranty on collision bodywork and paint.",
    insuredAndBonded: true,
    estimateBeforeWorkPolicy: true,
  },
  
  services: [
    {
      slug: "collision-repair",
      name: "Collision Repair",
      shortDescription: "Full-service auto body and collision repair to get your vehicle back to factory condition.",
      longDescription: "From minor fender benders to major collision damage, our expert technicians use advanced tools and techniques to restore the structural integrity and appearance of your vehicle.",
      priceRange: "Free Estimate",
      image: "/images/gallery/collison repair.jpg",
      faqs: [
        { question: "Do you work with my insurance company?", answer: "Yes, we work directly with all major insurance companies to handle your claim efficiently." },
        { question: "How long will the repair take?", answer: "Repair times vary based on the extent of damage and parts availability. We will provide an estimated timeline with your free quote." }
      ]
    },
    {
      slug: "dent-bumper-repair",
      name: "Dent & Bumper Repair",
      shortDescription: "Fast, seamless repairs for dents, dings, and cracked bumpers.",
      longDescription: "Whether it's a parking lot ding or a cracked bumper, we offer paintless dent repair and expert plastic welding/refinishing to make your car look flawless again.",
      priceRange: "Free Estimate",
      image: "/images/gallery/dent bumper repair.jpg",
      faqs: [
        { question: "Can you fix a plastic bumper?", answer: "Yes, we specialize in repairing and refinishing plastic bumpers without having to replace the entire part when possible." }
      ]
    },
    {
      slug: "paint-matching-refinishing",
      name: "Paint Matching & Refinishing",
      shortDescription: "Computerized color matching for a flawless finish.",
      longDescription: "We utilize advanced computerized paint matching systems to ensure the new paint blends perfectly with your vehicle's original color, followed by professional clear coating for lasting durability.",
      priceRange: "Call for quote",
      image: "/images/gallery/paint matchijng.jpg",
      faqs: [
        { question: "Will the new paint match exactly?", answer: "Absolutely. Our computerized color matching technology ensures a seamless blend with your existing paint." }
      ]
    },
    {
      slug: "general-auto-repair",
      name: "General Auto Repair & Diagnostics",
      shortDescription: "Comprehensive mechanical repair and computer diagnostics.",
      longDescription: "Beyond bodywork, our shop offers full mechanical services. From check engine lights and brake replacements to suspension repairs, we ensure your vehicle is safe and running smoothly.",
      priceRange: "Call for quote",
      image: "/images/gallery/diagnostics.jpg",
      faqs: [
        { question: "Do you do mechanical work as well as body work?", answer: "Yes! We are a full-service shop equipped to handle both collision repair and general mechanical diagnostics/repairs." }
      ]
    }
  ],
  
  galleryImages: [
    {
      afterUrl: "/images/gallery/Move Over.mp4",
      alt: "Move Over Restoration Video"
    },
    {
      afterUrl: "/images/gallery/🚨🚀🚨.mp4",
      alt: "Emergency Repair Action"
    },
    {
      afterUrl: "/images/gallery/1.webp",
      alt: "Repair Process"
    },
    {
      afterUrl: "/images/gallery/2.webp",
      alt: "Collision Repair"
    },
    {
      afterUrl: "/images/gallery/3.webp",
      alt: "Auto Body Work"
    },
    {
      afterUrl: "/images/gallery/4.webp",
      alt: "Paint Job"
    },
    {
      afterUrl: "/images/gallery/5.webp",
      alt: "Final Detailing"
    },
    {
      afterUrl: "/images/gallery/6.webp",
      alt: "Completed Repair"
    },
    {
      beforeUrl: "/images/gallery/ceramic-before.png",
      afterUrl: "/images/gallery/ceramic-after.png",
      alt: "Ceramic Coating Before and After"
    },
    {
      beforeUrl: "/images/gallery/home-before.jpg",
      afterUrl: "/images/gallery/home-after.jpg",
      alt: "Exterior Transformation"
    },
    {
      beforeUrl: "/images/gallery/interior-before.jpg",
      afterUrl: "/images/gallery/interior-after.jpg",
      alt: "Interior Restoration"
    },
    {
      beforeUrl: "/images/gallery/paint-correction-before.jpg",
      afterUrl: "/images/gallery/paint-correction-after.jpg",
      alt: "Paint Correction"
    },
    {
      afterUrl: "/images/gallery/Move Over (1).jpg",
      alt: "Move Over Result 1"
    },
    {
      afterUrl: "/images/gallery/Move Over (2).jpg",
      alt: "Move Over Result 2"
    },
    {
      afterUrl: "/images/gallery/Move Over.jpg",
      alt: "Move Over Final"
    },
    {
      afterUrl: "/images/gallery/🚨🚀🚨.jpg",
      alt: "Rapid Response Repair"
    },
    {
      afterUrl: "/images/gallery/🚨🚀🚨 (1).jpg",
      alt: "Rapid Response Final"
    }
  ],
  teamMembers: [
    {
      name: "Mike Johnson",
      photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80",
      role: "Lead Technician",
      certifications: ["ASE Certified Master Tech"]
    }
  ],
  testimonials: [
    {
      name: "Sarah T.",
      rating: 5,
      text: "Victory Collision did an amazing job fixing my car after a fender bender. It looks brand new! Highly recommend them.",
      date: "2024-05-12",
      service: "Collision Repair"
    },
    {
      name: "James D.",
      rating: 5,
      text: "Fast, professional, and honest. They handled my insurance claim and made the whole process stress-free.",
      date: "2024-03-28",
      service: "Dent Repair"
    },
    {
      name: "Michael R.",
      rating: 5,
      text: "The paint matching is absolutely flawless. You can't even tell where the damage was. True professionals.",
      date: "2024-06-15",
      service: "Paint & Refinish"
    },
    {
      name: "Jessica W.",
      rating: 5,
      text: "They detailed my SUV inside and out, and it looks like it just rolled off the showroom floor. Incredible attention to detail.",
      date: "2024-07-02",
      service: "Auto Detailing"
    },
    {
      name: "David L.",
      rating: 5,
      text: "Honest pricing and they delivered my car exactly when they promised. Hard to find a trustworthy shop like this.",
      date: "2024-08-20",
      service: "Collision Repair"
    },
    {
      name: "Amanda K.",
      rating: 5,
      text: "My bumper was completely cracked, and they fixed it in record time. The customer service is top-notch.",
      date: "2024-09-10",
      service: "Bumper Repair"
    }
  ],
  processSteps: [
    { step: "01", title: "Estimate & Approval", description: "Free estimate with direct insurance coordination. We handle the paperwork so you don't have to.", icon: "ClipboardList", videoUrl: "/videos/intake.mp4", posterUrl: "/images/gallery/home-before.jpg" },
    { step: "02", title: "Disassembly & Repair", description: "Expert disassembly and structural repair to restore your vehicle's integrity.", icon: "Shield", videoUrl: "/videos/prep.mp4", posterUrl: "/images/gallery/paint-correction-before.jpg" },
    { step: "03", title: "Paint & Refinish", description: "Computerized color matching for a flawless factory-perfect finish.", icon: "Sparkles", videoUrl: "/videos/refine.mp4", posterUrl: "/images/gallery/paint-correction-after.jpg" },
    { step: "04", title: "Final Inspection", description: "Rigorous quality check on every panel before your vehicle is returned to you.", icon: "CheckCircle", videoUrl: "/videos/hero.mp4", posterUrl: "/images/hero-mercedes.png" },
  ],
  pricingPackages: [
    {
      name: "Minor Dent Repair",
      price: "Starting at $150",
      features: ["Paintless Dent Repair (PDR)", "Same-Day Service", "No Paint Required", "Lifetime Warranty"]
    },
    {
      name: "Bumper Replacement",
      price: "Call for Quote",
      isPopular: true,
      features: ["OEM or Aftermarket Parts", "Computerized Paint Matching", "Seamless Installation", "Insurance Assistance"]
    },
    {
      name: "Full Collision Repair",
      price: "Free Estimate",
      features: ["Frame Straightening", "Complete Body Work", "Custom Paint Matching", "Direct Insurance Billing"]
    }
  ],
  socialLinks: {},
  blogPosts: []
};
