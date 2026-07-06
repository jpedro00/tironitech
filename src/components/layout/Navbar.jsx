import { useState } from "react";
import {
  DEFAULT_WHATSAPP_URL,
  reportWhatsAppConversionAndRedirect,
} from "../../utils/googleAdsConversion";

const CONTACT_WHATSAPP_HREF = DEFAULT_WHATSAPP_URL;

export function LogoMark({ className = "", size = 44, title = "TironiTech" }) {
  const [error, setError] = useState(false);

  if (!error) {
    return (
      <img
        className={className}
        src="/brand/tironi-symbol.png"
        alt={title}
        width={size}
        height={size}
        loading="eager"
        decoding="async"
        style={{ width: size, height: size, objectFit: "contain" }}
        onError={() => setError(true)}
      />
    );
  }

  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 46" role="img" aria-label={title} xmlns="http://www.w3.org/2000/svg">
      <path d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" fill="#1677c8" />
    </svg>
  );
}

export default function Navbar({ t, language, setLanguage, languageOptions }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const brandTagline = t.brandTagline || "Tecnologia com clareza, estrutura e evoluÃ§Ã£o";
  const structureLabel = { pt: "Estrutura", en: "Structure", es: "Estructura" }[language] || "Estrutura";
  const sectionHrefPrefix = typeof window !== "undefined" && window.location.pathname !== "/" ? "/" : "";

  return (
    <header className="tt2-header">
      <div className="tt2-container tt2-header-inner">
        <a href={`${sectionHrefPrefix}#inicio`} className="tt2-brand" onClick={closeMenu}>
          <div className="tt2-brand-mark" aria-hidden="true">
            <LogoMark className="brand-mark" size={46} />
          </div>
          <div className="tt2-brand-copy">
            <strong>TironiTech</strong>
            <span>{brandTagline}</span>
          </div>
        </a>

        <button
          type="button"
          className="tt2-nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="tt2-primary-nav"
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? "Ã—" : "â˜°"}</span>
        </button>

        <nav id="tt2-primary-nav" className={`tt2-nav${menuOpen ? " tt2-nav-open" : ""}`}>
          <a href={`${sectionHrefPrefix}#clientes`} onClick={closeMenu}>{t.nav.clients}</a>
          <a href={`${sectionHrefPrefix}#experiencia`} onClick={closeMenu}>{structureLabel}</a>
          <a href={`${sectionHrefPrefix}#projetos`} onClick={closeMenu}>{t.nav.projects}</a>
          <a href={`${sectionHrefPrefix}#solucoes`} onClick={closeMenu}>{t.nav.services}</a>
          <a href={`${sectionHrefPrefix}#contato`} onClick={closeMenu}>{t.nav.contact}</a>
        </nav>

        <div className="tt2-header-actions">
          <div className="tt2-language-switcher">
            <select
              className="tt2-language-select"
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
                closeMenu();
              }}
              aria-label={t.nav.languageLabel}
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <a
            className="tt2-btn tt2-btn-primary tt2-header-cta"
            href={CONTACT_WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => {
              event.preventDefault();
              closeMenu();
              reportWhatsAppConversionAndRedirect(CONTACT_WHATSAPP_HREF);
            }}
          >
            {t.nav.cta}
          </a>
        </div>
      </div>

      {menuOpen ? <button type="button" className="tt2-nav-backdrop" aria-label={t.nav.closeMenu} onClick={closeMenu} /> : null}
    </header>
  );
}
