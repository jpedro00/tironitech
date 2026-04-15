import { useMemo, useState } from "react";
import "./styles/tironi-premium.css";

const clients = ["Casa", "Multiplier", "NewStore", "Coopermais"];

const services = [
  {
    eyebrow: "Software sob medida",
    title: "Sistemas e plataformas desenhados para o fluxo real do seu negócio.",
    text: "Criamos soluções web e estruturas digitais sob medida para empresas que precisam de clareza operacional, performance e evolução contínua.",
  },
  {
    eyebrow: "IA e automação",
    title: "Inteligência aplicada com foco em operação, eficiência e escala.",
    text: "Desenvolvemos automações, fluxos inteligentes, agentes e integrações para reduzir esforço manual e acelerar decisões.",
  },
  {
    eyebrow: "Dados e visibilidade",
    title: "Mais contexto para decidir, acompanhar e evoluir.",
    text: "Estruturamos dashboards, leitura de indicadores e organização de dados para dar previsibilidade ao negócio.",
  },
  {
    eyebrow: "Modernização",
    title: "Tecnologia mais alinhada ao presente e preparada para crescer.",
    text: "Reorganizamos sistemas, processos e experiências digitais para reduzir atrito e elevar a maturidade tecnológica da operação.",
  },
];

const featuredCases = [
  {
    tag: "Software sob medida",
    title: "Projeto sob medida para Multiplier",
    text: "Estrutura digital pensada para sustentar operação, clareza e crescimento com mais consistência.",
  },
  {
    tag: "Operação digital",
    title: "Estrutura tecnológica para NewStore",
    text: "Base técnica organizada com foco em robustez, performance e presença digital melhor resolvida.",
  },
  {
    tag: "Processos e gestão",
    title: "Solução para Coopermais",
    text: "Organização de fluxo operacional com tecnologia aplicada para reduzir atrito e ampliar previsibilidade.",
  },
  {
    tag: "Plataforma e presença",
    title: "Tecnologia aplicada para Casa",
    text: "Construção institucional e estrutural com foco em posicionamento, usabilidade e evolução contínua.",
  },
];

const metrics = [
  { value: "20+", label: "anos de experiência" },
  { value: "50+", label: "projetos de sucesso" },
  { value: "99%", label: "satisfação do cliente" },
  { value: "20+", label: "especialistas qualificados" },
  { value: "100+", label: "soluções inovadoras" },
];

function Navbar() {
  return (
    <header className="tt-nav-wrap">
      <div className="tt-container tt-nav">
        <a href="#home" className="tt-brand" aria-label="Ir para início">
          <div className="tt-brand-mark" aria-hidden="true">
            T
          </div>
          <div className="tt-brand-name">Tironi Tech</div>
        </a>

        <nav className="tt-links" aria-label="Navegação principal">
          <a href="#home">Início</a>
          <a href="#solutions">Soluções</a>
          <a href="#cases">Cases</a>
          <a href="#blog">Blog</a>
          <a href="#vision">Visão</a>
          <a href="#contact">Contato</a>
        </nav>

        <a href="#contact" className="tt-btn tt-btn-primary">
          Falar com especialista
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="tt-hero">
      <div className="tt-hero-glow tt-hero-glow-a" />
      <div className="tt-hero-glow tt-hero-glow-b" />

      <div className="tt-container tt-hero-grid">
        <div className="tt-hero-copy">
          <span className="tt-eyebrow">Software • IA • Produto digital</span>
          <h1>
            Tecnologia premium para empresas que querem crescer com
            <span> confiança, clareza e presença.</span>
          </h1>
          <p>
            Desenvolvemos software sob medida, automações com IA e estruturas
            digitais pensadas para negócios que precisam operar melhor, vender
            melhor e evoluir com consistência.
          </p>

          <div className="tt-hero-actions">
            <a href="#contact" className="tt-btn tt-btn-primary">
              Falar com especialista
            </a>
            <a href="#cases" className="tt-btn tt-btn-secondary">
              Ver cases
            </a>
          </div>

          <div className="tt-hero-trustline">
            Estratégia, construção e evolução digital com visão de produto e
            foco em resultado real.
          </div>
        </div>

        <div className="tt-showcase" aria-label="Showcase">
          <div className="tt-panel tt-panel-main">
            <span className="tt-chip">High-end delivery</span>
            <h3>Software, IA e produto digital sem cara de solução comum.</h3>
            <p>
              Estruturas mais robustas, design mais refinado e decisões mais
              inteligentes para negócios que não querem parecer genéricos.
            </p>
          </div>

          <div className="tt-floating tt-floating-a">Software</div>
          <div className="tt-floating tt-floating-b">IA aplicada</div>
          <div className="tt-floating tt-floating-c">Dados</div>
          <div className="tt-floating tt-floating-d">Consultoria</div>

          <div className="tt-client-stack" aria-label="Clientes">
            {clients.map((client) => (
              <div key={client} className="tt-client-pill">
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="tt-section" aria-label="Confiança e posicionamento">
      <div className="tt-container">
        <div className="tt-section-intro tt-section-intro-center">
          <span className="tt-eyebrow">Confiança e posicionamento</span>
          <h2>Uma presença pensada para atrair negócios maiores.</h2>
          <p>
            A Tironi Tech se posiciona como parceira para projetos de maior
            valor — com maturidade técnica, estética premium e clareza comercial.
          </p>
        </div>

        <div className="tt-logo-row" aria-label="Clientes e parceiros">
          {clients.map((client) => (
            <div key={client} className="tt-logo-card">
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="solutions" className="tt-section">
      <div className="tt-container">
        <div className="tt-section-intro">
          <span className="tt-eyebrow">Soluções</span>
          <h2>Oferta mais forte, mais clara e com cara de alto valor.</h2>
          <p>
            Em vez de uma lista comum de serviços, organizamos a Tironi Tech como
            uma empresa capaz de construir, modernizar e evoluir tecnologia de
            forma estratégica.
          </p>
        </div>

        <div className="tt-solutions-grid">
          {services.map((item, index) => (
            <article
              key={item.title}
              className={`tt-solution-card ${
                index === 0 ? "tt-solution-card-featured" : ""
              }`}
            >
              <span className="tt-chip">{item.eyebrow}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="#contact">Saiba mais</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AISection() {
  return (
    <section className="tt-ai-section" aria-label="IA com aplicação real">
      <div className="tt-container tt-ai-grid">
        <div className="tt-ai-copy">
          <span className="tt-eyebrow tt-eyebrow-light">IA com aplicação real</span>
          <h2>Automação inteligente com estética premium e função de negócio.</h2>
          <p>
            Nada de hype vazio. A Tironi Tech pode se apresentar como parceira
            para automações, agentes, processos inteligentes e fluxos digitais
            mais eficientes — com comunicação visual à altura dessa proposta.
          </p>

          <ul>
            <li>Automação de processos</li>
            <li>Fluxos inteligentes e agentes</li>
            <li>Integração de dados e operação</li>
            <li>Mais velocidade com mais contexto</li>
          </ul>
        </div>

        <div className="tt-ai-panels">
          <div className="tt-ai-card">
            <span>Automação</span>
            <strong>Menos esforço manual</strong>
          </div>
          <div className="tt-ai-card">
            <span>IA aplicada</span>
            <strong>Mais inteligência operacional</strong>
          </div>
          <div className="tt-ai-card">
            <span>Produto digital</span>
            <strong>Mais clareza e diferenciação</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function CasesSection() {
  return (
    <section id="cases" className="tt-section">
      <div className="tt-container">
        <div className="tt-section-intro">
          <span className="tt-eyebrow">Cases</span>
          <h2>Projetos com contexto, presença e confiança.</h2>
          <p>
            Sem inventar resultados. A ideia aqui é apresentar categoria,
            natureza da entrega e maturidade da solução de forma premium.
          </p>
        </div>

        <div className="tt-cases-grid">
          <article className="tt-case-feature">
            <div className="tt-case-overlay" />
            <span className="tt-chip">{featuredCases[0].tag}</span>
            <h3>{featuredCases[0].title}</h3>
            <p>{featuredCases[0].text}</p>
            <a href="#contact">Quero uma solução assim</a>
          </article>

          <div className="tt-case-side">
            {featuredCases.slice(1).map((item) => (
              <article key={item.title} className="tt-case-card">
                <span className="tt-chip">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricsSection() {
  return (
    <section className="tt-section tt-metrics-section" aria-label="Métricas">
      <div className="tt-container">
        <div className="tt-metrics-band">
          {metrics.map((item) => (
            <div key={item.label} className="tt-metric-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section id="vision" className="tt-section">
      <div className="tt-container">
        <div className="tt-section-intro">
          <span className="tt-eyebrow">Visão e método</span>
          <h2>Estratégia, arquitetura, construção e evolução contínua.</h2>
        </div>

        <div className="tt-method-grid">
          {[
            {
              title: "Estratégia",
              text: "Entendimento do negócio, do objetivo e do que realmente precisa ser construído.",
            },
            {
              title: "Arquitetura",
              text: "Solução pensada com base técnica sólida, clareza estrutural e visão de produto.",
            },
            {
              title: "Construção",
              text: "Desenvolvimento com foco em confiabilidade, qualidade e manutenção saudável.",
            },
            {
              title: "Evolução",
              text: "Melhoria contínua, refinamento de processo e novas etapas com mais maturidade.",
            },
          ].map((item) => (
            <article key={item.title} className="tt-method-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section id="blog" className="tt-section">
      <div className="tt-container">
        <div className="tt-section-intro">
          <span className="tt-eyebrow">Blog e insights</span>
          <h2>Autoridade, conteúdo e inteligência de posicionamento.</h2>
          <p>
            A presença de conteúdo deve reforçar a percepção da Tironi Tech como
            empresa que entende produto, operação, IA e crescimento digital.
          </p>
        </div>

        <div className="tt-blog-grid">
          {[
            "Como aplicar IA com governança (sem criar caos operacional)",
            "Quando um software sob medida faz sentido",
            "O que separa uma operação digital madura de uma improvisada",
          ].map((title) => (
            <article key={title} className="tt-blog-card">
              <span className="tt-blog-label">Artigo</span>
              <h3>{title}</h3>
              <a href="#contact">Explorar</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contact" className="tt-section" aria-label="Contato">
      <div className="tt-container">
        <div className="tt-cta-box">
          <div>
            <span className="tt-eyebrow">Contato</span>
            <h2>Vamos construir a próxima solução da sua empresa.</h2>
            <p>
              Fale com a Tironi Tech para estruturar software, IA e experiências
              digitais com mais valor percebido, clareza e solidez.
            </p>
          </div>

          <div className="tt-cta-actions">
            <a className="tt-btn tt-btn-primary" href="mailto:tironi@tironitech.com">
              Enviar email
            </a>
            <a className="tt-btn tt-btn-secondary" href="tel:+5585999498149">
              Ligar agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="tt-footer" aria-label="Rodapé">
      <div className="tt-container tt-footer-grid">
        <div>
          <div className="tt-brand tt-footer-brand">
            <div className="tt-brand-mark" aria-hidden="true">
              T
            </div>
            <div className="tt-brand-name">Tironi Tech</div>
          </div>
          <p>
            Software sob medida, automação em IA e tecnologia estruturada para
            empresas que querem crescer com confiança.
          </p>
        </div>

        <div>
          <h4>Navegação</h4>
          <a href="#home">Início</a>
          <a href="#solutions">Soluções</a>
          <a href="#cases">Cases</a>
          <a href="#blog">Blog</a>
        </div>

        <div>
          <h4>Contato</h4>
          <a href="mailto:tironi@tironitech.com">tironi@tironitech.com</a>
          <a href="tel:+5585999498149">(85) 99949-8149</a>
          <p>Rua Prates, 194 - Bom Retiro, São Paulo - SP, 01121-000</p>
        </div>
      </div>
    </footer>
  );
}

function LeadConcierge() {
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState("Quero falar com um especialista");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
  });

  const message = useMemo(() => {
    return `Olá, vim pelo site da Tironi Tech.
Tipo de projeto: ${project}
Nome: ${form.name || "-"}
Empresa: ${form.company || "-"}
Email: ${form.email || "-"}

Gostaria de falar com um especialista.`;
  }, [project, form]);

  const whatsappUrl = `https://wa.me/5585999498149?text=${encodeURIComponent(message)}`;
  const mailtoUrl = `mailto:tironi@tironitech.com?subject=${encodeURIComponent(
    "Briefing | Tironi Tech"
  )}&body=${encodeURIComponent(message)}`;
  const canProceed = Boolean(form.name.trim() && form.email.trim());

  return (
    <div className="tt-concierge">
      {open ? (
        <div className="tt-concierge-card" role="dialog" aria-label="Concierge Tironi">
          <div className="tt-concierge-head">
            <div>
              <strong>Concierge Tironi</strong>
              <span>Online agora</span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Fechar concierge">
              ×
            </button>
          </div>

          <div className="tt-concierge-body">
            <div className="tt-concierge-msg">
              Posso direcionar sua demanda para o especialista certo com mais
              rapidez.
            </div>

            <div className="tt-concierge-options" aria-label="Atalhos de demanda">
              {[
                "Quero desenvolver um sistema",
                "Quero IA e automação",
                "Quero modernizar uma operação",
                "Quero falar com um especialista",
              ].map((item) => (
                <button
                  type="button"
                  key={item}
                  className={project === item ? "active" : ""}
                  onClick={() => setProject(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="tt-concierge-form" aria-label="Seus dados">
              <input
                placeholder="Seu nome"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                autoComplete="name"
              />
              <input
                placeholder="Sua empresa"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                autoComplete="organization"
              />
              <input
                type="email"
                placeholder="Seu email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                autoComplete="email"
              />
            </div>

            <div className="tt-concierge-actions">
              <a
                className={`tt-btn tt-btn-primary ${canProceed ? "" : "is-disabled"}`}
                href={canProceed ? whatsappUrl : undefined}
                onClick={(e) => {
                  if (!canProceed) e.preventDefault();
                }}
                target="_blank"
                rel="noreferrer"
                aria-disabled={!canProceed}
              >
                Falar no WhatsApp
              </a>
              <a className="tt-btn tt-btn-secondary" href={mailtoUrl}>
                Enviar briefing
              </a>
            </div>
          </div>
        </div>
      ) : (
        <button className="tt-concierge-fab" onClick={() => setOpen(true)}>
          Falar com especialista
        </button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <SolutionsSection />
        <AISection />
        <CasesSection />
        <MetricsSection />
        <VisionSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
      <LeadConcierge />
    </>
  );
}

