import LeadDiagnosisWidget from "../LeadDiagnosisWidget";

export default function FinalCtaSection({ t, contactEmail, whatsappNumber }) {
  return (
    <section id="contato" className="tt2-section tt2-final-cta">
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
    </section>
  );
}

