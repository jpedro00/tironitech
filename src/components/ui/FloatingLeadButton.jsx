export default function FloatingLeadButton({ whatsappNumber, label }) {
  const message = "Olá, vim pelo site da TironiTech e quero falar sobre um projeto.";
  const href = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}` : "#contato";
  return (
    <a className="tt2-floating-lead" href={href} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
}

