import { useEffect } from "react";
import "../../styles/theme.css";
import { useLanguage } from "../../context/LanguageContext";
import { getLegalCopy } from "../../content/legalPolicies";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import CookieConsent from "../shared/CookieConsent";
import FloatingWhatsAppButton from "../ui/FloatingWhatsAppButton";

const CONTACT_EMAIL = "tironi@tironitech.com";
const WHATSAPP_NUMBER = "558599498149";

export default function LegalPolicyPage({ policy }) {
  const { t, language, setLanguage, languageOptions } = useLanguage();
  const legalCopy = getLegalCopy(language);
  const policyDocument = legalCopy[policy] || legalCopy.privacy;

  useEffect(() => {
    document.title = policyDocument.pageTitle;
  }, [policyDocument.pageTitle]);

  return (
    <div className="tt2-page tt2-legal-page-shell">
      <div className="tt2-page-inner">
        <Navbar t={t} language={language} setLanguage={setLanguage} languageOptions={languageOptions} />

        <main className="tt2-legal-page-main">
          <article className="tt2-legal-page-card">
            <a className="tt2-legal-back-link" href="/">{legalCopy.backToHome}</a>
            <p className="tt2-legal-page-updated">{policyDocument.updated}</p>
            <h1>{policyDocument.title}</h1>
            <div className="tt2-legal-page-content">
              {policyDocument.paragraphs.map((paragraph) => (
                <p key={paragraph} className={paragraph.includes("@") ? "tt2-legal-contact" : undefined}>
                  {paragraph}
                </p>
              ))}
            </div>
            <a className="tt2-legal-back-link tt2-legal-back-link-bottom" href="/">{legalCopy.backToHome}</a>
          </article>
        </main>

        <Footer
          t={t}
          contactEmail={CONTACT_EMAIL}
          whatsappNumber={WHATSAPP_NUMBER}
          language={language}
          setLanguage={setLanguage}
          languageOptions={languageOptions}
        />
        <FloatingWhatsAppButton />
        <CookieConsent t={t} />
      </div>
    </div>
  );
}
