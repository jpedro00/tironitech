import { useEffect, useState } from "react";
import SiteIntro from "../components/shared/SiteIntro";
import { useLanguage } from "../context/LanguageContext";

const projectLinks = {
  signWallet: "https://www.walletsignguard.com",
  deleteActPro: "https://www.deleteactpro.com",
};

function useMobileStylesheet() {
  useEffect(() => {
    const id = "tironi-mobile-css";
    const href = new URL("../styles/mobile.css", import.meta.url).href;

    let link = document.getElementById(id);
    if (!link) {
      link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }

    return () => {
      const existing = document.getElementById(id);
      if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
    };
  }, []);
}

export default function MobileHome() {
  useMobileStylesheet();
  const { t, language, setLanguage, languageOptions } = useLanguage();
  const m = t.mobile;
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <SiteIntro mobile subtitle={t.hero.eyebrow} onFinish={() => setIntroDone(true)} />}

      <div className="mobile-site-shell">
        <div className="mobile-bg-glow mobile-bg-glow-left" />
        <div className="mobile-bg-glow mobile-bg-glow-right" />
        <div className="mobile-stars-layer">
          {Array.from({ length: 26 }).map((_, index) => (
            <span
              key={index}
              className="mobile-star"
              style={{
                left: `${(index * 13) % 100}%`,
                top: `${(index * 17) % 100}%`,
                animationDelay: `${(index % 7) * 0.55}s`,
              }}
            />
          ))}
        </div>

        <header className="mobile-header">
          <div className="mobile-brand">
            <div className="mobile-brand-mark">
              <img
                src="/brand/tironi-symbol.png"
                alt="Tironi Tech"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="mobile-brand-copy">
              <strong>Tironi Tech</strong>
              <span>{t.hero.eyebrow}</span>
            </div>
          </div>

          <div className="mobile-header-actions" style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <select
              className="tt2-language-select mobile-language-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              aria-label={t.nav.languageLabel}
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <a className="mobile-header-cta" href="#contato">
              {m.headerCta}
            </a>
          </div>
        </header>

        <main className="mobile-main">
          <section className="mobile-hero">
            <span className="mobile-eyebrow">{m.hero.eyebrow}</span>

            <h1 className="mobile-hero-title">{m.hero.title}</h1>

            <p className="mobile-hero-text">{m.hero.text}</p>

            <div className="mobile-hero-actions">
              <a className="mobile-btn mobile-btn-primary" href="#projetos">
                {m.hero.primaryCta}
              </a>
              <a className="mobile-btn mobile-btn-secondary" href="#servicos">
                {m.hero.secondaryCta}
              </a>
            </div>
          </section>

          <section className="mobile-section" id="servicos">
            <div className="mobile-section-head">
              <span className="mobile-section-tag">{m.services.tag}</span>
              <h2>{m.services.title}</h2>
              <p>{m.services.description}</p>
            </div>

            <div className="mobile-card-stack">
              {m.services.items.map((item, index) => (
                <article key={item.title} className="mobile-info-card">
                  <div className="mobile-card-icon">{index === 0 ? "</>" : index === 1 ? "✦" : "◎"}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mobile-section" id="destaques">
            <div className="mobile-section-head">
              <span className="mobile-section-tag">{m.highlights.tag}</span>
              <h2>{m.highlights.title}</h2>
              <p>{m.highlights.description}</p>
            </div>

            <div className="mobile-highlight-grid">
              {m.highlights.pills.map((pill) => (
                <div key={pill} className="mobile-highlight-pill">
                  {pill}
                </div>
              ))}
            </div>
          </section>

          <section className="mobile-section" id="projetos">
            <div className="mobile-section-head">
              <span className="mobile-section-tag">{m.projects.tag}</span>
              <h2>{m.projects.title}</h2>
              <p>{m.projects.description}</p>
            </div>

            <div className="mobile-projects">
              {m.projects.items.map((project, index) => (
                <a
                  key={project.title}
                  className="mobile-project-card"
                  href={index === 0 ? projectLinks.signWallet : projectLinks.deleteActPro}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="mobile-project-logo-wrap">
                    <img
                      src={index === 0 ? "/projects/sign-wallet-logo.png" : "/projects/deleteactpro-logo.png"}
                      alt={project.title}
                      className="mobile-project-logo"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="mobile-project-copy">
                    <span className="mobile-project-label">{project.label}</span>
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                    <strong>{project.cta}</strong>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="mobile-section" id="numeros">
            <div className="mobile-section-head">
              <span className="mobile-section-tag">{m.stats.tag}</span>
              <h2>{m.stats.title}</h2>
            </div>

            <div className="mobile-stats-grid">
              {m.stats.items.map((stat) => (
                <article key={stat.label} className="mobile-stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="mobile-section mobile-cta-section" id="contato">
            <span className="mobile-section-tag">{m.cta.tag}</span>
            <h2>{m.cta.title}</h2>
            <p>{m.cta.description}</p>

            <div className="mobile-hero-actions">
              <a className="mobile-btn mobile-btn-primary" href="mailto:contato@tironitech.com">
                {m.cta.button}
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
