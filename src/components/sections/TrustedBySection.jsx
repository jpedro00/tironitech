const XNAMAI_CLIENT = {
  name: "XNAMAI",
  logo: "/assets/clients/xnamai.png",
};

function withXnamai(clients = []) {
  if (clients.some((client) => client.name === "XNAMAI")) return clients;
  return [...clients, XNAMAI_CLIENT];
}

export default function TrustedBySection({ t, clients }) {
  const logoClients = withXnamai(clients);
  const repeatedItems = [...logoClients, ...logoClients, ...logoClients];

  return (
    <section id="clientes" className="tt2-section tt2-clients-section">
      <div className="tt2-container">
        <div className="tt2-section-head tt2-section-head-center">
          <span className="tt2-kicker">{t.nav.clients}</span>
          <h2>{t.trustedBy.title}</h2>
          <p>{t.trustedBy.description}</p>
        </div>
      </div>

      <div className="tt2-logo-marquee tt2-project-marquee" aria-label={t.trustedBy.title}>
        <div className="tt2-logo-track">
          {repeatedItems.map((client, index) => (
            <article className={`tt2-logo-card tt2-marquee-card${client.name === "XNAMAI" ? " is-dark" : ""}`} key={`${client.name}-${index}`}>
              <img src={client.logo} alt={client.name} loading="lazy" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
