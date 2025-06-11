import { getClient } from '@/lib/contentful';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import ProductShowcase from '@/components/sections/ProductShowcase';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import { LandingPage } from '@/types/contentful';

async function getLandingPageData(): Promise<LandingPage> {
  const client = getClient();
  
  try {
    const response = await client.getEntries({
      content_type: 'landingPage',
      'fields.slug': 'econova',
      include: 2,
    });

    if (!response.items.length) {
      throw new Error('Landing page not found');
    }

    return response.items[0].fields as unknown as LandingPage;
  } catch (error) {
    console.error('Error fetching landing page data:', error);
    throw error;
  }
}

export default async function Home() {
  const data = await getLandingPageData();

  return (
    <main>
      <Hero content={data.hero} />
      <Features content={data.features} />
      <Testimonials content={data.testimonials} />
      <ProductShowcase content={data.productShowcase} />
      <CTA content={data.cta} />
      <Footer content={data.footer} />
    </main>
  );
}
