import { locales } from './locales';

export function getLangStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}
