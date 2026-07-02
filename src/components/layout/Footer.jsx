import { useEffect, useState } from "react";
import { LogoMark } from "./Navbar";
import { openCookiePreferences } from "../../utils/cookieConsent";

const LEGAL_COPY = {
  pt: {
    close: "Fechar",
    rights: "Todos os direitos reservados.",
    cookiePreferences: "Preferências de cookies",
    privacyPolicy: "Política de Privacidade",
    cookiePolicy: "Política de Cookies",
    privacy: {
      title: "Política de Privacidade",
      updated: "Última atualização: julho de 2026",
      paragraphs: [
        "A TironiTech respeita a privacidade de todos que acessam este site. Nosso objetivo é apresentar nossos serviços de tecnologia, software, automação, IA aplicada e soluções digitais de forma clara, sem coletar dados pessoais de maneira invasiva.",
        "A TironiTech não vende dados pessoais, não comercializa informações de visitantes, não utiliza dados para abuso, não faz rastreamento indevido e não trabalha com práticas invasivas de coleta.",
        "Este site pode receber informações somente quando o próprio usuário decide entrar em contato conosco, por exemplo, ao clicar no WhatsApp, enviar um e-mail ou preencher algum canal de atendimento disponibilizado no site.",
        "As informações enviadas voluntariamente pelo usuário são utilizadas apenas para responder ao contato, entender a necessidade apresentada e dar continuidade a uma possível conversa comercial ou técnica com a TironiTech.",
        "Também podemos utilizar recursos técnicos básicos para manter o site funcionando corretamente, lembrar preferências de navegação e melhorar a experiência do visitante, sempre respeitando as escolhas feitas no painel de cookies.",
        "A TironiTech busca manter uma postura responsável, transparente e segura em relação às informações recebidas. Não usamos dados para fins abusivos, não repassamos dados para venda e não exploramos informações pessoais de visitantes.",
        "O usuário pode alterar suas preferências de cookies a qualquer momento pelo link “Preferências de cookies” disponível no rodapé do site.",
        "Em caso de dúvidas sobre privacidade ou uso de informações no site, entre em contato:",
        "tironi@tironitech.com",
      ],
    },
    cookies: {
      title: "Política de Cookies",
      updated: "Última atualização: julho de 2026",
      paragraphs: [
        "A TironiTech utiliza cookies de forma simples e responsável, com o objetivo de melhorar a navegação, lembrar preferências e manter o funcionamento adequado do site.",
        "Cookies são pequenos arquivos ou registros armazenados no navegador para ajudar o site a funcionar corretamente e lembrar algumas escolhas do visitante.",
        "Este site pode utilizar cookies necessários, que são essenciais para o funcionamento básico da página e não podem ser desativados pelo painel de preferências.",
        "Também podem existir cookies de preferências, usados para lembrar escolhas como idioma e configurações de navegação.",
        "Cookies de analytics e marketing só devem ser utilizados se forem necessários para análise de desempenho, melhoria da experiência ou medição de campanhas, e devem respeitar a escolha feita pelo usuário no painel de consentimento.",
        "A TironiTech não utiliza cookies para abuso, não vende informações dos visitantes e não usa cookies para práticas invasivas de rastreamento.",
        "O visitante pode aceitar todos os cookies, recusar cookies não essenciais ou personalizar suas escolhas no banner de cookies.",
        "As preferências podem ser alteradas a qualquer momento pelo link “Preferências de cookies” disponível no rodapé do site.",
      ],
    },
  },
  en: {
    close: "Close",
    rights: "All rights reserved.",
    cookiePreferences: "Cookie preferences",
    privacyPolicy: "Privacy Policy",
    cookiePolicy: "Cookie Policy",
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: July 2026",
      paragraphs: [
        "TironiTech respects the privacy of everyone who accesses this website. Our goal is to present our technology, software, automation, applied AI and digital solution services clearly, without collecting personal data in an invasive way.",
        "TironiTech does not sell personal data, does not commercialize visitor information, does not use data for abuse, does not perform improper tracking and does not work with invasive collection practices.",
        "This website may receive information only when the user decides to contact us, for example by clicking WhatsApp, sending an email or filling in an available service channel on the website.",
        "Information voluntarily sent by the user is used only to respond to the contact, understand the presented need and continue a possible commercial or technical conversation with TironiTech.",
        "We may also use basic technical resources to keep the website working correctly, remember navigation preferences and improve the visitor experience, always respecting the choices made in the cookie panel.",
        "TironiTech seeks to maintain a responsible, transparent and secure approach to the information received. We do not use data for abusive purposes, do not transfer data for sale and do not exploit visitors' personal information.",
        "The user can change cookie preferences at any time through the “Cookie preferences” link available in the website footer.",
        "If you have questions about privacy or use of information on the website, contact us:",
        "tironi@tironitech.com",
      ],
    },
    cookies: {
      title: "Cookie Policy",
      updated: "Last updated: July 2026",
      paragraphs: [
        "TironiTech uses cookies in a simple and responsible way, with the goal of improving navigation, remembering preferences and keeping the website working properly.",
        "Cookies are small files or records stored in the browser to help the website function correctly and remember some visitor choices.",
        "This website may use necessary cookies, which are essential for the basic operation of the page and cannot be disabled through the preferences panel.",
        "Preference cookies may also exist, used to remember choices such as language and navigation settings.",
        "Analytics and marketing cookies should only be used if necessary for performance analysis, experience improvement or campaign measurement, and must respect the choice made by the user in the consent panel.",
        "TironiTech does not use cookies for abuse, does not sell visitor information and does not use cookies for invasive tracking practices.",
        "The visitor can accept all cookies, reject non-essential cookies or customize choices in the cookie banner.",
        "Preferences can be changed at any time through the “Cookie preferences” link available in the website footer.",
      ],
    },
  },
  es: {
    close: "Cerrar",
    rights: "Todos los derechos reservados.",
    cookiePreferences: "Preferencias de cookies",
    privacyPolicy: "Política de Privacidad",
    cookiePolicy: "Política de Cookies",
    privacy: {
      title: "Política de Privacidad",
      updated: "Última actualización: julio de 2026",
      paragraphs: [
        "TironiTech respeta la privacidad de todas las personas que acceden a este sitio. Nuestro objetivo es presentar nuestros servicios de tecnología, software, automatización, IA aplicada y soluciones digitales de forma clara, sin recopilar datos personales de manera invasiva.",
        "TironiTech no vende datos personales, no comercializa información de visitantes, no utiliza datos para abuso, no realiza rastreo indebido y no trabaja con prácticas invasivas de recopilación.",
        "Este sitio puede recibir información solamente cuando el propio usuario decide entrar en contacto con nosotros, por ejemplo, al hacer clic en WhatsApp, enviar un correo electrónico o completar algún canal de atención disponible en el sitio.",
        "La información enviada voluntariamente por el usuario se utiliza únicamente para responder el contacto, entender la necesidad presentada y dar continuidad a una posible conversación comercial o técnica con TironiTech.",
        "También podemos utilizar recursos técnicos básicos para mantener el sitio funcionando correctamente, recordar preferencias de navegación y mejorar la experiencia del visitante, siempre respetando las elecciones hechas en el panel de cookies.",
        "TironiTech busca mantener una postura responsable, transparente y segura en relación con la información recibida. No usamos datos para fines abusivos, no transferimos datos para venta y no explotamos información personal de visitantes.",
        "El usuario puede cambiar sus preferencias de cookies en cualquier momento mediante el enlace “Preferencias de cookies” disponible en el pie de página del sitio.",
        "En caso de dudas sobre privacidad o uso de información en el sitio, entra en contacto:",
        "tironi@tironitech.com",
      ],
    },
    cookies: {
      title: "Política de Cookies",
      updated: "Última actualización: julio de 2026",
      paragraphs: [
        "TironiTech utiliza cookies de forma simple y responsable, con el objetivo de mejorar la navegación, recordar preferencias y mantener el funcionamiento adecuado del sitio.",
        "Las cookies son pequeños archivos o registros almacenados en el navegador para ayudar a que el sitio funcione correctamente y recuerde algunas elecciones del visitante.",
        "Este sitio puede utilizar cookies necesarias, que son esenciales para el funcionamiento básico de la página y no pueden desactivarse desde el panel de preferencias.",
        "También pueden existir cookies de preferencias, utilizadas para recordar elecciones como idioma y configuraciones de navegación.",
        "Las cookies de analytics y marketing solo deben utilizarse si son necesarias para análisis de desempeño, mejora de la experiencia o medición de campañas, y deben respetar la elección hecha por el usuario en el panel de consentimiento.",
        "TironiTech no utiliza cookies para abuso, no vende información de visitantes y no usa cookies para prácticas invasivas de rastreo.",
        "El visitante puede aceptar todas las cookies, rechazar cookies no esenciales o personalizar sus elecciones en el banner de cookies.",
        "Las preferencias pueden modificarse en cualquier momento mediante el enlace “Preferencias de cookies” disponible en el pie de página del sitio.",
      ],
    },
  },
};

function getLegalCopy(language) {
  return LEGAL_COPY[language] || LEGAL_COPY.pt;
}

function LegalModal({ copy, documentKey, onClose }) {
  if (!documentKey) return null;

  const document = copy[documentKey];

  return (
    <div className="tt2-legal-modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="tt2-legal-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tt2-legal-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="tt2-legal-modal-head">
          <div>
            <span>{document.updated}</span>
            <h2 id="tt2-legal-modal-title">{document.title}</h2>
          </div>
          <button type="button" className="tt2-legal-modal-close" onClick={onClose} aria-label={copy.close}>
            ×
          </button>
        </div>

        <div className="tt2-legal-modal-body">
          {document.paragraphs.map((paragraph) => (
            <p key={paragraph} className={paragraph.includes("@") ? "tt2-legal-contact" : undefined}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function Footer({ t, contactEmail, whatsappNumber, language, setLanguage, languageOptions = [] }) {
  const [activeLegalDocument, setActiveLegalDocument] = useState(null);
  const legalCopy = getLegalCopy(language);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (!activeLegalDocument) return undefined;

    function closeOnEscape(event) {
      if (event.key === "Escape") setActiveLegalDocument(null);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activeLegalDocument]);

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
          <a href="#clientes">{t.nav.clients}</a>
          <a href="#experiencia">{t.experience.eyebrow}</a>
          <a href="#projetos">{t.nav.projects}</a>
          <a href="#solucoes">{t.nav.services}</a>
          <a href="#contato">{t.nav.contact}</a>
        </div>

        <div>
          <h4>{t.footer.contactTitle}</h4>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">{t.footer.whatsapp}</a>
          <div className="tt2-footer-legal-links" aria-label="Links legais">
            <button type="button" className="tt2-footer-link-button" onClick={openCookiePreferences}>
              {legalCopy.cookiePreferences}
            </button>
            <button type="button" className="tt2-footer-link-button" onClick={() => setActiveLegalDocument("privacy")}>
              {legalCopy.privacyPolicy}
            </button>
            <button type="button" className="tt2-footer-link-button" onClick={() => setActiveLegalDocument("cookies")}>
              {legalCopy.cookiePolicy}
            </button>
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

      <LegalModal copy={legalCopy} documentKey={activeLegalDocument} onClose={() => setActiveLegalDocument(null)} />
    </footer>
  );
}
