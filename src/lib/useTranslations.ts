import translations from '../i18n/translations.json';

export type Locale = 'es' | 'en' | 'fr';

export function getTranslations(lang?: string) {
  const safeLang: Locale = (lang ?? 'es') as Locale;
  return translations[safeLang];
}
