import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./styles/tironi-odois.css";
import { getText, LANGUAGE_OPTIONS } from "./tironiI18n";

const CONTACT_EMAIL = "tironi@tironitech.com";
const WHATSAPP_NUMBER = "5585999498149";

/** Valores exibidos na seção Destaques da Tironi Tech. */
const HIGHLIGHT_VALUES = ["20+", "50+", "99%", "20+", "100+"];

const CLIENTS = [
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
];

function Header({ t, language, setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="tt2-header">
      <div className="tt2-container tt2-header-inner">
        <a href="#inicio" className="tt2-brand" onClick={closeMenu}>
          <div className="tt2-brand-mark">T</div>
          <div className="tt2-brand-copy">
            <strong>Tironi Tech</strong>
            <span>{t.brandSubtitle}</span>
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
          <a href="#servicos" onClick={closeMenu}>
            {t.nav.services}
          </a>
          <a href="#clientes" onClick={closeMenu}>
            {t.nav.clients}
          </a>
          <a href="#sistemas" onClick={closeMenu}>
            {t.nav.systems}
          </a>
          <a href="#cases" onClick={closeMenu}>
            {t.nav.cases}
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
              {LANGUAGE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <a className="tt2-btn tt2-btn-primary tt2-header-cta" href="#contato" onClick={closeMenu}>
            {t.nav.talk}
          </a>
        </div>
      </div>
      {menuOpen ? (
        <button type="button" className="tt2-nav-backdrop" aria-label="Fechar menu" onClick={closeMenu} />
      ) : null}
    </header>
  );
}

function Hero({ t }) {
  return (
    <section id="inicio" className="tt2-hero">
      <div className="tt2-hero-bg">
        <div className="tt2-blur tt2-blur-a" />
        <div className="tt2-blur tt2-blur-b" />
        <div className="tt2-grid-overlay" />
      </div>

      <div className="tt2-hero-bg-bubbles" aria-hidden="true">
        <span className="tt2-bg-bubble tt2-bg-bubble-1" />
        <span className="tt2-bg-bubble tt2-bg-bubble-2" />
        <span className="tt2-bg-bubble tt2-bg-bubble-3" />
        <span className="tt2-bg-bubble tt2-bg-bubble-4" />
        <span className="tt2-bg-bubble tt2-bg-bubble-5" />
        <span className="tt2-bg-bubble tt2-bg-bubble-6" />
        <span className="tt2-bg-bubble tt2-bg-bubble-7" />
        <span className="tt2-bg-bubble tt2-bg-bubble-8" />
        <span className="tt2-bg-bubble tt2-bg-bubble-9" />
        <span className="tt2-bg-bubble tt2-bg-bubble-10" />
        <span className="tt2-bg-bubble tt2-bg-bubble-11" />
        <span className="tt2-bg-bubble tt2-bg-bubble-12" />
      </div>

      <div className="tt2-container tt2-hero-inner">
        <div className="tt2-hero-title-wrap">
          <h1 className="tt2-hero-title">
            {t.hero.line1}
            <br />
            {t.hero.line2Before}
            <span className="tt2-gradient-text">{t.hero.line2Highlight}</span>
            <br />
            {t.hero.line3Before}
            <span className="tt2-gradient-text">{t.hero.line3Highlight}</span>
          </h1>
        </div>

        <p className="tt2-hero-text">{t.hero.text}</p>

        <div className="tt2-hero-actions">
          <a href="#contato" className="tt2-btn tt2-btn-primary">
            {t.hero.primary}
          </a>
          <a href="#cases" className="tt2-btn tt2-btn-ghost">
            {t.hero.secondary}
          </a>
        </div>

        <div id="servicos" className="tt2-service-cards">
          {t.hero.services.map((service) => (
            <article key={service.title} className="tt2-service-card">
              <div className="tt2-service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <strong>{service.subtitle}</strong>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsSection({ t }) {
  return (
    <section id="clientes" className="tt2-section tt2-clients-section">
      <div className="tt2-container">
        <div className="tt2-section-head tt2-section-head-center">
          <span className="tt2-kicker">{t.clients.kicker}</span>
          <h2>{t.clients.title}</h2>
          <p>{t.clients.text}</p>
        </div>

        <div className="tt2-logo-marquee">
          <div className="tt2-logo-track">
            {[...CLIENTS, ...CLIENTS].map((client, index) => (
              <article className="tt2-logo-card" key={`${client.name}-${index}`}>
                <img src={client.logo} alt={client.name} loading="lazy" />
              </article>
            ))}
          </div>
        </div>

        <div className="tt2-clients-grid">
          {CLIENTS.map((client) => (
            <article key={client.name} className="tt2-client-grid-card">
              <img src={client.logo} alt={client.name} loading="lazy" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InteractiveSystemsSection({ t }) {
  const cards = t.interactive.cards;
  const dragAreaRef = useRef(null);

  return (
    <section id="sistemas" className="tt2-section tt2-interactive-section">
      <div className="tt2-container tt2-interactive-layout">
        <div className="tt2-section-copy">
          <span className="tt2-kicker">{t.interactive.kicker}</span>
          <h2>{t.interactive.title}</h2>
          <p>{t.interactive.text}</p>

          <div className="tt2-capabilities">
            {t.interactive.chips.map((chip) => (
              <div key={chip} className="tt2-capability-chip">
                {chip}
              </div>
            ))}
          </div>
        </div>

        <div className="tt2-system-visual" ref={dragAreaRef}>
          {cards.slice(0, 4).map((card, index) => (
            <motion.div
              key={`${card.label}-${index}`}
              className={`tt2-system-card tt2-system-card-${index + 1}`}
              drag
              dragConstraints={dragAreaRef}
              dragElastic={0.16}
              dragMomentum={false}
              dragSnapToOrigin
              whileDrag={{ scale: 1.03, zIndex: 50, cursor: "grabbing" }}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
            >
              <span className="tt2-system-pill">{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HighlightsSection({ t }) {
  return (
    <section className="tt2-section tt2-section-soft">
      <div className="tt2-container">
        <div className="tt2-section-head tt2-section-head-center">
          <span className="tt2-kicker">{t.highlights.kicker}</span>
          <h2>{t.highlights.title}</h2>
          <p>{t.highlights.text}</p>
        </div>

        <div className="tt2-stats-grid">
          {t.highlights.labels.map((label, index) => (
            <article key={label} className="tt2-stat-card">
              <strong className="tt2-stat-value">{HIGHLIGHT_VALUES[index]}</strong>
              <span className="tt2-stat-label">{label}</span>
            </article>
          ))}
        </div>

        <p className="tt2-mini-note">{t.highlights.note}</p>
      </div>
    </section>
  );
}

function CasesSection({ t }) {
  return (
    <section id="cases" className="tt2-section">
      <div className="tt2-container">
        <div className="tt2-section-head">
          <span className="tt2-kicker">{t.cases.kicker}</span>
          <h2>{t.cases.title}</h2>
          <p>{t.cases.text}</p>
        </div>

        <div className="tt2-cases-grid">
          <article className="tt2-case-feature">
            <div className="tt2-case-gradient" />
            <span>{t.cases.featureTag}</span>
            <h3>{t.cases.featureTitle}</h3>
            <p>{t.cases.featureText}</p>
            <a href="#contato">{t.cases.featureLink}</a>
          </article>

          <div className="tt2-case-list">
            {t.cases.list.map((item) => (
              <article key={item.title} className="tt2-case-card">
                <small>{item.tag}</small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection({ t }) {
  return (
    <section id="contato" className="tt2-section">
      <div className="tt2-container">
        <div className="tt2-cta-box">
          <div className="tt2-cta-copy">
            <span className="tt2-kicker">{t.cta.kicker}</span>
            <h2>{t.cta.title}</h2>
            <p>{t.cta.text}</p>
          </div>

          <div className="tt2-cta-actions">
            <a href={`mailto:${CONTACT_EMAIL}`} className="tt2-btn tt2-btn-primary">
              {t.cta.email}
            </a>
            <a href="#lead-assistant" className="tt2-btn tt2-btn-ghost">
              {t.cta.chat}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="tt2-footer">
      <div className="tt2-container tt2-footer-grid">
        <div>
          <div className="tt2-brand tt2-footer-brand">
            <div className="tt2-brand-mark">T</div>
            <div className="tt2-brand-copy">
              <strong>Tironi Tech</strong>
              <span>{t.brandSubtitle}</span>
            </div>
          </div>
          <p>{t.footer.about}</p>
        </div>

        <div>
          <h4>{t.footer.navTitle}</h4>
          <a href="#inicio">{t.nav.home}</a>
          <a href="#servicos">{t.nav.services}</a>
          <a href="#clientes">{t.nav.clients}</a>
          <a href="#sistemas">{t.nav.systems}</a>
          <a href="#cases">{t.nav.cases}</a>
        </div>

        <div>
          <h4>{t.footer.contactTitle}</h4>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href="tel:+5585999498149">(85) 99949-8149</a>
          <span>{t.footer.address1}</span>
          <span>{t.footer.address2}</span>
        </div>
      </div>
    </footer>
  );
}

function LeadAssistant({ t, language }) {
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState(() => t.assistant.options[0]);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
  });

  useEffect(() => {
    setSubject(getText(language).assistant.options[0]);
  }, [language]);

  const message = useMemo(() => {
    const a = t.assistant;
    return `${a.msgHead}
${a.subjectLabel}: ${subject}
${a.msgName}: ${form.name || "-"}
${a.msgCompany}: ${form.company || "-"}
${a.msgEmail}: ${form.email || "-"}

${a.msgFooter}`;
  }, [form, subject, t.assistant]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div id="lead-assistant" className="tt2-assistant">
      {open ? (
        <div className="tt2-assistant-card">
          <div className="tt2-assistant-head">
            <div>
              <strong>{t.assistant.title}</strong>
              <span>{t.assistant.status}</span>
            </div>

            <button type="button" onClick={() => setOpen(false)} aria-label="Close">
              ×
            </button>
          </div>

          <div className="tt2-assistant-body">
            <p>{t.assistant.intro}</p>

            <div className="tt2-assistant-options">
              {t.assistant.options.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={subject === item ? "active" : ""}
                  onClick={() => setSubject(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="tt2-assistant-form">
              <input
                type="text"
                placeholder={t.assistant.placeholders.name}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="text"
                placeholder={t.assistant.placeholders.company}
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
              <input
                type="email"
                placeholder={t.assistant.placeholders.email}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="tt2-assistant-actions">
              <a
                className="tt2-btn tt2-btn-primary"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.assistant.whatsapp}
              </a>

              <a className="tt2-btn tt2-btn-ghost" href={`mailto:${CONTACT_EMAIL}`}>
                {t.assistant.email}
              </a>
            </div>
          </div>
        </div>
      ) : (
        <button type="button" className="tt2-assistant-fab" onClick={() => setOpen(true)}>
          {t.assistant.fab}
        </button>
      )}
    </div>
  );
}

function CursorOrb() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isDesktop) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId = 0;

    const interactiveSelector = [
      "a",
      "button",
      "input",
      "select",
      "textarea",
      ".tt2-service-card",
      ".tt2-float-card",
      ".tt2-logo-card",
      ".tt2-client-grid-card",
      ".tt2-case-card",
      ".tt2-case-feature",
      ".tt2-capability-chip",
      ".tt2-stat-card",
      ".tt2-btn",
    ].join(",");

    document.body.classList.remove("tt2-cursor-hidden");

    const animate = () => {
      dotX += (mouseX - dotX) * 0.34;
      dotY += (mouseY - dotY) * 0.34;
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      rafId = window.requestAnimationFrame(animate);
    };

    const handleMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      const isInteractive = !!event.target.closest(interactiveSelector);

      if (dotRef.current) {
        dotRef.current.classList.toggle("is-active", isInteractive);
      }

      if (ringRef.current) {
        ringRef.current.classList.toggle("is-active", isInteractive);
      }
    };

    const handleLeave = () => {
      document.body.classList.add("tt2-cursor-hidden");
    };

    const handleEnter = () => {
      document.body.classList.remove("tt2-cursor-hidden");
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      window.cancelAnimationFrame(rafId);
      document.body.classList.remove("tt2-cursor-hidden");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="tt2-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="tt2-cursor-dot" aria-hidden="true" />
    </>
  );
}

export default function App() {
  const [language, setLanguage] = useState("pt");
  const t = getText(language);

  return (
    <div className="tt2-page">
      <div className="tt2-global-stars" aria-hidden="true">
        <span className="tt2-star s1" />
        <span className="tt2-star s2" />
        <span className="tt2-star s3" />
        <span className="tt2-star s4" />
        <span className="tt2-star s5" />
        <span className="tt2-star s6" />
        <span className="tt2-star s7" />
        <span className="tt2-star s8" />
        <span className="tt2-star s9" />
        <span className="tt2-star s10" />
        <span className="tt2-star s11" />
        <span className="tt2-star s12" />
        <span className="tt2-star s13" />
        <span className="tt2-star s14" />
        <span className="tt2-star s15" />
        <span className="tt2-star s16" />
        <span className="tt2-star s17" />
        <span className="tt2-star s18" />
        <span className="tt2-star s19" />
        <span className="tt2-star s20" />
        <span className="tt2-star s21" />
        <span className="tt2-star s22" />
        <span className="tt2-star s23" />
        <span className="tt2-star s24" />
        <span className="tt2-star s25" />
        <span className="tt2-star s26" />
        <span className="tt2-star s27" />
        <span className="tt2-star s28" />
        <span className="tt2-star s29" />
        <span className="tt2-star s30" />
        <span className="tt2-star s31 tt2-star-premium" />
        <span className="tt2-star s32 tt2-star-premium" />
        <span className="tt2-star s33 tt2-star-premium" />
        <span className="tt2-star s34 tt2-star-premium" />
      </div>

      <div className="tt2-page-inner">
        <CursorOrb />
        <Header t={t} language={language} setLanguage={setLanguage} />
        <main>
          <Hero t={t} />
          <ClientsSection t={t} />
          <InteractiveSystemsSection t={t} />
          <HighlightsSection t={t} />
          <CasesSection t={t} />
          <CTASection t={t} />
        </main>
        <Footer t={t} />
        <LeadAssistant t={t} language={language} />
      </div>
    </div>
  );
}
