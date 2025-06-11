import { getLandingPageData } from '@/lib/contentful';
import { getDefaultContent } from '@/lib/content';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import ProductShowcase from '@/components/sections/ProductShowcase';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import { cookies } from 'next/headers';
import { LandingPage } from '@/types/contentful';
import { redirect } from 'next/navigation';

const SUPPORTED_LANGUAGES = ['en', 'es'];

export async function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang }));
}

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  // Redirect to default language if unsupported
  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    redirect('/en');
  }

  const cookieStore = await cookies();
  const isPreview = cookieStore.get('preview')?.value === 'true';
  
  const content = await getLandingPageData(isPreview);
  const defaultContent = getDefaultContent();

  return (
    <main>
      <Hero content={content?.hero || defaultContent.hero} />
      <Features content={content?.features || defaultContent.features} />
      <Testimonials content={content?.testimonials || defaultContent.testimonials} />
      <ProductShowcase content={content?.productShowcase || defaultContent.productShowcase} />
      <CTA content={content?.cta || defaultContent.cta} />
      <Footer content={content?.footer || defaultContent.footer} />
    </main>
  );
} 