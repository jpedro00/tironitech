export default function CasesSection({ t }) {
  const impact = t.impact || t.cases;

  return (
    <section className="tt2-section tt2-impact-section" id="impacto">
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
    </section>
  );
}