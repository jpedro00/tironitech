import { motion as Motion, useReducedMotion } from "framer-motion";
import CountUpStat from "../shared/CountUpStat";

export default function ExperienceStatsSection({ t }) {
  const reduceMotion = useReducedMotion();
  const metrics = t.experienceProof?.metrics || t.hero.authority || [];

  if (!t.experienceProof || metrics.length === 0) return null;

  return (
    <Motion.section
      className="tt2-section tt2-stats-footer-section"
      aria-label={t.experienceProof.title}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="tt2-container tt2-experience-proof tt2-stats-footer">
        <div className="tt2-proof-mini-grid" aria-label={t.experienceProof.title}>
          {metrics.map((item) => (
            <CountUpStat key={`${item.value}-${item.label}`} value={item.value} label={item.label} className="tt2-proof-mini-card" />
          ))}
        </div>
      </div>
    </Motion.section>
  );
}
