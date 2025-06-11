import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SUPPORTED_LOCALES = ['en', 'es'];
const DEFAULT_LOCALE = 'en';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname starts with a locale
  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect to default locale
  const locale = DEFAULT_LOCALE;
  return NextResponse.redirect(
    new URL(`/${locale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
}; 