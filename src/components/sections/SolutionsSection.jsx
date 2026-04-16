import { motion as Motion, useReducedMotion } from "framer-motion";

export default function SolutionsSection({ t }) {
  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section id="solucoes" className="tt2-section tt2-services-section">
      <div className="tt2-container">
        <div className="tt2-section-head tt2-section-head-center">
          <span className="tt2-kicker">{t.solutions.eyebrow}</span>
          <h2>{t.solutions.title}</h2>
        </div>

        <div className="tt2-service-cards">
          {t.solutions.items.map((item, index) => (
            <Motion.article
              key={item.title}
              className="tt2-service-card"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.04 * index, ease }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

