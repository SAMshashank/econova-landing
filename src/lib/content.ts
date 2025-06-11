import heroContent from '@/content/hero.json';
import featuresContent from '@/content/features.json';
import testimonialsContent from '@/content/testimonials.json';
import productShowcaseContent from '@/content/product-showcase.json';
import ctaContent from '@/content/cta.json';
import footerContent from '@/content/footer.json';
import { LandingPage } from '@/types/contentful';

export function getDefaultContent(): LandingPage {
  return {
    hero: heroContent,
    features: featuresContent,
    testimonials: testimonialsContent,
    productShowcase: productShowcaseContent,
    cta: ctaContent,
    footer: footerContent
  };
} 