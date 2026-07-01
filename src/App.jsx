import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from "react";
import ResponsiveHome from "./responsive/ResponsiveHome";
import { LanguageProvider } from "./context/LanguageContext";
import { COOKIE_CONSENT_UPDATED_EVENT, getStoredCookieConsent } from "./utils/cookieConsent";

function ConsentAwareAnalytics() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(() => Boolean(getStoredCookieConsent()?.analytics));

  useEffect(() => {
    function syncAnalyticsConsent(event) {
      const consent = event.detail || getStoredCookieConsent();
      setAnalyticsAllowed(Boolean(consent?.analytics));
    }

    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, syncAnalyticsConsent);
    return () => window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, syncAnalyticsConsent);
  }, []);

  return analyticsAllowed ? <Analytics /> : null;
}

export default function App() {
  return (
    <LanguageProvider>
      <ResponsiveHome />
      <ConsentAwareAnalytics />
    </LanguageProvider>
  );
}
