import { useState } from "react";

export function LogoMark({ className = "", size = 44, title = "Tironi Tech" }) {
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
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 46"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="tt2LogoGrad" x1="8" y1="6" x2="44" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a100ff" />
          <stop offset="0.55" stopColor="#b100ff" />
          <stop offset="1" stopColor="#2d4dff" />
        </linearGradient>
      </defs>
      <path
        d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"
        fill="url(#tt2LogoGrad)"
      />
    </svg>
  );
}

export default function Navbar({ t, language, setLanguage, languageOptions }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="tt2-header">
      <div className="tt2-container tt2-header-inner">
        <a href="#inicio" className="tt2-brand" onClick={closeMenu}>
          <div className="tt2-brand-mark" aria-hidden="true">
            <LogoMark className="brand-mark" size={40} />
          </div>
          <div className="tt2-brand-copy">
            <strong>Tironi Tech</strong>
            <span>{t.hero.eyebrow}</span>
          </div>
        </a>

        <button
          type="button"
          className="tt2-nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="tt2-primary-nav"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>

        <nav id="tt2-primary-nav" className={`tt2-nav${menuOpen ? " tt2-nav-open" : ""}`}>
          <a href="#clientes" onClick={closeMenu}>
            {t.nav.clients}
          </a>
          <a href="#experiencia" onClick={closeMenu}>
            {t.experience.eyebrow}
          </a>
          <a href="#projetos" onClick={closeMenu}>
            {t.nav.projects}
          </a>
          <a href="#solucoes" onClick={closeMenu}>
            {t.nav.services}
          </a>
          <a href="#contato" onClick={closeMenu}>
            {t.nav.contact}
          </a>
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
              aria-label="Language"
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <a className="tt2-btn tt2-btn-primary tt2-header-cta" href="#contato" onClick={closeMenu}>
            {t.nav.cta}
          </a>
        </div>
      </div>

      {menuOpen ? (
        <button type="button" className="tt2-nav-backdrop" aria-label="Fechar menu" onClick={closeMenu} />
      ) : null}
    </header>
  );
}

