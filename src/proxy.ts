import { type NextRequest, NextResponse } from 'next/server';
import { localeSchema } from './types/locale';

export const proxy = (request: NextRequest) => {
  const FALLBACK_LOCALE = 'en';
  const defaultLocale = localeSchema.parse(process.env.DEFAULT_LOCALE || FALLBACK_LOCALE);
  const { pathname } = request.nextUrl;
  const locales = localeSchema.options;

  const matchedLocale = locales.find(locale => pathname.startsWith(`/${locale}`));
  if (matchedLocale) {
    const response = NextResponse.next();
    // next-intl が読む x-next-intl-locale ヘッダーをセットすることで、
    // リクエストごとに locale を解決する src/i18n/request.ts の処理が正しく動くようになる。
    response.headers.set('x-next-intl-locale', matchedLocale);
    return response;
  }

  // ブラウザ言語取得
  const browserLocale = request.headers.get('accept-language')?.split(',')[0].split('-')[0];
  const redirectLocale = localeSchema.parse(
    browserLocale && localeSchema.safeParse(browserLocale).success ? browserLocale : defaultLocale
  );
  return NextResponse.redirect(new URL(`/${redirectLocale}${pathname}`, request.url));
};

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
