import { SiteConfig } from '../types';

export const mechanicConfig: SiteConfig = {
  businessName: "Reliable Auto Repair",
  tagline: "Honest diagnostics. Expert repairs. Back on the road.",
  logoUrl: "/images/logo-mechanic.png",
  phone: "(555) 987-6543",
  email: "service@reliableautorepair.com",
  address: "456 Main Street",
  city: "Austin",
  state: "TX",
  zip: "78701",
  serviceArea: ["Austin", "Round Rock", "Cedar Park"],
  hoursOfOperation: "Mon-Fri: 7:30am - 5:30pm",
  
  brandColors: {
    primary: "#b91c1c", // red-700 (trust, urgency, automotive)
    secondary: "#1f2937", // gray-800
    accent: "#facc15", // yellow-400
  },
  
  heroImage: "/images/hero-mercedes.png",
  heroImageAlt: "Auto mechanic working on an engine in a professional shop",
  heroVideoUrl: "/videos/hero.mp4",
  heroVideoFallback: "/videos/hero.mp4",
  heroAnimationMode: 'repair',
  
  galleryImages: [], // Less relevant for mechanics, maybe before/after engine rebuilds
  
  teamMembers: [
    {
      name: "David Smith",
      photo: "/images/team/david.jpg",
      role: "Master Technician",
      certifications: ["ASE Master Certified", "Toyota Master Tech"]
    }
  ],
  
  services: [
    {
      slug: "brake-repair",
      name: "Brake Repair & Replacement",
      shortDescription: "Stop safely. Full inspection, pad replacement, and rotor resurfacing.",
      longDescription: "Your safety is our priority. We use premium OEM or equivalent brake pads and rotors for quiet, confident stopping power.",
      priceRange: "Starting at $199 per axle",
      image: "/images/services/brakes.jpg",
      faqs: [
        { question: "How do I know if I need new brakes?", answer: "Squeaking, grinding, or a pulsating pedal are common signs." }
      ]
    },
    {
      slug: "check-engine-light",
      name: "Check Engine Light Diagnostics",
      shortDescription: "Advanced computer diagnostics to pinpoint the exact issue.",
      longDescription: "We don't just guess. We plug in state-of-the-art diagnostic tools to read the codes and visually inspect the components before recommending any repairs.",
      priceRange: "$95 Diagnostic Fee",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
      faqs: [
        { question: "Will the diagnostic fee apply to the repair?", answer: "Yes, if you choose to proceed with the repair, we waive the diagnostic fee." }
      ]
    }
  ],
  
  trustSignals: {
    yearsInBusiness: 25,
    aseCertified: true,
    bbbRating: "A+",
    warrantyText: "24-Month / 24,000-Mile Nationwide Warranty on all repairs.",
    insuredAndBonded: true,
    estimateBeforeWorkPolicy: true,
  },
  
  testimonials: [
    {
      name: "John D.",
      rating: 5,
      text: "Only mechanic I trust. They showed me exactly what was wrong and gave me a fair price before starting.",
      date: "2023-09-22",
      service: "Brake Repair"
    }
  ],
  
  googleReviewLink: "https://g.page/review/example2",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=...", // placeholder
  
  socialLinks: {
    facebook: "https://facebook.com/reliableautorepair"
  },
  
  blogPosts: []
};
