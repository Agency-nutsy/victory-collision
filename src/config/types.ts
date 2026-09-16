export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  priceRange: string;
  image: string;
  faqs: ServiceFaq[];
  serviceIncludes?: string[];
  beforeImage?: string;
  afterImage?: string;
  processSteps?: { step: string; title: string; description: string; icon: string; videoUrl?: string; posterUrl?: string; }[];
}

export interface Testimonial {
  name: string;
  rating: number; // 1-5
  text: string;
  date: string;
  service: string;
}

export interface TeamMember {
  name: string;
  photo: string;
  role: string;
  certifications: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  content: string; // Markdown or HTML string
}

export interface FeaturedTransformation {
  title: string;
  vehicleDescription: string;
  story: string;
  beforeImage: string;
  afterImage: string;
  servicesUsed: { name: string; slug: string }[];
  testimonialQuote?: string;
  testimonialAuthor?: string;
}

export interface BeforeAfterImage {
  beforeUrl: string;
  afterUrl: string;
  alt: string;
}

export interface SiteConfig {
  businessName: string;
  tagline: string;
  logoUrl: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  serviceArea: string[];
  hoursOfOperation: string;
  
  fonts?: {
    heading: string;
    body: string;
  };

  brandColors: {
    primary: string;
    secondary: string;
    accent: string;
    neutralBase?: string;
  };
  
  heroImage: string;
  heroImageAlt?: string;
  heroVideoUrl?: string;
  heroVideoFallback?: string;
  heroAnimationMode?: 'detailing' | 'repair';
  
  galleryImages: BeforeAfterImage[];
  teamMembers: TeamMember[];
  services: Service[];
  featuredTransformation?: FeaturedTransformation;
  
  certifications?: { name: string; logo: string }[];
  processSteps?: { step: string; title: string; description: string; icon: string; videoUrl?: string; posterUrl?: string; }[];
  pricingPackages?: { name: string; price: string; isPopular?: boolean; features: string[] }[];
  
  trustSignals: {
    yearsInBusiness: number;
    aseCertified: boolean;
    bbbRating: string;
    warrantyText: string;
    insuredAndBonded: boolean;
    estimateBeforeWorkPolicy: boolean;
  };
  
  testimonials: Testimonial[];
  
  googleRating?: number;
  googleReviewCount?: number;
  googleReviewLink: string;
  googleMapsEmbedUrl: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
  
  blogPosts: BlogPost[];
}
