import { useMemo, useState, useEffect } from "react";
import "./styles/tironi-zallpy.css";

const CONTACT_EMAIL = "tironi@tironitech.com";
const WHATSAPP_NUMBER = "5585999498149";

const trustItems = [
  { value: "Software", label: "sob medida para operações reais" },
  { value: "IA", label: "e automação aplicada ao negócio" },
  { value: "Produto", label: "digital com visão de evolução" },
  { value: "Parceira", label: "tecnológica de longo prazo" },
];

const solutions = [
  {
    title: "Software sob medida",
    text: "Desenvolvimento de sistemas, plataformas e produtos digitais alinhados à realidade operacional da empresa.",
  },
  {
    title: "IA e automação",
    text: "Automatização de fluxos, inteligência aplicada e ganho de eficiência com mais clareza e controle.",
  },
  {
    title: "Modernização tecnológica",
    text: "Reestruturação de sistemas, processos e experiências digitais para negócios em crescimento.",
  },
  {
    title: "Dados e operação",
    text: "Soluções para organização, visibilidade e leitura de indicadores que ajudam na tomada de decisão.",
  },
];

const cases = [
  {
    category: "Operação digital",
    title: "Estrutura tecnológica para operações mais maduras",
    text: "Projetos pensados para fortalecer base técnica, experiência e continuidade do crescimento.",
  },
  {
    category: "Software sob medida",
    title: "Plataformas alinhadas ao contexto real do cliente",
    text: "Construção digital com foco em clareza, robustez e aderência ao negócio.",
  },
  {
    category: "IA aplicada",
    title: "Automação com mais inteligência e menos atrito",
    text: "Uso de automação e IA para reduzir esforço manual e tornar a operação mais previsível.",
  },
];

const values = [
  {
    title: "Clareza",
    text: "Projetos bem pensados, boa leitura de negócio e comunicação objetiva.",
  },
  {
    title: "Proximidade",
    text: "Relacionamento próximo, visão colaborativa e construção junto ao cliente.",
  },
  {
    title: "Estrutura",
    text: "Tecnologia organizada para sustentar crescimento com mais segurança.",
  },
  {
    title: "Evolução",
    text: "Soluções feitas para continuar evoluindo, não apenas para resolver o agora.",
  },
];

const insights = [
  "Como aplicar IA sem perder clareza operacional",
  "Quando software sob medida realmente faz sentido",
  "Como modernizar uma operação sem aumentar complexidade",
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="tt-header">
      <div className="tt-container tt-header-inner">
        <a href="#home" className="tt-logo" onClick={closeMenu}>
          <div className="tt-logo-mark">T</div>
          <div className="tt-logo-text">
            <strong>Tironi Tech</strong>
            <span>Technology & Digital Solutions</span>
          </div>
        </a>

        <button
          type="button"
          className="tt-nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>

        <nav
          id="primary-navigation"
          className={`tt-nav${menuOpen ? " tt-nav-open" : ""}`}
        >
          <a href="#home" onClick={closeMenu}>
            Início
          </a>
          <a href="#about" onClick={closeMenu}>
            Sobre
          </a>
          <a href="#solutions" onClick={closeMenu}>
            Soluções
          </a>
          <a href="#cases" onClick={closeMenu}>
            Cases
          </a>
          <a href="#insights" onClick={closeMenu}>
            Insights
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contato
          </a>
        </nav>

        <a className="tt-btn tt-btn-primary tt-header-cta" href="#contact" onClick={closeMenu}>
          Falar com especialista
        </a>
      </div>
      {menuOpen ? (
        <button
          type="button"
          className="tt-nav-backdrop"
          aria-label="Fechar menu"
          onClick={closeMenu}
        />
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="tt-hero">
      <div className="tt-hero-gradient tt-hero-gradient-a" />
      <div className="tt-hero-gradient tt-hero-gradient-b" />

      <div className="tt-container tt-hero-grid">
        <div className="tt-hero-copy">
          <span className="tt-kicker">Tecnologia com clareza, estrutura e evolução</span>

          <h1>
            Soluções digitais para empresas que querem crescer com mais confiança.
          </h1>

          <p>
            A Tironi Tech desenvolve software sob medida, automações, soluções com IA
            e estruturas digitais preparadas para a realidade do negócio.
          </p>

          <div className="tt-hero-actions">
            <a className="tt-btn tt-btn-primary" href="#contact">
              Falar com especialista
            </a>
            <a className="tt-btn tt-btn-secondary" href="#solutions">
              Ver soluções
            </a>
          </div>

          <div className="tt-hero-mini">
            <div>
              <strong>Mais clareza</strong>
              <span>na construção tecnológica</span>
            </div>
            <div>
              <strong>Mais maturidade</strong>
              <span>para operações digitais</span>
            </div>
          </div>
        </div>

        <div className="tt-hero-visual">
          <div className="tt-orb" />
          <div className="tt-visual-card tt-visual-card-main">
            <span>Parceira tecnológica</span>
            <h3>Projetos digitais com visão de negócio, design limpo e execução sólida.</h3>
            <p>
              Construção digital mais organizada, humana e premium para empresas
              que precisam evoluir com segurança.
            </p>
          </div>

          <div className="tt-visual-card tt-visual-card-small tt-visual-card-a">
            <strong>Software</strong>
            <span>Sob medida</span>
          </div>

          <div className="tt-visual-card tt-visual-card-small tt-visual-card-b">
            <strong>IA</strong>
            <span>Automação aplicada</span>
          </div>

          <div className="tt-visual-card tt-visual-card-small tt-visual-card-c">
            <strong>Operação</strong>
            <span>Mais previsibilidade</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="tt-section tt-section-tight">
      <div className="tt-container">
        <div className="tt-trust-strip">
          {trustItems.map((item) => (
            <div key={item.label} className="tt-trust-item">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="tt-section">
      <div className="tt-container tt-about-grid">
        <div className="tt-section-head">
          <span className="tt-kicker">Sobre a Tironi Tech</span>
          <h2>Tecnologia com leitura de negócio, proximidade e construção consistente.</h2>
          <p>
            A Tironi Tech atua na criação de soluções digitais com foco em clareza,
            boa estrutura técnica e evolução real. A proposta é simples: construir
            melhor, com mais organização, mais visão e mais confiança.
          </p>
        </div>

        <div className="tt-about-cards">
          {values.map((item) => (
            <article key={item.title} className="tt-info-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="solutions" className="tt-section tt-section-soft">
      <div className="tt-container">
        <div className="tt-section-head tt-section-head-center">
          <span className="tt-kicker">Soluções</span>
          <h2>Uma estrutura de serviços mais clara, elegante e preparada para gerar confiança.</h2>
          <p>
            O objetivo não é parecer genérico. É comunicar valor, organização e
            capacidade real de entrega.
          </p>
        </div>

        <div className="tt-solutions-grid">
          {solutions.map((item) => (
            <article key={item.title} className="tt-solution-card">
              <div className="tt-solution-icon" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CasesSection() {
  return (
    <section id="cases" className="tt-section">
      <div className="tt-container">
        <div className="tt-section-head">
          <span className="tt-kicker">Cases</span>
          <h2>Projetos apresentados com contexto, clareza e percepção premium.</h2>
          <p>
            A forma de apresentar os cases deve transmitir maturidade, organização
            e confiança comercial.
          </p>
        </div>

        <div className="tt-cases-grid">
          <article className="tt-case-feature">
            <div className="tt-case-badge">Case em destaque</div>
            <h3>Estrutura digital para empresas que precisam de mais consistência operacional.</h3>
            <p>
              Interfaces, sistemas e fluxos digitais organizados para sustentar
              crescimento com mais previsibilidade e qualidade percebida.
            </p>
            <a href="#contact">Quero uma solução assim</a>
          </article>

          <div className="tt-case-list">
            {cases.map((item) => (
              <article key={item.title} className="tt-case-card">
                <span>{item.category}</span>
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

function MethodSection() {
  return (
    <section className="tt-section tt-section-soft">
      <div className="tt-container">
        <div className="tt-section-head tt-section-head-center">
          <span className="tt-kicker">Como pensamos</span>
          <h2>Estratégia, estrutura, execução e evolução.</h2>
        </div>

        <div className="tt-method-grid">
          <article className="tt-method-card">
            <h3>Entendimento</h3>
            <p>Leitura de contexto, operação e necessidades reais do projeto.</p>
          </article>

          <article className="tt-method-card">
            <h3>Estruturação</h3>
            <p>Organização da base técnica, da experiência e dos fluxos prioritários.</p>
          </article>

          <article className="tt-method-card">
            <h3>Construção</h3>
            <p>Desenvolvimento com clareza, consistência visual e foco em qualidade.</p>
          </article>

          <article className="tt-method-card">
            <h3>Evolução</h3>
            <p>Melhoria contínua para acompanhar crescimento, maturidade e novas demandas.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function InsightsSection() {
  return (
    <section id="insights" className="tt-section">
      <div className="tt-container">
        <div className="tt-section-head">
          <span className="tt-kicker">Insights</span>
          <h2>Conteúdo para reforçar autoridade e visão de negócio.</h2>
        </div>

        <div className="tt-insights-grid">
          {insights.map((item) => (
            <article key={item} className="tt-insight-card">
              <span>Artigo</span>
              <h3>{item}</h3>
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
    <section id="contact" className="tt-section">
      <div className="tt-container">
        <div className="tt-cta-box">
          <div className="tt-cta-copy">
            <span className="tt-kicker">Contato</span>
            <h2>Vamos construir uma solução digital mais clara, forte e preparada para evoluir.</h2>
            <p>
              Fale com a Tironi Tech para discutir software sob medida, IA,
              automação e modernização tecnológica.
            </p>
          </div>

          <div className="tt-cta-actions">
            <a className="tt-btn tt-btn-primary" href={`mailto:${CONTACT_EMAIL}`}>
              Enviar email
            </a>
            <a className="tt-btn tt-btn-secondary" href="#lead-assistant">
              Falar no assistente
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="tt-footer">
      <div className="tt-container tt-footer-grid">
        <div>
          <div className="tt-logo tt-footer-logo">
            <div className="tt-logo-mark">T</div>
            <div className="tt-logo-text">
              <strong>Tironi Tech</strong>
              <span>Technology & Digital Solutions</span>
            </div>
          </div>

          <p>
            Soluções digitais com foco em clareza, evolução tecnológica e construção consistente.
          </p>
        </div>

        <div>
          <h4>Navegação</h4>
          <a href="#home">Início</a>
          <a href="#about">Sobre</a>
          <a href="#solutions">Soluções</a>
          <a href="#cases">Cases</a>
          <a href="#insights">Insights</a>
        </div>

        <div>
          <h4>Contato</h4>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href="tel:+5585999498149">(85) 99949-8149</a>
          <span>Rua Prates, 194 — Bom Retiro, São Paulo — SP, 01121-000</span>
        </div>
      </div>
    </footer>
  );
}

function LeadAssistant() {
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState("Quero falar com um especialista");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
  });

  const message = useMemo(() => {
    return `Olá, vim pelo site da Tironi Tech.
Assunto: ${subject}
Nome: ${form.name || "-"}
Empresa: ${form.company || "-"}
Email: ${form.email || "-"}

Gostaria de falar com um especialista.`;
  }, [subject, form]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div id="lead-assistant" className="tt-assistant">
      {open ? (
        <div className="tt-assistant-card">
          <div className="tt-assistant-head">
            <div>
              <strong>Assistente Tironi</strong>
              <span>Online agora</span>
            </div>

            <button type="button" onClick={() => setOpen(false)} aria-label="Fechar assistente">
              ×
            </button>
          </div>

          <div className="tt-assistant-body">
            <p className="tt-assistant-message">
              Posso direcionar sua demanda para o especialista certo com mais rapidez.
            </p>

            <div className="tt-assistant-options">
              {[
                "Quero falar com um especialista",
                "Quero desenvolver um sistema",
                "Quero IA e automação",
                "Quero modernizar uma operação",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={subject === item ? "active" : ""}
                  onClick={() => setSubject(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="tt-assistant-form">
              <input
                type="text"
                placeholder="Seu nome"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Sua empresa"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
              <input
                type="email"
                placeholder="Seu email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="tt-assistant-actions">
              <a
                className="tt-btn tt-btn-primary"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Falar no WhatsApp
              </a>

              <a className="tt-btn tt-btn-secondary" href={`mailto:${CONTACT_EMAIL}`}>
                Enviar email
              </a>
            </div>
          </div>
        </div>
      ) : (
        <button type="button" className="tt-assistant-fab" onClick={() => setOpen(true)}>
          Falar com especialista
        </button>
      )}
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <AboutSection />
        <SolutionsSection />
        <CasesSection />
        <MethodSection />
        <InsightsSection />
        <CTASection />
      </main>
      <Footer />
      <LeadAssistant />
    </>
  );
}
