import { createClient } from 'contentful';

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

export const getLandingPageData = async (preview = false) => {
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

    return response.items[0].fields;
  } catch (error) {
    console.error('Error fetching landing page data:', error);
    return null;
  }
}; 