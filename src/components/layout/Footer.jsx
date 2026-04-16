import { LogoMark } from "./Navbar";

export default function Footer({ t, contactEmail, whatsappNumber, language, setLanguage }) {
  return (
    <footer className="tt2-footer">
      <div className="tt2-container tt2-footer-grid">
        <div>
          <div className="tt2-brand tt2-footer-brand">
            <div className="tt2-brand-mark" aria-hidden="true">
              <LogoMark className="brand-mark" size={42} />
            </div>
            <div className="tt2-brand-copy">
              <strong>Tironi Tech</strong>
              <span>{t.footer.text}</span>
            </div>
          </div>
        </div>

        <div>
          <h4>Navegação</h4>
          <a href="#inicio">{t.nav.projects}</a>
          <a href="#clientes">{t.nav.clients}</a>
          <a href="#projetos">{t.nav.projects}</a>
          <a href="#solucoes">{t.nav.services}</a>
          <a href="#contato">{t.nav.contact}</a>
        </div>

        <div>
          <h4>Contato</h4>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <div className="tt2-language-switcher" style={{ marginTop: 12 }}>
            <select className="tt2-language-select" value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="pt">PT-BR</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}

