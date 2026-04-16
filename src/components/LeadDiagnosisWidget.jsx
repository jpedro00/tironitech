import { useMemo, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";

const steps = [
  {
    key: "need",
    title: "O que você precisa estruturar?",
    options: [
      "Software sob medida",
      "Automação de processos",
      "IA aplicada",
      "MVP / Produto digital",
      "Modernização de sistema",
    ],
  },
  {
    key: "stage",
    title: "Em que momento sua operação está?",
    options: ["Ideia inicial", "Operação já existe", "Sistema atual limita crescimento", "Quero escalar"],
  },
  {
    key: "priority",
    title: "Qual sua prioridade agora?",
    options: ["Reduzir retrabalho", "Ganhar velocidade", "Melhorar experiência", "Integrar sistemas", "Vender mais"],
  },
];

function buildRecommendation(answers) {
  const need = answers.need || "";
  const stage = answers.stage || "";
  const priority = answers.priority || "";

  if (need === "Automação de processos") {
    return {
      title: "Diagnóstico recomendado: automação operacional inteligente",
      description:
        "Sua operação tem espaço claro para reduzir esforço manual, centralizar fluxos e ganhar escala com mais previsibilidade.",
    };
  }

  if (need === "IA aplicada") {
    return {
      title: "Diagnóstico recomendado: IA aplicada ao fluxo da operação",
      description:
        "O melhor caminho é identificar tarefas repetitivas, atendimento, classificação, análise e suporte à decisão onde IA gera retorno mais rápido.",
    };
  }

  if (need === "MVP / Produto digital" || stage === "Ideia inicial") {
    return {
      title: "Diagnóstico recomendado: MVP com foco em validação",
      description: "O cenário ideal é desenhar um produto enxuto, validável e pronto para evoluir sem desperdício.",
    };
  }

  if (need === "Modernização de sistema" || stage === "Sistema atual limita crescimento") {
    return {
      title: "Diagnóstico recomendado: modernização e reestruturação de sistema",
      description:
        "Seu contexto indica necessidade de reorganizar arquitetura, performance e experiência para destravar crescimento com segurança.",
    };
  }

  if (priority === "Integrar sistemas") {
    return {
      title: "Diagnóstico recomendado: integração + painel centralizador",
      description:
        "O próximo passo é conectar ferramentas, consolidar dados e criar uma visão operacional mais clara para o negócio.",
    };
  }

  if (priority === "Vender mais" || priority === "Melhorar experiência") {
    return {
      title: "Diagnóstico recomendado: produto digital orientado à conversão",
      description:
        "Seu caso pede uma solução com foco em experiência, clareza de jornada e estrutura tecnológica voltada para crescimento comercial.",
    };
  }

  return {
    title: "Diagnóstico recomendado: solução digital sob medida",
    description:
      "Seu cenário indica oportunidade para estruturar uma solução personalizada, alinhada ao momento da operação e aos objetivos do negócio.",
  };
}

export default function LeadDiagnosisWidget({
  whatsappNumber = "",
  contactEmail = "",
  scheduleHref = "#contato",
}) {
  const [answers, setAnswers] = useState({});
  const [stepIndex, setStepIndex] = useState(0);

  const currentStep = steps[stepIndex];
  const isComplete = stepIndex >= steps.length;
  const recommendation = useMemo(() => buildRecommendation(answers), [answers]);

  const whatsappHref = useMemo(() => {
    if (!whatsappNumber) return "#contato";
    const text = `Olá! Fiz o diagnóstico no site da Tironi Tech.

Necessidade: ${answers.need || "-"}
Estágio: ${answers.stage || "-"}
Prioridade: ${answers.priority || "-"}

Resultado: ${recommendation.title}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  }, [answers, recommendation.title, whatsappNumber]);

  const proposalHref = useMemo(() => {
    if (!contactEmail) return scheduleHref;
    const subject = "Diagnóstico Tironi Tech — Quero uma proposta";
    const body = `Olá! Fiz o diagnóstico rápido no site da Tironi Tech.

Necessidade: ${answers.need || "-"}
Estágio: ${answers.stage || "-"}
Prioridade: ${answers.priority || "-"}

Resultado: ${recommendation.title}

Pode me enviar uma proposta inicial?`;
    return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [answers, contactEmail, recommendation.title, scheduleHref]);

  function handleSelect(option) {
    const updated = { ...answers, [currentStep.key]: option };
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
        <span className="tt2-diagnosis-badge">Diagnóstico rápido</span>
        <h3>Descubra qual caminho digital faz mais sentido para sua operação</h3>
        <p>Responda 3 etapas rápidas e veja uma direção inicial mais alinhada ao seu momento.</p>
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
                Etapa {stepIndex + 1} / {steps.length}
              </span>
              <h4>{currentStep.title}</h4>
            </div>

            <div className="tt2-diagnosis-options">
              {currentStep.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  className="tt2-diagnosis-option"
                  onClick={() => handleSelect(option)}
                >
                  {option}
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
                Voltar
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
            <span className="tt2-diagnosis-result-label">Resultado inicial</span>
            <h4>{recommendation.title}</h4>
            <p>{recommendation.description}</p>

            <div className="tt2-diagnosis-summary">
              <span>{answers.need}</span>
              <span>{answers.stage}</span>
              <span>{answers.priority}</span>
            </div>

            <div className="tt2-diagnosis-result-actions">
              <a href={scheduleHref} className="tt2-diagnosis-primary">
                Agendar diagnóstico
              </a>
              <a
                href={whatsappHref}
                target={whatsappHref.startsWith("http") ? "_blank" : undefined}
                rel={whatsappHref.startsWith("http") ? "noreferrer" : undefined}
                className="tt2-diagnosis-secondary-link"
              >
                Falar no WhatsApp
              </a>
              <a href={proposalHref} className="tt2-diagnosis-tertiary-link">
                Pedir proposta
              </a>
            </div>

            <button type="button" className="tt2-diagnosis-restart" onClick={handleRestart}>
              Refazer diagnóstico
            </button>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

