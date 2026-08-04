import { motion as Motion, useReducedMotion } from "framer-motion";

const XNAMAI_CLIENT = {
  name: "XNAMAI",
  logo: "/assets/clients/xnamai.png",
};

function withXnamai(clients = []) {
  if (clients.some((client) => client.name === "XNAMAI")) return clients;
  return [...clients, XNAMAI_CLIENT];
}

export default function TrustedBySection({ t, clients }) {
  const reduceMotion = useReducedMotion();
  const logoClients = withXnamai(clients);
  const repeatedItems = [...logoClients, ...logoClients, ...logoClients];

  return (
    <Motion.section
      id="clientes"
      className="tt2-section tt2-clients-section"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
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
            <article
              className={`tt2-logo-card tt2-marquee-card${client.name === "XNAMAI" ? " is-dark" : ""}${client.name === "Ziquita Agro-Paraná" ? " is-ziquita" : ""}`}
              key={`${client.name}-${index}`}
            >
              <img src={client.logo} alt={client.name} loading="lazy" />
            </article>
          ))}
        </div>
      </div>
    </Motion.section>
  );
}
