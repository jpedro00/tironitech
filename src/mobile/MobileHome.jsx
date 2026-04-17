import { useEffect, useState } from "react";
import SiteIntro from "../components/shared/SiteIntro";

const projectLinks = {
  signWallet: "https://www.walletsignguard.com",
  deleteActPro: "https://www.deleteactpro.com",
};

function useMobileStylesheet() {
  useEffect(() => {
    const id = "tironi-mobile-css";
    const href = new URL("../styles/mobile.css", import.meta.url).href;

    let link = document.getElementById(id);
    if (!link) {
      link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }

    return () => {
      const existing = document.getElementById(id);
      if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
    };
  }, []);
}

export default function MobileHome() {
  useMobileStylesheet();
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <SiteIntro mobile onFinish={() => setIntroDone(true)} />}

      <div className="mobile-site-shell">
        <div className="mobile-bg-glow mobile-bg-glow-left" />
        <div className="mobile-bg-glow mobile-bg-glow-right" />
        <div className="mobile-stars-layer">
          {Array.from({ length: 26 }).map((_, index) => (
            <span
              key={index}
              className="mobile-star"
              style={{
                left: `${(index * 13) % 100}%`,
                top: `${(index * 17) % 100}%`,
                animationDelay: `${(index % 7) * 0.55}s`,
              }}
            />
          ))}
        </div>

        <header className="mobile-header">
          <div className="mobile-brand">
            <div className="mobile-brand-mark">
              <img
                src="/brand/tironi-symbol.png"
                alt="Tironi Tech"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="mobile-brand-copy">
              <strong>Tironi Tech</strong>
              <span>Tecnologia com clareza, estrutura e evolução</span>
            </div>
          </div>

          <a className="mobile-header-cta" href="#contato">
            Falar
          </a>
        </header>

        <main className="mobile-main">
          <section className="mobile-hero">
            <span className="mobile-eyebrow">OPERAÇÃO DIGITAL PREMIUM</span>

            <h1 className="mobile-hero-title">Transformamos sua operação em produto digital</h1>

            <p className="mobile-hero-text">
              Desenvolvemos software sob medida, aplicações web, automações e soluções com IA para empresas que querem
              crescer com mais presença, eficiência e valor.
            </p>

            <div className="mobile-hero-actions">
              <a className="mobile-btn mobile-btn-primary" href="#projetos">
                Ver projetos
              </a>
              <a className="mobile-btn mobile-btn-secondary" href="#servicos">
                Nossas soluções
              </a>
            </div>
          </section>

          <section className="mobile-section" id="servicos">
            <div className="mobile-section-head">
              <span className="mobile-section-tag">SERVIÇOS</span>
              <h2>Soluções com a mesma linguagem premium do desktop</h2>
              <p>
                Mantendo a identidade visual da Tironi Tech, mas com uma estrutura própria para celular, mais leve, clara
                e portátil.
              </p>
            </div>

            <div className="mobile-card-stack">
              <article className="mobile-info-card">
                <div className="mobile-card-icon">&lt;/&gt;</div>
                <h3>Sistemas Web</h3>
                <p>Plataformas escaláveis, portais, painéis administrativos e experiências digitais sob medida.</p>
              </article>

              <article className="mobile-info-card">
                <div className="mobile-card-icon">✦</div>
                <h3>IA &amp; Automação</h3>
                <p>Fluxos inteligentes, ganho operacional e menos atrito em etapas críticas do negócio.</p>
              </article>

              <article className="mobile-info-card">
                <div className="mobile-card-icon">◎</div>
                <h3>Apps &amp; Produtos</h3>
                <p>Interfaces modernas, produtos digitais com mais percepção de valor e foco em crescimento.</p>
              </article>
            </div>
          </section>

          <section className="mobile-section" id="destaques">
            <div className="mobile-section-head">
              <span className="mobile-section-tag">DESTAQUES</span>
              <h2>Experiência, confiança e execução com linguagem visual forte</h2>
              <p>Tempo de mercado, clareza comercial, evolução contínua e construção digital com foco em presença premium.</p>
            </div>

            <div className="mobile-highlight-grid">
              <div className="mobile-highlight-pill">Confiança comercial</div>
              <div className="mobile-highlight-pill">Tempo de mercado</div>
              <div className="mobile-highlight-pill">Execução premium</div>
              <div className="mobile-highlight-pill">Inovação contínua</div>
              <div className="mobile-highlight-pill">Presença digital forte</div>
              <div className="mobile-highlight-pill">Mais geração de leads</div>
            </div>
          </section>

          <section className="mobile-section" id="projetos">
            <div className="mobile-section-head">
              <span className="mobile-section-tag">PROJETOS EM DESTAQUE</span>
              <h2>Cases reais apresentados com mais clareza no mobile</h2>
              <p>
                Os projetos abaixo mantêm a hierarquia de informação do desktop, mas com leitura, toque e navegação melhores
                para celular.
              </p>
            </div>

            <div className="mobile-projects">
              <a className="mobile-project-card" href={projectLinks.signWallet} target="_blank" rel="noreferrer">
                <div className="mobile-project-logo-wrap">
                  <img
                    src="/projects/sign-wallet-logo.png"
                    alt="Sign Wallet"
                    className="mobile-project-logo"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div className="mobile-project-copy">
                  <span className="mobile-project-label">Segurança Web3</span>
                  <h3>Sign Wallet</h3>
                  <p>
                    Camada de proteção para interações críticas com carteira, navegação mais segura e leitura de risco com
                    foco em confiança.
                  </p>
                  <strong>Acessar projeto</strong>
                </div>
              </a>

              <a className="mobile-project-card" href={projectLinks.deleteActPro} target="_blank" rel="noreferrer">
                <div className="mobile-project-logo-wrap">
                  <img
                    src="/projects/deleteactpro-logo.png"
                    alt="DeleteActPro"
                    className="mobile-project-logo"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div className="mobile-project-copy">
                  <span className="mobile-project-label">Compliance &amp; Privacidade</span>
                  <h3>DeleteActPro</h3>
                  <p>
                    Solução orientada a compliance e privacidade, com narrativa premium para transformar obrigação
                    regulatória em operação clara.
                  </p>
                  <strong>Acessar projeto</strong>
                </div>
              </a>
            </div>
          </section>

          <section className="mobile-section" id="numeros">
            <div className="mobile-section-head">
              <span className="mobile-section-tag">RESULTADOS</span>
              <h2>Presença, estrutura e percepção de valor</h2>
            </div>

            <div className="mobile-stats-grid">
              <article className="mobile-stat-card">
                <strong>20+</strong>
                <span>Anos de experiência</span>
              </article>
              <article className="mobile-stat-card">
                <strong>50+</strong>
                <span>Projetos de sucesso</span>
              </article>
              <article className="mobile-stat-card">
                <strong>99%</strong>
                <span>Satisfação do cliente</span>
              </article>
              <article className="mobile-stat-card">
                <strong>100+</strong>
                <span>Soluções inovadoras</span>
              </article>
            </div>
          </section>

          <section className="mobile-section mobile-cta-section" id="contato">
            <span className="mobile-section-tag">PRÓXIMO PASSO</span>
            <h2>Vamos transformar sua operação em presença digital premium</h2>
            <p>
              Estrutura, design forte, tecnologia sólida e uma experiência mais clara para gerar confiança desde o primeiro
              contato.
            </p>

            <div className="mobile-hero-actions">
              <a className="mobile-btn mobile-btn-primary" href="mailto:contato@tironitech.com">
                Falar com a Tironi Tech
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

