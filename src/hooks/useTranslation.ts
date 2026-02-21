import { useTranslations as useTranslation } from 'next-intl';
import type jaMessages from '@/i18n/messages/ja.json';

export const useTranslations = () => {
  const t = useTranslation();
  return {
    tHome: (key: keyof (typeof jaMessages)['pages']['home']) => t(`pages.home.${key}`),
  };
};
