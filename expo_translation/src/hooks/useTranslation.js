import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import { useEffect, useState } from "react";
import { format } from "react-string-format";
import { en, es, ja, ko, zh } from "../lang";

const deviceLanguage = getLocales()[0].languageCode;

const i18n = new I18n({
  en,
  es,
  ja,
  ko,
  zh,
});

i18n.defaultLocale - deviceLanguage;

export const useTranslation = () => {
  const [locale, setLocale] = useState(null);

  useEffect(() => {
    setLocale(deviceLanguage);
  }, []);

  return {
    t: (scope) => i18n.t(scope, { locale }),
    locale,
    setLocale,
    format,
  };
};
