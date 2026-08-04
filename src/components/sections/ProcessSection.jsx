import { motion as Motion, useReducedMotion } from "framer-motion";

export default function ProcessSection({ t }) {
  const reduceMotion = useReducedMotion();

  return (
    <Motion.section
      className="tt2-section tt2-process-section"
      id="processo"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="tt2-container">
        <div className="tt2-section-head tt2-section-head-center">
          <span className="tt2-kicker">{t.process.eyebrow}</span>
          <h2>{t.process.title}</h2>
        </div>

        <div className="tt2-process-timeline">
          {t.process.steps.map((step, index) => (
            <article key={step.title} className="tt2-process-step">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </Motion.section>
  );
}