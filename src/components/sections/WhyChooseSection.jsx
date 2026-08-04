import { motion as Motion, useReducedMotion } from "framer-motion";

export default function WhyChooseSection({ t }) {
  const reduceMotion = useReducedMotion();

  return (
    <Motion.section
      className="tt2-section tt2-why-section"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="tt2-container tt2-why-layout">
        <div className="tt2-section-copy">
          <span className="tt2-kicker">{t.whyChoose.eyebrow}</span>
          <h2>{t.whyChoose.title}</h2>
        </div>

        <div className="tt2-why-grid">
          {t.whyChoose.items.map((item) => (
            <article key={item.title} className="tt2-why-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </Motion.section>
  );
}