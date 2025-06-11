import { NextResponse } from 'next/server';
import { getClient } from '@/lib/contentful';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const secret = searchParams.get('secret');

  // Check the secret and next parameters
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  if (!slug) {
    return NextResponse.json({ message: 'No slug in the query' }, { status: 401 });
  }

  // Enable Preview Mode by setting the cookies
  const response = NextResponse.json({ message: 'Preview mode enabled' });
  response.cookies.set('preview', 'true');
  
  // Redirect to the path from the fetched post
  response.headers.set('Location', `/${slug}`);
  return response;
} 