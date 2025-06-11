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

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  // Redirect to default language if unsupported
  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    redirect('/en');
  }

  const cookieStore = await cookies();
  const isPreview = cookieStore.get('preview')?.value === 'true';
  
  const content = (await getLandingPageData(isPreview) || getDefaultContent()) as LandingPage;

  return (
    <main>
      <Hero content={content.hero} />
      <Features content={content.features} />
      <Testimonials content={content.testimonials} />
      <ProductShowcase content={content.productShowcase} />
      <CTA content={content.cta} />
      <Footer content={content.footer} />
    </main>
  );
} 