export const GOOGLE_ADS_CONVERSION_ID = "AW-18295268277";
export const GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL = "sg2oCLyq-MscELXH7pNE";
export const GOOGLE_ADS_WHATSAPP_SEND_TO = `${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_WHATSAPP_CONVERSION_LABEL}`;

export const DEFAULT_WHATSAPP_URL =
  "https://wa.me/558599498149?text=Ol%C3%A1,%20vim%20pelo%20site%20da%20TironiTech%20e%20quero%20falar%20sobre%20um%20projeto.";

let conversionRedirectStarted = false;

export function reportWhatsAppConversionAndRedirect(url = DEFAULT_WHATSAPP_URL) {
  if (typeof window === "undefined") return false;

  const destinationUrl = url || DEFAULT_WHATSAPP_URL;

  const redirect = () => {
    if (conversionRedirectStarted) return;
    conversionRedirectStarted = true;
    window.location.href = destinationUrl;
  };

  if (typeof window.gtag !== "function") {
    redirect();
    return false;
  }

  window.gtag("event", "conversion", {
    send_to: GOOGLE_ADS_WHATSAPP_SEND_TO,
    event_callback: redirect,
  });

  window.setTimeout(redirect, 900);

  return false;
}
