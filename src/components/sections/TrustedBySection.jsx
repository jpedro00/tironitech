const XNAMAI_CLIENT = {
  name: "XNAMAI",
  logo: "/assets/clients/xnamai.png",
};

function withXnamai(clients = []) {
  if (clients.some((client) => client.name === "XNAMAI")) return clients;
  return [...clients, XNAMAI_CLIENT];
}

export default function TrustedBySection({ t, clients }) {
  const allClients = withXnamai(clients);

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
            {[...allClients, ...allClients].map((client, index) => (
              <article
                className={`tt2-logo-card${client.name === "XNAMAI" ? " is-xnamai" : ""}`}
                key={`${client.name}-${index}`}
              >
                <img src={client.logo} alt={client.name} loading="lazy" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
