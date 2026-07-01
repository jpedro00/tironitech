import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getSiteText, LANGUAGE_OPTIONS } from "../content/siteContent";
import { COOKIE_CONSENT_UPDATED_EVENT, hasCookieCategoryConsent } from "../utils/cookieConsent";

const STORAGE_KEY = "tironi_lang";
const VALID_LANGUAGES = new Set(LANGUAGE_OPTIONS.map((option) => option.value));

const LanguageContext = createContext(null);

function readStoredLanguage() {
  if (!hasCookieCategoryConsent("preferences")) return "pt";

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && VALID_LANGUAGES.has(stored)) return stored;
  } catch {
    // ignore storage errors
  }
  return "pt";
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(readStoredLanguage);

  useEffect(() => {
    if (!hasCookieCategoryConsent("preferences")) return;

    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore storage errors
    }
  }, [language]);

  useEffect(() => {
    function persistLanguageWhenAllowed(event) {
      if (!event.detail?.preferences) return;

      try {
        localStorage.setItem(STORAGE_KEY, language);
      } catch {
        // ignore storage errors
      }
    }

    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, persistLanguageWhenAllowed);
    return () => window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, persistLanguageWhenAllowed);
  }, [language]);

  const setLanguage = (nextLanguage) => {
    if (VALID_LANGUAGES.has(nextLanguage)) {
      setLanguageState(nextLanguage);
    }
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: getSiteText(language),
      languageOptions: LANGUAGE_OPTIONS,
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
