import { motion as Motion, useReducedMotion } from "framer-motion";

export default function CasesSection({ t }) {
  const reduceMotion = useReducedMotion();
  const impact = t.impact || t.cases;

  return (
    <Motion.section
      className="tt2-section tt2-impact-section"
      id="impacto"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="tt2-container">
        <div className="tt2-section-head tt2-section-head-center">
          <span className="tt2-kicker">{impact.eyebrow}</span>
          <h2>{impact.title}</h2>
          <p>{impact.description}</p>
        </div>

        <div className="tt2-impact-grid">
          {impact.items.map((item) => (
            <article key={item.title} className="tt2-impact-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </Motion.section>
  );
}