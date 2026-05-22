export default function CasesSection({ t }) {
  return (
    <section className="tt2-section tt2-cases-section">
      <div className="tt2-container">
        <div className="tt2-section-head">
          <span className="tt2-kicker">{t.cases.eyebrow}</span>
          <h2>{t.cases.title}</h2>
          <p>{t.cases.description}</p>
        </div>

        <div className="tt2-case-list">
          {t.cases.items.map((item) => (
            <article key={item.title} className="tt2-case-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

