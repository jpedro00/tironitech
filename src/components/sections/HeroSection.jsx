import { motion as Motion, useReducedMotion } from "framer-motion";

export default function HeroSection({ t }) {
  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <Motion.section
      id="inicio"
      className="tt2-hero"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease }}
    >
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
          <Motion.h1
            className="tt2-hero-title"
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.38, ease }}
          >
            {t.hero.titleTop}
            <br />
            <span className="tt2-gradient-text">{t.hero.titleMiddle}</span>
            <br />
            <span className="tt2-gradient-text">{t.hero.titleBottom}</span>
          </Motion.h1>
        </div>

        <Motion.p
          className="tt2-hero-text"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.56, ease }}
        >
          {t.hero.description}
        </Motion.p>

        <Motion.div
          className="tt2-hero-actions"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
        >
          <a href="#contato" className="tt2-btn tt2-btn-primary">
            {t.hero.primaryCta}
          </a>
          <a href="#projetos" className="tt2-btn tt2-btn-ghost">
            {t.hero.secondaryCta}
          </a>
        </Motion.div>

        <div className="tt2-section-hero-bullets">
          {t.hero.bullets.map((item) => (
            <span key={item} className="tt2-cred-bullet">
              <i aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </Motion.section>
  );
}

