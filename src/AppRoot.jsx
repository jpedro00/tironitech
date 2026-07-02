import "./styles/theme.css";
import { useLanguage } from "./context/LanguageContext";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingLeadButton from "./components/ui/FloatingLeadButton";
import FloatingWhatsAppButton from "./components/ui/FloatingWhatsAppButton";
import CookieConsent from "./components/shared/CookieConsent";

import HeroSection from "./components/sections/HeroSection";
import TrustedBySection from "./components/sections/TrustedBySection";
import ExperienceStatsSection from "./components/sections/ExperienceStatsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import FeaturedProjectsSection from "./components/sections/FeaturedProjectsSection";
import SolutionsSection from "./components/sections/SolutionsSection";
import CasesSection from "./components/sections/CasesSection";
import ProcessSection from "./components/sections/ProcessSection";
import WhyChooseSection from "./components/sections/WhyChooseSection";
import FinalCtaSection from "./components/sections/FinalCtaSection";

const CONTACT_EMAIL = "tironi@tironitech.com";
const WHATSAPP_NUMBER = "558599498149";

const CLIENTS = [
  {
    name: "Casa do Treinamento",
    logo: "https://static.wixstatic.com/media/66390a_cf49547989da4c958d61781ae270cf89~mv2.png/v1/fill/w_152,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Casa-removebg-preview.png",
  },
  {
    name: "Multiplier",
    logo: "https://static.wixstatic.com/media/66390a_f590687d46c343baa3fd561a42e5abb4~mv2.png/v1/fill/w_136,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/multi-removebg-preview.png",
  },
  {
    name: "NewStore",
    logo: "https://static.wixstatic.com/media/66390a_f4171a1ecc954a2692725c5810dbd393~mv2.png/v1/fill/w_249,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/newstore_PNG.png",
  },
  {
    name: "Coopermais",
    logo: "https://static.wixstatic.com/media/66390a_8b6c94ee29fe4e57907cd67518d88c6c~mv2.png/v1/crop/x_25,y_0,w_212,h_73/fill/w_278,h_96,al_c,lg_1,q_85,enc_avif,quality_auto/coopermais_PNG.png",
  },
];

export default function AppRoot() {
  const { t, language, setLanguage, languageOptions } = useLanguage();

  return (
    <div className="tt2-page">
      <div className="tt2-page-inner">
        <Navbar t={t} language={language} setLanguage={setLanguage} languageOptions={languageOptions} />

        <main className="tt2-site-main">
          <HeroSection t={t} />
          <TrustedBySection t={t} clients={CLIENTS} />
          <ExperienceStatsSection t={t} />
          <ExperienceSection t={t} />
          <SolutionsSection t={t} />
          <FeaturedProjectsSection t={t} />
          <CasesSection t={t} />
          <ProcessSection t={t} />
          <WhyChooseSection t={t} />
          <FinalCtaSection t={t} contactEmail={CONTACT_EMAIL} whatsappNumber={WHATSAPP_NUMBER} />
        </main>

        <FloatingLeadButton whatsappNumber={WHATSAPP_NUMBER} label={t.nav.cta} />
        <FloatingWhatsAppButton />
        <Footer
          t={t}
          contactEmail={CONTACT_EMAIL}
          whatsappNumber={WHATSAPP_NUMBER}
          language={language}
          setLanguage={setLanguage}
          languageOptions={languageOptions}
        />
        <CookieConsent t={t} />
      </div>
    </div>
  );
}
