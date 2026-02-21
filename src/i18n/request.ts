import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { localeSchema } from '@/types/locale';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const result = localeSchema.safeParse(requested);
  if (!result.success) notFound();
  const locale = result.data;
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
