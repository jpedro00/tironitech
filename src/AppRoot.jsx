import { useState } from "react";
import "./styles/theme.css";

import IntroOverlay from "./components/IntroOverlay";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingLeadButton from "./components/ui/FloatingLeadButton";
import StarfieldBackground from "./components/ui/StarfieldBackground";

import HeroSection from "./components/sections/HeroSection";
import TrustedBySection from "./components/sections/TrustedBySection";
import ExperienceSection from "./components/sections/ExperienceSection";
import FeaturedProjectsSection from "./components/sections/FeaturedProjectsSection";
import SolutionsSection from "./components/sections/SolutionsSection";
import CasesSection from "./components/sections/CasesSection";
import FinalCtaSection from "./components/sections/FinalCtaSection";

import { getSiteText, LANGUAGE_OPTIONS } from "./content/siteContent";

const CONTACT_EMAIL = "tironi@tironitech.com";
const WHATSAPP_NUMBER = "5585999498149";

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
  const [language, setLanguage] = useState("pt");
  const t = getSiteText(language);

  return (
    <div className="tt2-page">
      <StarfieldBackground />
      <IntroOverlay />

      <div className="tt2-page-inner">
        <Navbar t={t} language={language} setLanguage={setLanguage} languageOptions={LANGUAGE_OPTIONS} />

        <main className="tt2-site-main">
          <HeroSection t={t} />
          <TrustedBySection t={t} clients={CLIENTS} />
          <ExperienceSection t={t} />
          <FeaturedProjectsSection t={t} />
          <SolutionsSection t={t} />
          <CasesSection t={t} />
          <FinalCtaSection t={t} contactEmail={CONTACT_EMAIL} whatsappNumber={WHATSAPP_NUMBER} />
        </main>

        <FloatingLeadButton whatsappNumber={WHATSAPP_NUMBER} label={t.nav.cta} />
        <Footer t={t} contactEmail={CONTACT_EMAIL} whatsappNumber={WHATSAPP_NUMBER} language={language} setLanguage={setLanguage} />
      </div>
    </div>
  );
}

