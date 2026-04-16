const pt = {
  nav: {
    services: "Serviços",
    clients: "Clientes",
    systems: "Sistemas",
    projects: "Projetos",
    contact: "Contato",
    cta: "Fale Conosco",
  },
  hero: {
    eyebrow: "Tecnologia com clareza, estrutura e evolução",
    titleTop: "Transformamos",
    titleMiddle: "sua operação",
    titleBottom: "em produto digital",
    description:
      "Software sob medida, automação, IA aplicada e plataformas digitais para empresas que precisam crescer com mais clareza, presença e eficiência.",
    primaryCta: "Iniciar projeto",
    secondaryCta: "Ver projetos",
    bullets: ["Projetos com visão de produto", "Execução premium", "Tecnologia com impacto real"],
  },
  trustedBy: {
    title: "Empresas que já confiaram na Tironi Tech",
    description: "Parcerias construídas com entrega consistente, clareza técnica e visão de evolução.",
  },
  experience: {
    eyebrow: "Estrutura premium",
    title: "Experiência, confiança e execução em uma estrutura digital preparada para crescer",
    description:
      "A Tironi Tech une repertório técnico, design com percepção de valor e visão de negócio para construir operações digitais mais fortes.",
    pills: [
      "Confiança comercial",
      "Tempo de mercado",
      "Execução premium",
      "Inovação contínua",
      "Presença digital forte",
      "Mais geração de leads",
    ],
    cards: [
      {
        tag: "Experiência",
        title: "Tempo de mercado e repertório",
        text: "Conhecimento aplicado em diferentes contextos e necessidades de negócio.",
      },
      {
        tag: "Confiança",
        title: "Entrega organizada e previsível",
        text: "Mais clareza de processo, segurança comercial e consistência na execução.",
      },
      {
        tag: "Execução",
        title: "Design forte com base tecnológica sólida",
        text: "Uma construção que combina impacto visual com estrutura real.",
      },
      {
        tag: "Evolução",
        title: "Parceria contínua para crescer",
        text: "Acompanhamento para melhorar, amadurecer e expandir a operação.",
      },
    ],
  },
  featuredProjects: {
    eyebrow: "Projetos em destaque",
    title: "Projetos que mostram o nível de construção da Tironi Tech",
    description:
      "Do produto digital à operação regulatória, desenvolvemos soluções com narrativa forte, clareza de proposta e valor percebido.",
    items: [
      {
        tag: "Cybersecurity / Web3",
        title: "SignGuard",
        description:
          "Solução focada em clareza e proteção para interações com carteiras cripto, ajudando o usuário a entender conexões, assinaturas, aprovações e transações antes da confirmação.",
        bullets: ["Mais clareza para o usuário", "Mais segurança percebida", "Camada visual premium", "Produto com posicionamento forte"],
        cta: "Ver projeto",
      },
      {
        tag: "Compliance / Privacy Tech",
        title: "DeleteActPro",
        description:
          "Plataforma orientada à automação de compliance para California DROP / SB 362, com fluxo de ingestão, evidências, deleções em cascata e registros preparados para auditoria.",
        bullets: ["Automação regulatória", "Estrutura auditável", "Operação escalável", "Posicionamento enterprise"],
        cta: "Conhecer solução",
      },
    ],
  },
  solutions: {
    eyebrow: "Soluções",
    title: "Soluções para operações que precisam de mais estrutura e presença digital",
    items: [
      { title: "Sistemas Web", text: "Plataformas robustas para fluxos, portais, operações e gestão." },
      { title: "IA & Automação", text: "Automação inteligente para reduzir atrito e aumentar eficiência." },
      { title: "Apps & Produtos", text: "Experiências digitais modernas com mais valor percebido." },
      { title: "Plataformas Institucionais", text: "Sites e estruturas digitais que comunicam confiança e posicionamento." },
      { title: "Experiências de Marca", text: "Interfaces com narrativa visual forte e presença premium." },
      { title: "Operação Digital", text: "Estruturação tecnológica para negócios em evolução." },
    ],
  },
  cases: {
    eyebrow: "Apresentação e percepção",
    title: "Projetos apresentados com força visual, clareza e percepção de valor",
    description:
      "A apresentação do projeto também vende confiança. Por isso, tecnologia, design e posicionamento precisam trabalhar juntos.",
  },
  finalCta: {
    title: "Vamos transformar sua operação em uma solução com mais valor percebido",
    description:
      "Se você precisa de software sob medida, automação, IA aplicada ou uma presença digital mais forte, a Tironi Tech pode estruturar isso com visão de produto e execução premium.",
    primaryCta: "Quero conversar",
    secondaryCta: "Apresentar meu projeto",
  },
  footer: {
    text: "Tecnologia, estrutura e percepção de valor para negócios em evolução.",
  },
};

export const siteContent = {
  pt,
  en: pt,
  es: pt,
};

export const LANGUAGE_OPTIONS = [
  { value: "pt", label: "PT-BR" },
  { value: "en", label: "EN" },
  { value: "es", label: "ES" },
];

export function getSiteText(language) {
  return siteContent[language] || siteContent.pt;
}

