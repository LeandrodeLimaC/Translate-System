import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import "intl-pluralrules";

import { locale } from "expo-localization";

i18n.use(initReactI18next).init({
  // compatibilityJSON: "v3",
  lng: locale,
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        "Welcome to React": "Welcome to React and react-i18next",
        key_zero: "zero",
        key_one: "singular",
        key_two: "two",
        key_few: "few",
        key_many: "many",
        key_other: "other",
      },
    },
    "pt-BR": {
      translation: {
        "Welcome to React": "Bem-vindo ao React com react-i18next",
        key_zero: "zero",
        key_one: "unico",
        key_two: "dois",
        key_few: "alguns",
        key_many: "muitos",
        key_other: "outros",
      },
    },
  },
});
