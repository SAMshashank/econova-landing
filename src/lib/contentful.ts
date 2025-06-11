import { createClient } from 'contentful';
import { LandingPage } from '@/types/contentful';

const space = process.env.CONTENTFUL_SPACE_ID!;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;
const previewToken = process.env.CONTENTFUL_PREVIEW_TOKEN!;

export const getClient = (preview = false) => {
  return createClient({
    space,
    accessToken: preview ? previewToken : accessToken,
    host: preview ? 'preview.contentful.com' : 'cdn.contentful.com',
  });
};

export const getLandingPageData = async (preview = false): Promise<LandingPage | null> => {
  const client = getClient(preview);
  
  try {
    const response = await client.getEntries({
      content_type: 'landingPage',
      include: 10,
      locale: 'en-US',
    });

    if (response.items.length === 0) {
      return null;
    }

    const fields = response.items[0].fields;
    return {
      hero: fields.hero as LandingPage['hero'],
      features: fields.features as LandingPage['features'],
      testimonials: fields.testimonials as LandingPage['testimonials'],
      productShowcase: fields.productShowcase as LandingPage['productShowcase'],
      cta: fields.cta as LandingPage['cta'],
      footer: fields.footer as LandingPage['footer'],
    };
  } catch (error) {
    console.error('Error fetching landing page data:', error);
    return null;
  }
}; 