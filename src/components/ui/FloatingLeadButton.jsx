export default function FloatingLeadButton({ whatsappNumber, label }) {
  const href = whatsappNumber ? `https://wa.me/${whatsappNumber}` : "#contato";
  return (
    <a className="tt2-floating-lead" href={href} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
}

