export default function ExperienceSection({ t }) {
  return (
    <section className="tt2-section tt2-about-section" id="experiencia">
      <div className="tt2-container tt2-about-layout">
        <div className="tt2-section-copy">
          <span className="tt2-kicker">{t.about.eyebrow}</span>
          <h2>{t.about.title}</h2>
          <p>{t.about.description}</p>

          <div className="tt2-capabilities">
            {t.experience.pills.map((pill) => (
              <div key={pill} className="tt2-capability-chip">
                {pill}
              </div>
            ))}
          </div>
        </div>

        <div className="tt2-about-card-grid">
          {t.about.items.map((item) => (
            <article key={item.title} className="tt2-about-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="tt2-container tt2-method-band">
        <div className="tt2-section-head tt2-section-head-center">
          <span className="tt2-kicker">{t.experience.eyebrow}</span>
          <h2>{t.experience.title}</h2>
          <p>{t.experience.description}</p>
        </div>

        <div className="tt2-method-cards">
          {t.experience.cards.map((card) => (
            <article key={card.title} className="tt2-method-card">
              <span>{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}