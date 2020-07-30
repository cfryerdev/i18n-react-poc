import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

export const setupTranslation = async () => {
  return await i18n
    .use(LanguageDetector)
    .use(HttpBackend)
    .use(initReactI18next)
    .init(
      {
        debug: false,
        lng: "en",
        fallbackLng: "en",
        preload: ["en", "es"],
        ns: ["translations"],
        defaultNS: "translations",
        backend: {
          loadPath: "/locales/{{lng}}/{{ns}}.json"
        }
      },
      err => {
        if (err) return console.error(err);
      }
    );
};
