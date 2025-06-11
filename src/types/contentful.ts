export interface HeroSection {
  headline: string;
  subheadline: string;
  backgroundImage: {
    url: string;
    title: string;
    description?: string;
  };
  ctaButton: {
    text: string;
    link: string;
    variant?: 'primary' | 'secondary';
  };
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  link?: {
    text: string;
    url: string;
  };
}

export interface FeaturesSection {
  title: string;
  subtitle?: string;
  features: FeatureItem[];
}

export interface TestimonialItem {
  quote: string;
  authorName: string;
  authorTitle: string;
  authorCompany: string;
  authorImage?: {
    url: string;
    title: string;
  };
}

export interface TestimonialsSection {
  title: string;
  subtitle?: string;
  testimonials: TestimonialItem[];
}

export interface ProductSpecification {
  title: string;
  value: string;
  icon?: string;
}

export interface ProductImage {
  url: string;
  title: string;
  description?: string;
}

export interface ProductShowcaseSection {
  title: string;
  description: string;
  specifications: ProductSpecification[];
  images: ProductImage[];
  ctaButton?: {
    text: string;
    link: string;
  };
}

export interface CTASection {
  headline: string;
  description: string;
  button: {
    text: string;
    link: string;
    variant?: 'primary' | 'secondary';
  };
  backgroundImage?: {
    url: string;
    title: string;
  };
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label?: string;
}

export interface FooterSection {
  copyrightText: string;
  socialLinks: SocialLink[];
  navigation?: {
    title: string;
    links: {
      text: string;
      url: string;
    }[];
  }[];
}

export interface LandingPage {
  hero: HeroSection;
  features: FeaturesSection;
  testimonials: TestimonialsSection;
  productShowcase: ProductShowcaseSection;
  cta: CTASection;
  footer: FooterSection;
} 