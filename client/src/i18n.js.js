import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// import translationEN from "../public/locales/en.json";
// import translationAR from "../public/locales/ar.json";

// const resources = {
//   en: {
//     translation: translationEN,
//   },
//   ar: {
//     translation: translationAR,
//   },
// };

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    // debug: true,
    debug: false, // It should be false

    // resources,
    detection: {
      order: ["queryString", "cookie"],
      caches: ["cookie"],
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
