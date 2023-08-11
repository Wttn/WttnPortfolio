import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en-US.json';
import translationPT from './locales/pt-BR.json';

const resources = {
  'en-US': {
    translation: translationEN,
  },
  'pt-BR': {
    translation: translationPT,
  },
};

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en-US',
    debug: true,
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
