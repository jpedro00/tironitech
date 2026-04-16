export default function TrustedBySection({ t, clients }) {
  return (
    <section id="clientes" className="tt2-section tt2-clients-section">
      <div className="tt2-container">
        <div className="tt2-section-head tt2-section-head-center">
          <span className="tt2-kicker">{t.trustedBy.title}</span>
          <h2>{t.trustedBy.title}</h2>
          <p>{t.trustedBy.description}</p>
        </div>

        <div className="tt2-logo-marquee">
          <div className="tt2-logo-track">
            {[...clients, ...clients].map((client, index) => (
              <article className="tt2-logo-card" key={`${client.name}-${index}`}>
                <img src={client.logo} alt={client.name} loading="lazy" />
              </article>
            ))}
          </div>
        </div>

        <div className="tt2-clients-grid">
          {clients.map((client) => (
            <article key={client.name} className="tt2-client-grid-card">
              <img src={client.logo} alt={client.name} loading="lazy" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

