import { motion as Motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

function ProjectLogo({ title }) {
  const [error, setError] = useState(false);

  const src = useMemo(() => {
    const t = String(title || "").toLowerCase();
    if (t.includes("deleteactpro")) return "/projects/deleteactpro-logo.png";
    if (t.includes("sign") || t.includes("wallet")) return "/projects/sign-wallet-logo.png";
    return "";
  }, [title]);

  const fallback = useMemo(() => {
    const t = String(title || "").toLowerCase();
    if (t.includes("deleteactpro")) return "DA";
    if (t.includes("sign") || t.includes("wallet")) return "SW";
    return "•";
  }, [title]);

  if (!src || error) {
    return <div className="tt2-project-logo-fallback">{fallback}</div>;
  }

  return (
    <img
      className="tt2-project-logo"
      src={src}
      alt={title}
      loading="lazy"
      decoding="async"
      onError={() => setError(true)}
    />
  );
}

export default function FeaturedProjectsSection({ t }) {
  const reduceMotion = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section id="projetos" className="tt2-featured-projects">
      <div className="tt2-container">
        <div className="tt2-section-head">
          <span className="tt2-kicker">{t.featuredProjects.eyebrow}</span>
          <h2>{t.featuredProjects.title}</h2>
          <p>{t.featuredProjects.description}</p>
        </div>

        <div className="tt2-featured-grid">
          {t.featuredProjects.items.map((item, index) => (
            <Motion.article
              key={item.title}
              className="tt2-featured-card"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.05 * index, ease }}
            >
              <div className="tt2-featured-top">
                <span className="tt2-featured-tag">{item.tag}</span>
                <ProjectLogo title={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="tt2-featured-bullets">
                {item.bullets.map((b) => (
                  <span key={b}>{b}</span>
                ))}
              </div>

              <a className="tt2-featured-cta" href="#contato">
                {item.cta}
              </a>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

