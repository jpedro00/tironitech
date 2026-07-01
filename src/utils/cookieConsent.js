export const COOKIE_CONSENT_STORAGE_KEY = "tironitech_cookie_consent";
export const COOKIE_CONSENT_VERSION = "1.0";
export const COOKIE_CONSENT_UPDATED_EVENT = "tironitech:cookie-consent-updated";
export const COOKIE_PREFERENCES_OPEN_EVENT = "tironitech:open-cookie-preferences";

export const COOKIE_CATEGORIES = ["necessary", "preferences", "analytics", "marketing"];

export function normalizeCookieConsent(value) {
  if (!value || typeof value !== "object") return null;

  return {
    necessary: true,
    preferences: Boolean(value.preferences),
    analytics: Boolean(value.analytics),
    marketing: Boolean(value.marketing),
    acceptedAt: typeof value.acceptedAt === "string" ? value.acceptedAt : new Date().toISOString(),
    version: typeof value.version === "string" ? value.version : COOKIE_CONSENT_VERSION,
  };
}

export function getStoredCookieConsent() {
  if (typeof window === "undefined") return null;

  try {
    const stored = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!stored) return null;
    return normalizeCookieConsent(JSON.parse(stored));
  } catch {
    return null;
  }
}

export function hasCookieCategoryConsent(category) {
  const consent = getStoredCookieConsent();
  return Boolean(consent && consent[category]);
}

export function buildCookieConsent(overrides = {}) {
  return {
    necessary: true,
    preferences: Boolean(overrides.preferences),
    analytics: Boolean(overrides.analytics),
    marketing: Boolean(overrides.marketing),
    acceptedAt: new Date().toISOString(),
    version: COOKIE_CONSENT_VERSION,
  };
}

export function saveCookieConsent(consent) {
  const nextConsent = normalizeCookieConsent(consent) || buildCookieConsent();

  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(nextConsent));
    } catch {
      // The UI still closes if storage is unavailable.
    }

    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_UPDATED_EVENT, { detail: nextConsent }));
  }

  return nextConsent;
}

export function openCookiePreferences() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(COOKIE_PREFERENCES_OPEN_EVENT));
  }
}

export function loadAnalyticsScripts(consent) {
  if (!consent?.analytics) return;
  // Reserved for future analytics tags. No third-party scripts are injected today.
}

export function loadMarketingScripts(consent) {
  if (!consent?.marketing) return;
  // Reserved for future marketing pixels. No third-party scripts are injected today.
}
