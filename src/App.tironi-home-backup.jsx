import { useEffect, useMemo, useRef, useState } from "react";
import "./styles/tironi-home.css";

const clients = ["Casa", "Multiplier", "NewStore", "Coopermais"];
const services = [
  {
    title: "Desenvolvimento de Software Sob Medida",
    text: "Projetamos e construímos plataformas, sistemas internos e aplicações web alinhadas ao fluxo real do seu negócio — com base sólida para evoluir.",
  },
  {
    title: "Automação com Inteligência Artificial",
    text: "Implementamos automações, agentes e integrações com IA para reduzir atrito operacional, acelerar decisões e elevar a qualidade do atendimento.",
  },
  {
    title: "Análise de Dados e Dashboards",
    text: "Transformamos dados em clareza: indicadores, painéis e relatórios para enxergar operação, gargalos e oportunidades com objetividade.",
  },
  {
    title: "Modernização de Processos",
    text: "Reestruturamos sistemas e rotinas para ganhar eficiência, confiabilidade e escala — sem quebrar o que já funciona no seu dia a dia.",
  },
  {
    title: "Consultoria Estratégica",
    text: "Apoiamos a definição do que construir, como construir e por quê — alinhando tecnologia, viabilidade e resultado esperado.",
  },
];

const cases = [
  {
    category: "Software sob medida",
    title: "Projeto sob medida para Multiplier",
    text: "Estrutura digital construída para suportar operação, crescimento e evolução contínua do produto com consistência.",
  },
  {
    category: "Operação digital",
    title: "Estrutura tecnológica para NewStore",
    text: "Base técnica organizada com foco em robustez, performance e uma experiência digital alinhada ao posicionamento.",
  },
  {
    category: "Processos e gestão",
    title: "Solução para Coopermais",
    text: "Organização de fluxo operacional com mais visibilidade e controle — tecnologia aplicada para reduzir atrito e dar previsibilidade.",
  },
  {
    category: "Plataforma e presença",
    title: "Tecnologia aplicada para Casa",
    text: "Estrutura institucional e tecnológica com foco em clareza, posicionamento e suporte ao crescimento da operação.",
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="tt-navbar">
      <div className="tt-container tt-navbar-inner">
        <a href="#home" className="tt-brand" aria-label="Ir para início">
          <span className="tt-brand-mark" aria-hidden="true">
            T
          </span>
          <span className="tt-brand-text">Tironi Tech</span>
        </a>

        <nav className="tt-nav" aria-label="Navegação principal">
          <a href="#home">Início</a>
          <a href="#solucoes">Soluções</a>
          <a href="#cases">Cases</a>
          <a href="#blog">Blog</a>
          <a href="#visao">Visão</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="tt-navbar-actions">
          <a href="#contato" className="tt-btn tt-btn-primary tt-hide-sm">
            Falar com especialista
          </a>
          <button
            type="button"
            className="tt-icon-btn tt-show-sm"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="tt-burger" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="tt-mobile-nav" role="dialog" aria-label="Menu">
          <div
            className="tt-mobile-nav-backdrop"
            onClick={() => setOpen(false)}
          />
          <div className="tt-mobile-nav-panel">
            <div className="tt-mobile-nav-head">
              <div className="tt-brand">
                <span className="tt-brand-mark" aria-hidden="true">
                  T
                </span>
                <span className="tt-brand-text">Tironi Tech</span>
              </div>
              <button
                type="button"
                className="tt-icon-btn"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="tt-mobile-nav-links">
              {[
                ["Início", "#home"],
                ["Soluções", "#solucoes"],
                ["Cases", "#cases"],
                ["Blog", "#blog"],
                ["Visão", "#visao"],
                ["Contato", "#contato"],
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpen(false)}>
                  {label}
                </a>
              ))}
            </div>

            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="tt-btn tt-btn-primary tt-mobile-nav-cta"
            >
              Falar com especialista
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="tt-hero">
      <div className="tt-container tt-hero-grid">
        <div className="tt-hero-copy">
          <span className="tt-kicker">
            Software sob medida • IA aplicada • Dados e evolução
          </span>
          <h1>
            Desenvolvemos software e soluções em IA para empresas que querem
            <span> crescer com clareza, eficiência e escala.</span>
          </h1>
          <p>
            Da estratégia à entrega, criamos sistemas, automações e experiências
            digitais com acabamento premium — orientados a operação, velocidade
            e valor de longo prazo.
          </p>

          <div className="tt-hero-actions">
            <a href="#contato" className="tt-btn tt-btn-primary">
              Falar com especialista
            </a>
            <a href="#cases" className="tt-btn tt-btn-secondary">
              Ver cases
            </a>
          </div>

          <div className="tt-hero-note">
            Mais de 20 anos apoiando empresas com engenharia de software,
            modernização e automação inteligente.
          </div>
        </div>

        <div className="tt-logo-cloud" aria-label="Clientes e frentes de atuação">
          {clients.map((client, index) => (
            <div
              className={`tt-logo-card tt-logo-card-${index + 1}`}
              key={client}
            >
              {client}
            </div>
          ))}
          <div className="tt-logo-card tt-logo-card-accent">IA</div>
          <div className="tt-logo-card tt-logo-card-accent-2">Software</div>
          <div className="tt-logo-card tt-logo-card-accent-3">Dados</div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="tt-trust" aria-label="Credibilidade">
      <div className="tt-container">
        <div className="tt-trust-header">
          <h2>Confiança para construir, clareza para evoluir.</h2>
          <p>
            Atuamos como parceiro técnico: engenharia, IA aplicada e
            modernização com cadência, qualidade e visão de negócio.
          </p>
        </div>

        <div className="tt-trust-logos" aria-label="Clientes e parceiros">
          {clients.map((client) => (
            <div key={client} className="tt-trust-logo">
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="solucoes" className="tt-section">
      <div className="tt-container">
        <div className="tt-section-head">
          <span className="tt-kicker">Soluções</span>
          <h2>Tecnologia de ponta, aplicada ao que importa.</h2>
          <p>
            Uma oferta clara e comercial — sem promessas vazias. Foco em
            software sob medida, automação em IA, dados e modernização com
            execução madura.
          </p>
        </div>

        <div className="tt-services-grid">
          {services.map((service) => (
            <article className="tt-card tt-service-card" key={service.title}>
              <div className="tt-service-badge" aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a className="tt-link" href="#contato">
                Conversar sobre esta solução
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIShowcase() {
  return (
    <section className="tt-ai-showcase" aria-label="IA aplicada ao negócio">
      <div className="tt-container tt-ai-grid">
        <div>
          <span className="tt-kicker tt-kicker-light">IA aplicada ao negócio</span>
          <h2>Automação e inteligência artificial com método.</h2>
          <p>
            Construímos automações, agentes e fluxos inteligentes conectados aos
            seus sistemas e dados — com governança, segurança e foco em
            eficiência real.
          </p>
          <ul className="tt-list">
            <li>Automação de processos repetitivos e operacionais</li>
            <li>Agentes e fluxos com IA para suporte e produtividade</li>
            <li>Integrações com sistemas, APIs e bases de dados</li>
            <li>Experiências digitais mais inteligentes e úteis</li>
          </ul>
        </div>

        <div className="tt-ai-panel">
          <div className="tt-ai-panel-card">
            <span>Fluxos inteligentes</span>
            <strong>IA + automação + operação</strong>
          </div>
          <div className="tt-ai-panel-card">
            <span>Modernização</span>
            <strong>Eficiência com menos atrito</strong>
          </div>
          <div className="tt-ai-panel-card">
            <span>Dados e visão</span>
            <strong>Contexto para decidir melhor</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cases() {
  return (
    <section id="cases" className="tt-section">
      <div className="tt-container">
        <div className="tt-section-head">
          <span className="tt-kicker">Cases</span>
          <h2>Projetos com contexto, clareza e apresentação.</h2>
          <p>
            Sem inventar números: mostramos categoria, objetivo e a natureza da
            entrega — com linguagem institucional e foco em confiança.
          </p>
        </div>

        <div className="tt-cases-grid">
          <article className="tt-card tt-case-featured">
            <span className="tt-case-tag">{cases[0].category}</span>
            <h3>{cases[0].title}</h3>
            <p>{cases[0].text}</p>
            <a className="tt-link" href="#contato">
              Quero um projeto assim
            </a>
          </article>

          <div className="tt-case-side-grid">
            {cases.slice(1).map((item) => (
              <article className="tt-card tt-case-card" key={item.title}>
                <span className="tt-case-tag">{item.category}</span>
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

function Metrics() {
  return (
    <section className="tt-metrics" aria-label="Métricas e experiência">
      <div className="tt-container">
        <div className="tt-metrics-head">
          <span className="tt-kicker">Experiência</span>
          <h2>Capacidade comprovada, entrega consistente.</h2>
        </div>

        <div className="tt-metrics-grid">
          {metrics.map((metric) => (
            <div key={metric.label} className="tt-metric">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="visao" className="tt-section">
      <div className="tt-container">
        <div className="tt-section-head">
          <span className="tt-kicker">Como trabalhamos</span>
          <h2>Estratégia, arquitetura e execução com rigor.</h2>
          <p>
            Um processo claro para reduzir risco, aumentar previsibilidade e
            construir soluções que continuam boas quando o projeto cresce.
          </p>
        </div>

        <div className="tt-process-grid">
          {[
            [
              "Estratégia",
              "Mapeamos contexto, objetivo e escopo com clareza — o que resolve hoje e o que precisa escalar amanhã.",
            ],
            [
              "Design e arquitetura",
              "Organizamos a solução com usabilidade, performance e base técnica sólida para manutenção e evolução.",
            ],
            [
              "Desenvolvimento",
              "Construímos com engenharia madura: qualidade, testes quando necessário e padrões que facilitam o crescimento.",
            ],
            [
              "Evolução contínua",
              "Apoiamos melhorias, novas etapas e otimizações — com dados, priorização e visão de produto.",
            ],
          ].map(([title, text]) => (
            <div className="tt-card tt-process-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section id="blog" className="tt-section tt-blog">
      <div className="tt-container">
        <div className="tt-section-head">
          <span className="tt-kicker">Blog</span>
          <h2>Autoridade com conteúdo: software, IA e decisão.</h2>
          <p>
            Um espaço para consolidar visão: boas práticas, arquitetura,
            automação e inteligência aplicada — com foco em utilidade real.
          </p>
        </div>

        <div className="tt-blog-grid">
          {[
            "Como aplicar IA com governança (sem criar caos operacional)",
            "Quando faz sentido desenvolver software sob medida",
            "Modernização de sistemas: riscos, atalhos e o que evitar",
          ].map((title) => (
            <article key={title} className="tt-card tt-blog-card">
              <span>Insight</span>
              <h3>{title}</h3>
              <a className="tt-link" href="#contato">
                Falar com a Tironi Tech
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contato" className="tt-cta">
      <div className="tt-container tt-cta-box">
        <div>
          <span className="tt-kicker">Contato</span>
          <h2>Vamos estruturar a próxima solução da sua empresa.</h2>
          <p>
            Conte sua demanda e receba direcionamento técnico com clareza.
            Software sob medida, automação em IA e modernização com execução
            premium.
          </p>
          <div className="tt-contact-inline" aria-label="Informações de contato">
            <a href="mailto:tironi@tironitech.com">tironi@tironitech.com</a>
            <span aria-hidden="true">•</span>
            <a href="tel:+5585999498149">(85) 99949-8149</a>
          </div>
        </div>

        <div className="tt-cta-actions">
          <a
            className="tt-btn tt-btn-primary"
            href="mailto:tironi@tironitech.com"
          >
            Enviar email
          </a>
          <a className="tt-btn tt-btn-secondary" href="tel:+5585999498149">
            Ligar agora
          </a>
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
          <div className="tt-brand tt-brand-footer">
            <span className="tt-brand-mark" aria-hidden="true">
              T
            </span>
            <span className="tt-brand-text">Tironi Tech</span>
          </div>
          <p>
            Desenvolvimento de software sob medida e automação em IA para
            empresas que querem crescer com confiança, método e acabamento.
          </p>
        </div>

        <div>
          <h4>Navegação</h4>
          <a href="#home">Início</a>
          <a href="#solucoes">Soluções</a>
          <a href="#cases">Cases</a>
          <a href="#blog">Blog</a>
          <a href="#visao">Visão</a>
          <a href="#contato">Contato</a>
        </div>

        <div>
          <h4>Contato</h4>
          <a href="mailto:tironi@tironitech.com">tironi@tironitech.com</a>
          <a href="tel:+5585999498149">(85) 99949-8149</a>
          <p>Rua Prates, 194 - Bom Retiro, São Paulo - SP, 01121-000</p>
        </div>
      </div>

      <div className="tt-container tt-footer-bottom">
        <span>© 2026 Tironi Tech. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}

function LeadAssistant() {
  const [open, setOpen] = useState(false);
  const [projectType, setProjectType] = useState("Quero falar com especialista");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
  });
  const titleRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => titleRef.current?.focus(), 50);
    return () => clearTimeout(t);
  }, [open]);

  const message = useMemo(() => {
    return `Olá, vim pelo site da Tironi Tech.
Tipo de projeto: ${projectType}
Nome: ${form.name || "-"}
Empresa: ${form.company || "-"}
Email: ${form.email || "-"}

Quero falar com um especialista e entender os próximos passos.`;
  }, [form, projectType]);

  const whatsappUrl = `https://wa.me/5585999498149?text=${encodeURIComponent(
    message
  )}`;
  const mailtoUrl = `mailto:tironi@tironitech.com?subject=${encodeURIComponent(
    "Briefing | Tironi Tech"
  )}&body=${encodeURIComponent(message)}`;
  const canProceed = Boolean(form.name.trim() && form.email.trim());

  return (
    <div className={`tt-assistant ${open ? "is-open" : "is-closed"}`}>
      {open ? (
        <div
          className="tt-assistant-card"
          role="dialog"
          aria-label="Assistente de contato"
        >
          <div className="tt-assistant-header">
            <div>
              <strong tabIndex={-1} ref={titleRef}>
                Assistente Tironi
              </strong>
              <span>Triagem rápida para direcionar sua demanda</span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Fechar assistente">
              ×
            </button>
          </div>

          <div className="tt-assistant-body">
            <div className="tt-assistant-bubble">
              Olá! Em poucos passos, eu te levo para a conversa certa.
            </div>

            <div className="tt-quick-actions" aria-label="Atalhos de demanda">
              {[
                "Quero desenvolver um sistema",
                "Quero automação com IA",
                "Quero modernizar um software",
                "Quero falar com especialista",
              ].map((item) => (
                <button
                  type="button"
                  key={item}
                  className={projectType === item ? "active" : ""}
                  onClick={() => setProjectType(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="tt-form-group" aria-label="Seus dados">
              <input
                type="text"
                placeholder="Seu nome *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                autoComplete="name"
              />
              <input
                type="text"
                placeholder="Sua empresa"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                autoComplete="organization"
              />
              <input
                type="email"
                placeholder="Seu email *"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                autoComplete="email"
              />
              <div className="tt-assistant-hint">
                * Campos necessários para montar a mensagem.
              </div>
            </div>

            <div className="tt-assistant-actions">
              <a
                className={`tt-btn tt-btn-primary ${
                  canProceed ? "" : "is-disabled"
                }`}
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
                Enviar briefing por email
              </a>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="tt-assistant-fab"
          onClick={() => setOpen(true)}
          aria-label="Abrir assistente para falar com especialista"
        >
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
        <TrustStrip />
        <Services />
        <AIShowcase />
        <Cases />
        <Metrics />
        <Process />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
      <LeadAssistant />
    </>
  );
}

