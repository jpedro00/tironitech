import {
  DEFAULT_WHATSAPP_URL,
  reportWhatsAppConversionAndRedirect,
} from "../../utils/googleAdsConversion";

const WHATSAPP_LEAD_HREF = DEFAULT_WHATSAPP_URL;

export default function FloatingWhatsAppButton() {
  return (
    <a
      className="tt2-floating-whatsapp"
      href={WHATSAPP_LEAD_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a TironiTech no WhatsApp"
      onClick={(event) => {
        event.preventDefault();
        reportWhatsAppConversionAndRedirect(WHATSAPP_LEAD_HREF);
      }}
    >
      <svg className="tt2-floating-whatsapp-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M16.02 4C9.41 4 4.03 9.31 4.03 15.85c0 2.08.55 4.12 1.6 5.91L4 28l6.39-1.66a12.1 12.1 0 0 0 5.63 1.41C22.63 27.75 28 22.43 28 15.9 28 9.34 22.63 4 16.02 4Zm0 21.74c-1.76 0-3.49-.47-5-1.36l-.36-.21-3.79.98 1.01-3.65-.24-.38a9.77 9.77 0 0 1-1.57-5.27c0-5.43 4.46-9.84 9.95-9.84 5.48 0 9.94 4.43 9.94 9.89 0 5.42-4.46 9.84-9.94 9.84Zm5.45-7.37c-.3-.15-1.77-.86-2.04-.96-.27-.1-.47-.15-.67.15-.2.29-.77.96-.95 1.15-.17.2-.35.22-.65.08-.3-.15-1.27-.46-2.42-1.48-.89-.79-1.5-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.49.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.19-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1-1.04 2.45s1.07 2.86 1.22 3.06c.15.2 2.1 3.17 5.08 4.45.71.3 1.26.48 1.69.62.71.22 1.36.19 1.88.12.57-.08 1.77-.71 2.02-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35Z"
        />
      </svg>
      <span className="tt2-floating-whatsapp-badge" aria-hidden="true">1</span>
      <span className="tt2-floating-whatsapp-tooltip" aria-hidden="true">Atendimento no WhatsApp</span>
    </a>
  );
}
