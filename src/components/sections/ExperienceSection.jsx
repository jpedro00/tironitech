import { useRef } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";

export default function ExperienceSection({ t }) {
  const dragAreaRef = useRef(null);
  const reduceMotion = useReducedMotion();

  return (
    <section className="tt2-section tt2-interactive-section" id="experiencia">
      <div className="tt2-container tt2-experience-layout">
        <div className="tt2-section-copy">
          <span className="tt2-kicker">{t.experience.eyebrow}</span>
          <h2>{t.experience.title}</h2>
          <p>{t.experience.description}</p>

          <div className="tt2-capabilities">
            {t.experience.pills.map((pill) => (
              <div key={pill} className="tt2-capability-chip">
                {pill}
              </div>
            ))}
          </div>
        </div>

        <div className="tt2-system-visual" ref={dragAreaRef}>
          {t.experience.cards.slice(0, 4).map((card, index) => (
            <Motion.div
              key={`${card.tag}-${index}`}
              className={`tt2-system-card tt2-system-card-${index + 1}`}
              drag={!reduceMotion}
              dragConstraints={dragAreaRef}
              dragElastic={0.16}
              dragMomentum={false}
              dragSnapToOrigin
              whileDrag={{ scale: 1.03, zIndex: 50, cursor: "grabbing" }}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
            >
              <span className="tt2-system-pill">{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

