import { SiteConfig } from '../types';

export const detailingConfig: SiteConfig = {
  businessName: "Elite Auto Detail",
  tagline: "Perfection in every pixel and polish.",
  logoUrl: "/images/logo-detailing.png",
  phone: "(555) 123-4567",
  email: "hello@eliteautodetail.com",
  address: "123 Shine Avenue",
  city: "Los Angeles",
  state: "CA",
  zip: "90001",
  serviceArea: ["Los Angeles", "Santa Monica", "Beverly Hills", "Glendale"],
  hoursOfOperation: "Mon-Fri: 8am - 6pm, Sat: 9am - 4pm",
  
  fonts: {
    heading: "Outfit",
    body: "Inter",
  },
  
  brandColors: {
    primary: "#1A1815",
    secondary: "#A8A093",
    accent: "#B8935F",
    neutralBase: "#F5F1EA"
  },
  
  heroImage: "/images/hero-mercedes.png",
  heroImageAlt: "Premium dark sports car detailing showcase",
  heroVideoUrl: "/videos/hero.mp4",
  heroVideoFallback: "/videos/hero.mp4",
  heroAnimationMode: 'detailing',
  
  galleryImages: [
    {
      beforeUrl: "/images/gallery/home-before.jpg",
      afterUrl: "/images/gallery/home-after.jpg",
      alt: "Car Detailing Before and After"
    }
  ],
  
  teamMembers: [
    {
      name: "Marcus Johnson",
      photo: "/images/team/marcus.jpg",
      role: "Lead Detailer",
      certifications: ["IDA Certified", "Ceramic Pro Installer"]
    }
  ],
  
  services: [
    {
      slug: "ceramic-coating",
      name: "Ceramic Coating",
      shortDescription: "Long-lasting protection and extreme gloss for your vehicle's exterior.",
      longDescription: "Our premium ceramic coating packages offer years of protection against UV rays, chemical stains, and etching. Unlike traditional waxes that wash away in a few months, ceramic coatings bond at a molecular level to your clear coat, creating a semi-permanent sacrificial layer.\n\nNot only does it provide a candy-like gloss, but it also makes your car incredibly easy to wash. Dirt, mud, and grime have a much harder time sticking to the hydrophobic surface, meaning your car stays cleaner, longer.",
      priceRange: "$800 - $1,500+",
      image: "/images/services/ceramic-coating.jpg",
      serviceIncludes: [
        "Thorough Hand Wash & Decontamination",
        "Chemical Iron Removal",
        "Clay Bar Treatment",
        "1-Step or Multi-Step Paint Correction",
        "Surface Panel Wipe Down",
        "Application of 9H Ceramic Coating",
        "Trim and Plastic Dressing",
        "Tire and Wheel Face Coating"
      ],
      beforeImage: "/images/gallery/ceramic-before.png",
      afterImage: "/images/gallery/ceramic-after.png",
      processSteps: [
        { step: "01", title: "Decontamination", description: "We strip old waxes, remove iron deposits, and clay the surface to ensure it is completely bare.", icon: "droplets", videoUrl: "/videos/decontamination.mp4", posterUrl: "/images/gallery/ceramic-before.png" },
        { step: "02", title: "Paint Correction", description: "We machine polish the paint to remove swirls and scratches, creating a flawless canvas.", icon: "sparkles", videoUrl: "/videos/paint-correction.mp4", posterUrl: "/images/gallery/paint-correction-before.jpg" },
        { step: "03", title: "Coating Application", description: "The coating is meticulously hand-applied panel by panel and allowed to flash before leveling.", icon: "shield", videoUrl: "/videos/coating-application.mp4", posterUrl: "/images/gallery/paint-correction-after.jpg" },
        { step: "04", title: "Curing", description: "The vehicle remains in our climate-controlled shop to cure properly before it hits the road.", icon: "clock", videoUrl: "/videos/curing.mp4", posterUrl: "/images/gallery/ceramic-after.png" }
      ],
      faqs: [
        { question: "How long does ceramic coating last?", answer: "With proper maintenance, our coatings last between 2 to 5 years depending on the package you choose and how often the vehicle is driven." },
        { question: "Can I wash my car normally?", answer: "We recommend pH-neutral soaps and two-bucket wash methods. Avoid automatic car washes with harsh brushes, as they will degrade the coating." },
        { question: "Does this prevent rock chips?", answer: "No. Ceramic coating protects against chemicals, UV rays, and light micro-marring, but it does not prevent rock chips. For rock chip protection, you need Paint Protection Film (PPF)." },
        { question: "Do I ever need to wax my car again?", answer: "No! The ceramic coating replaces the need for wax entirely. Applying wax over a ceramic coating actually masks its hydrophobic properties." }
      ]
    },
    {
      slug: "interior-detailing",
      name: "Deep Interior Detailing",
      shortDescription: "Complete interior reset, from steam cleaning to leather conditioning.",
      longDescription: "We clean, sanitize, and protect every surface of your interior. Say goodbye to stains, odors, and dust. We don't just wipe things down; we use compressed air, steam, and hot water extraction to pull years of grime out of the upholstery.\n\nWhether you're preparing to sell your vehicle or just want to feel that 'new car' cleanliness again, our Deep Interior Detailing package is designed to reset your cabin back to factory condition.",
      priceRange: "$150 - $350",
      image: "/images/services/interior-detailing.jpg",
      serviceIncludes: [
        "Deep Vacuum of all Carpets and Seats",
        "Hot Water Extraction for Stains",
        "Leather Cleaning and Conditioning",
        "Steam Cleaning of Vents and Cup Holders",
        "Interior Glass and Mirror Cleaning",
        "UV Protection on all Plastics/Dash",
        "Pet Hair Removal (if applicable)",
        "Odor Neutralization Treatment"
      ],
      beforeImage: "/images/gallery/interior-before.jpg",
      afterImage: "/images/gallery/interior-after.jpg",
      processSteps: [
        { step: "01", title: "Dry Extraction", description: "We use high-powered vacuums and compressed air to blow out and remove all loose dirt, dust, and pet hair.", icon: "wind", videoUrl: "/videos/dry-extraction.mp4", posterUrl: "/images/gallery/interior-before.jpg" },
        { step: "02", title: "Stain Treatment", description: "Carpets and upholstery are pre-treated and agitated to lift stubborn stains and spills.", icon: "droplet", videoUrl: "/videos/stain-treatment.mp4", posterUrl: "/images/gallery/interior-before.jpg" },
        { step: "03", title: "Steam Cleaning", description: "High-temperature steam is used to sanitize surfaces and clean hard-to-reach crevices like cup holders and vents.", icon: "thermometer", videoUrl: "/videos/steam-cleaning.mp4", posterUrl: "/images/gallery/interior-after.jpg" },
        { step: "04", title: "Condition & Protect", description: "All plastics, vinyls, and leathers are conditioned and dressed with a UV-protectant, non-greasy finish.", icon: "shield-check", videoUrl: "/videos/condition-protect.mp4", posterUrl: "/images/gallery/interior-after.jpg" }
      ],
      faqs: [
        { question: "Do you remove pet hair?", answer: "Yes, pet hair removal is included in our deep interior package, though extremely severe cases may incur an extra time-based fee." },
        { question: "Can you get out every stain?", answer: "We can remove about 95% of stains. However, certain spills that have permanently dyed the fabric or carpet fibers cannot be fully reversed." },
        { question: "How long will my seats stay wet?", answer: "We use hot water extractors that pull out most of the moisture. In most cases, the seats will be completely dry within a few hours." },
        { question: "Does this include cleaning the headliner?", answer: "We lightly spot-clean headliners. Aggressive cleaning can cause the headliner adhesive to fail and sag, so we treat it delicately." }
      ]
    }
  ],

  pricingPackages: [
    {
      name: "Basic Detail",
      price: "$150",
      features: ["Exterior Wash", "Wheel Cleaning", "Interior Vacuum", "Window Cleaning"]
    },
    {
      name: "Premium Detail",
      price: "$299",
      isPopular: true,
      features: ["Everything in Basic", "Clay Bar Treatment", "Hand Wax", "Leather Conditioning", "Carpet Shampoo"]
    },
    {
      name: "Ultimate Detail",
      price: "$599",
      features: ["Everything in Premium", "1-Step Paint Correction", "1-Year Ceramic Coating", "Engine Bay Detail"]
    }
  ],

  certifications: [
    { name: "IDA Certified", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" }, // Placeholders
    { name: "Ceramic Pro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "BBB A+", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Insured", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  ],

  processSteps: [
    { step: "01", title: "Intake", description: "Thorough inspection of your vehicle.", icon: "ClipboardList", videoUrl: "/videos/intake.mp4", posterUrl: "/images/gallery/home-before.jpg" },
    { step: "02", title: "Prep", description: "Decontamination and deep cleaning.", icon: "Droplets", videoUrl: "/videos/prep.mp4", posterUrl: "/images/gallery/paint-correction-before.jpg" },
    { step: "03", title: "Refine", description: "Paint correction and polishing.", icon: "Sparkles", videoUrl: "/videos/refine.mp4", posterUrl: "/images/gallery/paint-correction-after.jpg" },
  ],
  
  trustSignals: {
    yearsInBusiness: 8,
    aseCertified: false, // More relevant for mechanics
    bbbRating: "A+",
    warrantyText: "Satisfaction guaranteed on all detailing packages.",
    insuredAndBonded: true,
    estimateBeforeWorkPolicy: true,
  },
  
  testimonials: [
    {
      name: "Sarah T.",
      rating: 5,
      text: "They made my 5-year-old SUV look better than the day I bought it. The ceramic coating is magic!",
      date: "2023-10-15",
      service: "Ceramic Coating"
    }
  ],
  
  googleRating: 4.9,
  googleReviewCount: 128,
  googleReviewLink: "https://g.page/review/example",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=...", // placeholder
  
  socialLinks: {
    instagram: "https://instagram.com/eliteautodetail",
    facebook: "https://facebook.com/eliteautodetail"
  },

  featuredTransformation: {
    title: "From Oxidized and Neglected to Mirror-Perfect",
    vehicleDescription: "2018 Audi A6 — 4 years of daily driving, zero protection",
    story: "This Audi came in looking every bit of its neglected years — the paint was heavily oxidized with deep swirl marks from years of automatic car washes, the interior smelled of old coffee and pet dander, and the wheels were caked with stubborn iron deposits. We started with a full two-stage paint correction to bring the clear coat back to life, followed by a 5-year ceramic coating application. Inside, we performed a full deep interior detail including hot water extraction and leather conditioning. The owner picked it up and asked if we'd repainted it.",
    beforeImage: "/images/gallery/ceramic-before.png",
    afterImage: "/images/gallery/ceramic-after.png",
    servicesUsed: [
      { name: "Paint Correction", slug: "ceramic-coating" },
      { name: "Ceramic Coating", slug: "ceramic-coating" },
      { name: "Deep Interior Detailing", slug: "interior-detailing" }
    ],
    testimonialQuote: "They made my 5-year-old SUV look better than the day I bought it. The ceramic coating is magic!",
    testimonialAuthor: "Sarah T."
  },
  
  blogPosts: [
    {
      slug: "benefits-of-ceramic-coating",
      title: "Is Ceramic Coating Worth the Investment?",
      excerpt: "Discover why more car owners are choosing ceramic coating over traditional wax.",
      image: "/images/blog/ceramic-benefits.jpg",
      date: "2023-11-01",
      content: "Full markdown content goes here..."
    }
  ]
};
