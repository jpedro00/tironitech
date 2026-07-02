import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import CookieConsent from "../components/shared/CookieConsent";
import CountUpStat from "../components/shared/CountUpStat";
import FloatingWhatsAppButton from "../components/ui/FloatingWhatsAppButton";
import Footer from "../components/layout/Footer";
import newstoreSorteiosLogo from "../assets/newstore-sorteios-logo.png";

const CONTACT_EMAIL = "tironi@tironitech.com";
const WHATSAPP_NUMBER = "558599498149";

const CONTACT_WHATSAPP_HREF =
  "https://wa.me/558599498149?text=Ol%C3%A1,%20vim%20pelo%20site%20da%20TironiTech%20e%20quero%20falar%20sobre%20um%20projeto.";

const mobileMarqueeLogos = [
  {
    name: "Casa do Treinamento",
    logo: "https://static.wixstatic.com/media/66390a_cf49547989da4c958d61781ae270cf89~mv2.png/v1/fill/w_152,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Casa-removebg-preview.png",
  },
  {
    name: "Multiplier",
    logo: "https://static.wixstatic.com/media/66390a_f590687d46c343baa3fd561a42e5abb4~mv2.png/v1/fill/w_136,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/multi-removebg-preview.png",
  },
  {
    name: "NewStore",
    logo: "https://static.wixstatic.com/media/66390a_f4171a1ecc954a2692725c5810dbd393~mv2.png/v1/fill/w_249,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/newstore_PNG.png",
  },
  {
    name: "Coopermais",
    logo: "https://static.wixstatic.com/media/66390a_8b6c94ee29fe4e57907cd67518d88c6c~mv2.png/v1/crop/x_25,y_0,w_212,h_73/fill/w_278,h_96,al_c,lg_1,q_85,enc_avif,quality_auto/coopermais_PNG.png",
  },
  { name: "XNAMAI", logo: "/assets/clients/xnamai.png" },
];
const projectLinks = {
  SignGuard: "https://chromewebstore.google.com/detail/crypto-wallet-signguard/dcfiodblpbchbfkopajdpiibgdenfmip",
  DeleteActPro: "https://www.deleteactpro.com",
  "Sorteios NewStore": "#contato",
};

const projectLogos = {
  SignGuard: "/projects/sign-wallet-logo.png",
  DeleteActPro: "/projects/deleteactpro-logo.png",
  "Sorteios NewStore": newstoreSorteiosLogo,
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

  return (
    <div className="mobile-site-shell">
      <header className="mobile-header">
        <a href="#inicio" className="mobile-brand">
          <div className="mobile-brand-mark">
            <img src="/brand/tironi-symbol.png" alt="TironiTech" />
          </div>
          <div className="mobile-brand-copy">
            <strong>TironiTech</strong>
            <span>{t.brandTagline || "Tecnologia com clareza, estrutura e evoluÃ§Ã£o"}</span>
          </div>
        </a>

        <div className="mobile-header-actions">
          <select className="tt2-language-select mobile-language-select" value={language} onChange={(e) => setLanguage(e.target.value)} aria-label={t.nav.languageLabel}>
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <a className="mobile-header-cta" href={CONTACT_WHATSAPP_HREF} target="_blank" rel="noreferrer">{t.nav.cta}</a>
        </div>
      </header>

      <main className="mobile-main">
        <section className="mobile-hero" id="inicio">
          <span className="mobile-eyebrow">{t.hero.eyebrow}</span>
          <h1 className="mobile-hero-title">{t.hero.title}</h1>
          <p className="mobile-hero-text">{t.hero.description}</p>
          <div className="mobile-hero-actions">
            <a className="mobile-btn mobile-btn-primary" href="#contato">{t.hero.primaryCta}</a>
            <a className="mobile-btn mobile-btn-secondary" href="#servicos">{t.hero.secondaryCta}</a>
          </div>
        </section>

        <section className="mobile-section mobile-trust-section" id="clientes">
          <div className="mobile-section-head">
            <span className="mobile-section-tag">{t.nav.clients}</span>
            <h2>{t.trustedBy.title}</h2>
            <p>{t.trustedBy.description}</p>
          </div>
          <div className="mobile-marquee" aria-label={t.trustedBy.title}>
            <div className="mobile-marquee-track">
              {[...mobileMarqueeLogos, ...mobileMarqueeLogos, ...mobileMarqueeLogos].map((client, index) => (
                <span key={`${client.name}-${index}`} className={client.name === "XNAMAI" ? "is-dark" : undefined}>
                  <img src={client.logo} alt={client.name} loading="lazy" />
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mobile-section mobile-proof-section" aria-label={t.experienceProof.title}>
          <div className="mobile-count-grid">
            {(t.experienceProof.metrics || t.hero.authority || []).map((item) => (
              <CountUpStat key={`${item.value}-${item.label}`} value={item.value} label={item.label} className="mobile-count-card" />
            ))}
          </div>
        </section>

        <section className="mobile-section" id="servicos">
          <div className="mobile-section-head">
            <span className="mobile-section-tag">{t.solutions.eyebrow}</span>
            <h2>{t.solutions.title}</h2>
          </div>
          <div className="mobile-card-stack">
            {t.solutions.items.map((item) => (
              <article key={item.title} className="mobile-info-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mobile-section" id="experiencia">
          <div className="mobile-section-head">
            <span className="mobile-section-tag">{t.about.eyebrow}</span>
            <h2>{t.about.title}</h2>
            <p>{t.about.description}</p>
          </div>
          <div className="mobile-highlight-grid">
            {t.about.items.map((item) => <div key={item.title} className="mobile-highlight-pill">{item.title}</div>)}
          </div>
        </section>

        <section className="mobile-section" id="projetos">
          <div className="mobile-section-head">
            <span className="mobile-section-tag">{t.featuredProjects.eyebrow}</span>
            <h2>{t.featuredProjects.title}</h2>
            <p>{t.featuredProjects.description}</p>
          </div>
          <div className="mobile-projects">
            {t.featuredProjects.items.map((project) => {
              const href = projectLinks[project.title] || "#contato";
              return (
                <a key={project.title} className="mobile-project-card" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                  <div className="mobile-project-logo-wrap">
                    <img src={projectLogos[project.title]} alt={project.title} className="mobile-project-logo" />
                  </div>
                  <div className="mobile-project-copy">
                    <span className="mobile-project-label">{project.tag}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <strong>{project.cta}</strong>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section className="mobile-section" id="impacto">
          <div className="mobile-section-head">
            <span className="mobile-section-tag">{t.impact.eyebrow}</span>
            <h2>{t.impact.title}</h2>
            <p>{t.impact.description}</p>
          </div>
          <div className="mobile-card-stack">
            {t.impact.items.map((item) => (
              <article key={item.title} className="mobile-info-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mobile-section" id="processo">
          <div className="mobile-section-head">
            <span className="mobile-section-tag">{t.process.eyebrow}</span>
            <h2>{t.process.title}</h2>
          </div>
          <div className="mobile-card-stack">
            {t.process.steps.map((step, index) => (
              <article key={step.title} className="mobile-info-card mobile-process-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mobile-section mobile-cta-section" id="contato">
          <span className="mobile-section-tag">{t.nav.contact}</span>
          <h2>{t.finalCta.title}</h2>
          <p>{t.finalCta.description}</p>
          <div className="mobile-hero-actions">
            <a className="mobile-btn mobile-btn-primary" href={CONTACT_WHATSAPP_HREF} target="_blank" rel="noreferrer">{t.nav.cta}</a>
          </div>
        </section>
      </main>

      <Footer
        t={t}
        contactEmail={CONTACT_EMAIL}
        whatsappNumber={WHATSAPP_NUMBER}
        language={language}
        setLanguage={setLanguage}
        languageOptions={languageOptions}
      />

      <FloatingWhatsAppButton />
      <CookieConsent t={t} />
    </div>
  );
}
