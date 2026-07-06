import { LogoMark } from "./Navbar";
import { getLegalCopy } from "../../content/legalPolicies";
import { openCookiePreferences } from "../../utils/cookieConsent";
import { reportWhatsAppConversionAndRedirect } from "../../utils/googleAdsConversion";

export default function Footer({ t, contactEmail, whatsappNumber, language, setLanguage, languageOptions = [] }) {
  const legalCopy = getLegalCopy(language);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="tt2-footer">
      <div className="tt2-container tt2-footer-grid">
        <div>
          <div className="tt2-brand tt2-footer-brand">
            <div className="tt2-brand-mark" aria-hidden="true">
              <LogoMark className="brand-mark" size={42} />
            </div>
            <div className="tt2-brand-copy">
              <strong>TironiTech</strong>
              <span>{t.footer.text}</span>
            </div>
          </div>
          <p className="tt2-footer-copyright">© {currentYear} TironiTech. {legalCopy.rights}</p>
        </div>

        <div>
          <h4>{t.footer.navTitle}</h4>
          <a href="/#clientes">{t.nav.clients}</a>
          <a href="/#experiencia">{t.experience.eyebrow}</a>
          <a href="/#projetos">{t.nav.projects}</a>
          <a href="/#solucoes">{t.nav.services}</a>
          <a href="/#contato">{t.nav.contact}</a>
        </div>

        <div>
          <h4>{t.footer.contactTitle}</h4>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => {
              const href = `https://wa.me/${whatsappNumber}`;
              if (!href.startsWith("https://wa.me/558599498149")) return;
              event.preventDefault();
              reportWhatsAppConversionAndRedirect(href);
            }}
          >
            {t.footer.whatsapp}
          </a>
          <div className="tt2-footer-legal-links" aria-label="Links legais">
            <button type="button" className="tt2-footer-link-button" onClick={openCookiePreferences}>
              {legalCopy.cookiePreferences}
            </button>
            <a href="/politica-privacidade">{legalCopy.privacyPolicy}</a>
            <a href="/politica-cookies">{legalCopy.cookiePolicy}</a>
          </div>
          <div className="tt2-language-switcher" style={{ marginTop: 12 }}>
            <select className="tt2-language-select" value={language} onChange={(e) => setLanguage(e.target.value)} aria-label={t.nav.languageLabel}>
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}
