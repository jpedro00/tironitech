import CountUpStat from "../shared/CountUpStat";

export default function ExperienceStatsSection({ t }) {
  const metrics = t.experienceProof?.metrics || t.hero.authority || [];

  if (!t.experienceProof || metrics.length === 0) return null;

  return (
    <section className="tt2-section tt2-stats-footer-section" aria-label={t.experienceProof.title}>
      <div className="tt2-container tt2-experience-proof tt2-stats-footer">
        <div className="tt2-proof-mini-grid" aria-label={t.experienceProof.title}>
          {metrics.map((item) => (
            <CountUpStat key={`${item.value}-${item.label}`} value={item.value} label={item.label} className="tt2-proof-mini-card" />
          ))}
        </div>
      </div>
    </section>
  );
}
