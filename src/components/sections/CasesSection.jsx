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
          <article className="tt2-case-card">
            <h3>Plataformas e Sistemas</h3>
            <p>Construção com estrutura, desempenho e narrativa premium para maior confiança comercial.</p>
          </article>
          <article className="tt2-case-card">
            <h3>Automação e IA aplicada</h3>
            <p>Redução de atrito operacional com fluxos inteligentes e integrações consistentes.</p>
          </article>
          <article className="tt2-case-card">
            <h3>Presença digital</h3>
            <p>Interface, posicionamento e credibilidade com design e tecnologia trabalhando juntos.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

