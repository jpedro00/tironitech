import { useMemo, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { reportWhatsAppConversionAndRedirect } from "../utils/googleAdsConversion";

function buildRecommendation(answers, recommendations) {
  const need = answers.need || "";
  const stage = answers.stage || "";
  const priority = answers.priority || "";

  if (need === "processAutomation") return recommendations.automation;
  if (need === "appliedAi") return recommendations.ai;
  if (need === "mvp" || stage === "initialIdea") return recommendations.mvp;
  if (need === "modernization" || stage === "systemLimitsGrowth") return recommendations.modernization;
  if (priority === "integrateSystems") return recommendations.integration;
  if (priority === "sellMore" || priority === "improveExperience") return recommendations.conversion;

  return recommendations.default;
}

function getOptionLabel(steps, key, value) {
  const step = steps.find((item) => item.key === key);
  const option = step?.options.find((item) => item.value === value);
  return option?.label || value || "-";
}

export default function LeadDiagnosisWidget({
  t,
  whatsappNumber = "",
  contactEmail = "",
  scheduleHref = "#contato",
}) {
  const diagnosis = t.diagnosis;
  const steps = diagnosis.steps;
  const [answers, setAnswers] = useState({});
  const [stepIndex, setStepIndex] = useState(0);

  const currentStep = steps[stepIndex];
  const isComplete = stepIndex >= steps.length;
  const recommendation = useMemo(
    () => buildRecommendation(answers, diagnosis.recommendations),
    [answers, diagnosis.recommendations],
  );

  const whatsappHref = useMemo(() => {
    if (!whatsappNumber) return scheduleHref;
    const text = `${diagnosis.whatsappMessage}

${diagnosis.labels.need}: ${getOptionLabel(steps, "need", answers.need)}
${diagnosis.labels.stage}: ${getOptionLabel(steps, "stage", answers.stage)}
${diagnosis.labels.priority}: ${getOptionLabel(steps, "priority", answers.priority)}

${diagnosis.labels.result}: ${recommendation.title}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  }, [answers, diagnosis, recommendation.title, scheduleHref, steps, whatsappNumber]);

  const proposalHref = useMemo(() => {
    if (!contactEmail) return scheduleHref;
    const body = `${diagnosis.emailBodyIntro}

${diagnosis.labels.need}: ${getOptionLabel(steps, "need", answers.need)}
${diagnosis.labels.stage}: ${getOptionLabel(steps, "stage", answers.stage)}
${diagnosis.labels.priority}: ${getOptionLabel(steps, "priority", answers.priority)}

${diagnosis.labels.result}: ${recommendation.title}

${diagnosis.emailBodyFooter}`;
    return `mailto:${contactEmail}?subject=${encodeURIComponent(diagnosis.emailSubject)}&body=${encodeURIComponent(body)}`;
  }, [answers, contactEmail, diagnosis, recommendation.title, scheduleHref, steps]);

  function handleSelect(value) {
    const updated = { ...answers, [currentStep.key]: value };
    setAnswers(updated);

    if (stepIndex < steps.length - 1) {
      setStepIndex((prev) => prev + 1);
    } else {
      setStepIndex(steps.length);
    }
  }

  function handleBack() {
    if (isComplete) {
      setStepIndex(steps.length - 1);
      return;
    }
    setStepIndex((prev) => Math.max(prev - 1, 0));
  }

  function handleRestart() {
    setAnswers({});
    setStepIndex(0);
  }

  return (
    <div className="tt2-diagnosis-widget">
      <div className="tt2-diagnosis-top">
        <span className="tt2-diagnosis-badge">{diagnosis.badge}</span>
        <h3>{diagnosis.title}</h3>
        <p>{diagnosis.description}</p>
      </div>

      <div className="tt2-diagnosis-progress" aria-hidden="true">
        {steps.map((step, index) => {
          const active = !isComplete && index === stepIndex;
          const done = index < stepIndex || isComplete;
          return (
            <div
              key={step.key}
              className={`tt2-diagnosis-dot ${active ? "is-active" : ""} ${done ? "is-done" : ""}`}
            />
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {!isComplete ? (
          <Motion.div
            key={currentStep.key}
            className="tt2-diagnosis-step"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <div className="tt2-diagnosis-step-header">
              <span className="tt2-diagnosis-step-count">
                {diagnosis.stepLabel} {stepIndex + 1} / {steps.length}
              </span>
              <h4>{currentStep.title}</h4>
            </div>

            <div className="tt2-diagnosis-options">
              {currentStep.options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className="tt2-diagnosis-option"
                  onClick={() => handleSelect(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className="tt2-diagnosis-actions">
              <button
                type="button"
                className="tt2-diagnosis-secondary"
                onClick={handleBack}
                disabled={stepIndex === 0}
              >
                {diagnosis.back}
              </button>
            </div>
          </Motion.div>
        ) : (
          <Motion.div
            key="result"
            className="tt2-diagnosis-result"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="tt2-diagnosis-result-label">{diagnosis.resultLabel}</span>
            <h4>{recommendation.title}</h4>
            <p>{recommendation.description}</p>

            <div className="tt2-diagnosis-summary">
              <span>{getOptionLabel(steps, "need", answers.need)}</span>
              <span>{getOptionLabel(steps, "stage", answers.stage)}</span>
              <span>{getOptionLabel(steps, "priority", answers.priority)}</span>
            </div>

            <div className="tt2-diagnosis-result-actions">
              <a href={scheduleHref} className="tt2-diagnosis-primary">
                {diagnosis.schedule}
              </a>
              <a
                href={whatsappHref}
                target={whatsappHref.startsWith("http") ? "_blank" : undefined}
                rel={whatsappHref.startsWith("http") ? "noreferrer" : undefined}
                className="tt2-diagnosis-secondary-link"
                onClick={(event) => {
                  if (!whatsappHref.startsWith("https://wa.me/558599498149")) return;
                  event.preventDefault();
                  reportWhatsAppConversionAndRedirect(whatsappHref);
                }}
              >
                {diagnosis.whatsapp}
              </a>
              <a href={proposalHref} className="tt2-diagnosis-tertiary-link">
                {diagnosis.proposal}
              </a>
            </div>

            <button type="button" className="tt2-diagnosis-restart" onClick={handleRestart}>
              {diagnosis.restart}
            </button>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
