import { motion as Motion, useReducedMotion } from "framer-motion";
import LeadDiagnosisWidget from "../LeadDiagnosisWidget";

export default function FinalCtaSection({ t, contactEmail, whatsappNumber }) {
  const reduceMotion = useReducedMotion();

  return (
    <Motion.section
      id="contato"
      className="tt2-section tt2-final-cta"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="tt2-container">
        <div className="tt2-section-head tt2-section-head-center">
          <h2>{t.finalCta.title}</h2>
          <p>{t.finalCta.description}</p>
        </div>

        <LeadDiagnosisWidget
          t={t}
          contactEmail={contactEmail}
          whatsappNumber={whatsappNumber}
          scheduleHref="#contato"
        />
      </div>
    </Motion.section>
  );
}

