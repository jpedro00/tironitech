import { motion as Motion, useReducedMotion } from "framer-motion";

export default function HeroSection({ t }) {
  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <Motion.section
      id="inicio"
      className="tt2-hero tt2-corporate-hero"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease }}
    >
      <div className="tt2-container tt2-hero-inner tt2-hero-inner-simple">
        <div className="tt2-hero-copy">
          <span className="tt2-hero-badge">{t.hero.eyebrow}</span>
          <h1 className="tt2-hero-title">{t.hero.title}</h1>
          <p className="tt2-hero-text">{t.hero.description}</p>

          <div className="tt2-hero-actions">
            <a href="#contato" className="tt2-btn tt2-btn-primary">
              {t.hero.primaryCta}
            </a>
            <a href="#solucoes" className="tt2-btn tt2-btn-ghost">
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </Motion.section>
  );
}
