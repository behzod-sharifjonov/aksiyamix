import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationRU from './language/ru.json';
import translationUZ from './language/uz.json';

const resources = {
  ru: {
    translation: translationRU,
  },
  uz: {
    translation: translationUZ,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru', // default language
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;




