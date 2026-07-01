import { useEffect, useMemo, useState } from "react";
import {
  COOKIE_CONSENT_UPDATED_EVENT,
  COOKIE_PREFERENCES_OPEN_EVENT,
  buildCookieConsent,
  getStoredCookieConsent,
  loadAnalyticsScripts,
  loadMarketingScripts,
  saveCookieConsent,
} from "../../utils/cookieConsent";

const fallbackCopy = {
  label: "Preferências de cookies",
  banner:
    "A TironiTech utiliza cookies para melhorar sua experiência, lembrar preferências e entender como o site é utilizado. Você pode aceitar todos, recusar cookies não essenciais ou personalizar suas escolhas.",
  privacy: "Política de Privacidade",
  acceptAll: "Aceitar todos",
  reject: "Recusar",
  preferences: "Preferências",
  savePreferences: "Salvar preferências",
  rejectNonEssential: "Recusar não essenciais",
  modalTitle: "Preferências de cookies",
  modalText:
    "Gerencie como a TironiTech pode usar cookies no seu navegador. Cookies necessários permanecem sempre ativos para manter o site funcionando corretamente.",
  close: "Fechar preferências de cookies",
  alwaysActive: "Sempre ativo",
  enabled: "Ativo",
  disabled: "Inativo",
  categories: {
    necessary: {
      title: "Necessários",
      description: "Essenciais para o funcionamento básico do site e não podem ser desativados.",
    },
    preferences: {
      title: "Preferências",
      description: "Ajudam a lembrar escolhas como idioma e configurações de navegação.",
    },
    analytics: {
      title: "Analytics",
      description: "Ajudam a entender como visitantes usam o site para melhorar desempenho, conteúdo e experiência.",
    },
    marketing: {
      title: "Marketing",
      description: "Podem ser usados para medir campanhas, melhorar divulgação e personalizar comunicações.",
    },
  },
};

function getCopy(t) {
  return {
    ...fallbackCopy,
    ...(t?.cookies || {}),
    categories: {
      ...fallbackCopy.categories,
      ...(t?.cookies?.categories || {}),
    },
  };
}

function createDraft(consent) {
  return {
    necessary: true,
    preferences: Boolean(consent?.preferences),
    analytics: Boolean(consent?.analytics),
    marketing: Boolean(consent?.marketing),
  };
}

export default function CookieConsent({ t }) {
  const copy = useMemo(() => getCopy(t), [t]);
  const [storedConsent, setStoredConsent] = useState(() => getStoredCookieConsent());
  const [bannerVisible, setBannerVisible] = useState(() => !getStoredCookieConsent());
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [draft, setDraft] = useState(() => createDraft(getStoredCookieConsent()));

  useEffect(() => {
    const consent = getStoredCookieConsent();
    loadAnalyticsScripts(consent);
    loadMarketingScripts(consent);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;

    const shouldOffsetFloatingButton = bannerVisible && !storedConsent;
    document.body.classList.toggle("tt2-cookie-banner-visible", shouldOffsetFloatingButton);

    return () => document.body.classList.remove("tt2-cookie-banner-visible");
  }, [bannerVisible, storedConsent]);

  useEffect(() => {
    function openPreferences() {
      const consent = getStoredCookieConsent();
      setDraft(createDraft(consent));
      setStoredConsent(consent);
      setBannerVisible(false);
      setPreferencesOpen(true);
    }

    function syncConsent(event) {
      const consent = event.detail || getStoredCookieConsent();
      setStoredConsent(consent);
      setDraft(createDraft(consent));
      loadAnalyticsScripts(consent);
      loadMarketingScripts(consent);
    }

    function closeOnEscape(event) {
      if (event.key === "Escape") setPreferencesOpen(false);
    }

    window.addEventListener(COOKIE_PREFERENCES_OPEN_EVENT, openPreferences);
    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, syncConsent);
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener(COOKIE_PREFERENCES_OPEN_EVENT, openPreferences);
      window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, syncConsent);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function persistConsent(nextDraft) {
    const consent = saveCookieConsent(buildCookieConsent(nextDraft));
    setStoredConsent(consent);
    setDraft(createDraft(consent));
    setBannerVisible(false);
    setPreferencesOpen(false);
  }

  function acceptAll() {
    persistConsent({ preferences: true, analytics: true, marketing: true });
  }

  function rejectNonEssential() {
    persistConsent({ preferences: false, analytics: false, marketing: false });
  }

  function savePreferences() {
    persistConsent(draft);
  }

  function openPreferencesFromBanner() {
    setDraft(createDraft(storedConsent));
    setPreferencesOpen(true);
  }

  function updateDraft(category) {
    setDraft((current) => ({ ...current, [category]: !current[category] }));
  }

  return (
    <>
      {bannerVisible && (
        <div className="tt2-cookie-banner" role="dialog" aria-label={copy.label}>
          <div className="tt2-cookie-copy">
            <p>{copy.banner}</p>
            <a href="#privacidade">{copy.privacy}</a>
          </div>
          <div className="tt2-cookie-actions">
            <button type="button" className="tt2-cookie-secondary" onClick={rejectNonEssential}>
              {copy.reject}
            </button>
            <button type="button" className="tt2-cookie-secondary" onClick={openPreferencesFromBanner}>
              {copy.preferences}
            </button>
            <button type="button" className="tt2-cookie-primary" onClick={acceptAll}>
              {copy.acceptAll}
            </button>
          </div>
        </div>
      )}

      {preferencesOpen && (
        <div className="tt2-cookie-modal-backdrop">
          <section className="tt2-cookie-modal" role="dialog" aria-modal="true" aria-labelledby="cookie-preferences-title">
            <div className="tt2-cookie-modal-head">
              <div>
                <span className="tt2-cookie-modal-kicker">{copy.label}</span>
                <h2 id="cookie-preferences-title">{copy.modalTitle}</h2>
                <p>{copy.modalText}</p>
              </div>
              <button type="button" className="tt2-cookie-close" onClick={() => setPreferencesOpen(false)} aria-label={copy.close}>
                ×
              </button>
            </div>

            <div className="tt2-cookie-category-list">
              {["necessary", "preferences", "analytics", "marketing"].map((category) => {
                const categoryCopy = copy.categories[category];
                const checked = category === "necessary" ? true : Boolean(draft[category]);
                return (
                  <article key={category} className="tt2-cookie-category">
                    <div>
                      <h3>{categoryCopy.title}</h3>
                      <p>{categoryCopy.description}</p>
                    </div>
                    {category === "necessary" ? (
                      <span className="tt2-cookie-always-active">{copy.alwaysActive}</span>
                    ) : (
                      <label className="tt2-cookie-toggle">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => updateDraft(category)}
                          aria-label={categoryCopy.title}
                        />
                        <span className="tt2-cookie-toggle-track" aria-hidden="true">
                          <span className="tt2-cookie-toggle-thumb" />
                        </span>
                        <span className="tt2-cookie-toggle-text">{checked ? copy.enabled : copy.disabled}</span>
                      </label>
                    )}
                  </article>
                );
              })}
            </div>

            <div className="tt2-cookie-modal-actions">
              <button type="button" className="tt2-cookie-secondary" onClick={rejectNonEssential}>
                {copy.rejectNonEssential}
              </button>
              <button type="button" className="tt2-cookie-secondary" onClick={acceptAll}>
                {copy.acceptAll}
              </button>
              <button type="button" className="tt2-cookie-primary" onClick={savePreferences}>
                {copy.savePreferences}
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

