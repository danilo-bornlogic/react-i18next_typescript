import React from "react";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translations from "../../translations";

const formatLanguage = (language?: string) => language?.replace("_", "-");
const DEFAULT_LANGUAGE = "en-US";

const getUserLanguage = () => {
  return formatLanguage(DEFAULT_LANGUAGE);
};

const language = getUserLanguage();

i18n.use(initReactI18next).init({
  resources: translations,
  nsSeparator: ":",
  keySeparator: false,
  lng: language,

  interpolation: {
    escapeValue: false,
  },
});

const ReactI18nTranslationsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <>{children}</>;
};

export default ReactI18nTranslationsProvider;
