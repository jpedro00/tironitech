export default function WhyChooseSection({ t }) {
  return (
    <section className="tt2-section tt2-why-section">
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
    </section>
  );
}