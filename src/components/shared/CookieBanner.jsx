import { useState } from "react";

const STORAGE_KEY = "tironitech_cookie_consent";

function shouldShowBanner() {
  if (typeof window === "undefined") return false;

  try {
    return !localStorage.getItem(STORAGE_KEY);
  } catch {
    return true;
  }
}

export default function CookieBanner({ t }) {
  const [visible, setVisible] = useState(shouldShowBanner);

  function saveConsent(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Consent still closes visually when storage is unavailable.
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="tt2-cookie-banner" role="dialog" aria-label={t.cookies.label}>
      <div>
        <p>{t.cookies.text}</p>
        <a href="#privacidade">{t.cookies.privacy}</a>
      </div>
      <div className="tt2-cookie-actions">
        <button type="button" className="tt2-cookie-secondary" onClick={() => saveConsent("rejected")}>
          {t.cookies.reject}
        </button>
        <button type="button" className="tt2-cookie-primary" onClick={() => saveConsent("accepted")}>
          {t.cookies.accept}
        </button>
      </div>
    </div>
  );
}