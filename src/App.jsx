import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from "react";
import ResponsiveHome from "./responsive/ResponsiveHome";
import LegalPolicyPage from "./components/pages/LegalPolicyPage";
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

function AppContent() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";

  if (pathname === "/politica-privacidade") {
    return <LegalPolicyPage policy="privacy" />;
  }

  if (pathname === "/politica-cookies") {
    return <LegalPolicyPage policy="cookies" />;
  }

  return <ResponsiveHome />;
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
      <ConsentAwareAnalytics />
    </LanguageProvider>
  );
}
