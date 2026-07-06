import { reportWhatsAppConversionAndRedirect } from "../../utils/googleAdsConversion";

export default function FloatingLeadButton({ whatsappNumber, label }) {
  const message = "Olá, vim pelo site da TironiTech e quero falar sobre um projeto.";
  const href = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}` : "#contato";
  return (
    <a
      className="tt2-floating-lead"
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={(event) => {
        if (!href.startsWith("https://wa.me/558599498149")) return;
        event.preventDefault();
        reportWhatsAppConversionAndRedirect(href);
      }}
    >
      {label}
    </a>
  );
}

