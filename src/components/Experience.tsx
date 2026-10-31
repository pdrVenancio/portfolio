import { Briefcase, Calendar, ArrowRight } from "lucide-react";

const experiences = [
  {
    role: "Desenvolvedor Full Stack",
    company: "1UP Technology",
    period: "10/2025 – Atual",
    current: true,
    description:
      "Atuo no desenvolvimento e na evolução de uma plataforma IoT de controle de acesso e monitoramento de presença de pessoas e veículos em operações industriais, entregando funcionalidades de ponta a ponta entre o backend em .NET Web API e o frontend em Angular.",
    highlights: [
      "Implementei novas filas e consumers em RabbitMQ para a exportação assíncrona de relatórios, com envio por e-mail e cancelamento de pedidos pendentes.",
      "Desenvolvi o módulo de workflow de aprovação de horas: geração por executor idempotente (reprocessável sem duplicar registros), aprovação em massa e parcial, comentários e exportação das aprovações.",
      "Criei relatórios geoespaciais com AGM Maps para rastrear o histórico de localização de pessoas e veículos, com polígonos de locais, trajetórias e uma camada de gateways com status de saúde dos dispositivos.",
      "Atuei na integração com dispositivos IoT (SmartBadge, IoT Box e MQTT), incluindo os endpoints de associação e desassociação de SmartBadge e ajustes na sincronização offline entre SQLite e MongoDB.",
      "Construí cadastros com regras de negócio, trilha de auditoria e exportação, como equipamentos com histórico de vínculo a dispositivos, inspeção de veículos, credenciais (tags) e leitores.",
      "Implementei a liberação manual de pessoas e veículos bloqueados e filtros de múltipla seleção por função e empresa nas telas de auditoria e aderência.",
    ],
    technologies: ["C# (.NET)", "TypeScript", "Angular", "Ionic", "MongoDB", "SQLite", "RabbitMQ", "Redis", "MQTT", "Tailwind", "Azure DevOps"],
  },
  {
    role: "Desenvolvedor Full Stack",
    company: "APTIV",
    period: "11/2024 – 10/2025",
    current: false,
    description:
      "Responsável pela manutenção e refatoração de três sistemas críticos, melhorando a agilidade e a eficiência dos processos das equipes de Engenharia de Produto e Engenharia de Componentes.",
    highlights: [
      "Reduzi de dias para poucas horas o tempo de processamento de tarefas, diminuindo o retrabalho.",
      "Desenvolvi funcionalidades de gestão de cotações de produtos internos, ampliando o controle e a rastreabilidade das informações.",
      "Implantei uma solução de OCR com Python para extrair dados de imagens técnicas e convertê-los em tabelas estruturadas.",
    ],
    technologies: ["JavaScript", "T-SQL", "Python", "PHP", "Bootstrap", "Apache ECharts", "Figma"],
  },
  {
    role: "Estágio em Desenvolvimento Full Stack",
    company: "APTIV",
    period: "04/2024 – 11/2024",
    current: false,
    description:
      "Desenvolvi soluções de automação com aplicações web para otimizar processos internos. Os resultados levaram à minha efetivação como desenvolvedor.",
    highlights: [
      "Gerei economia superior a R$ 40 mil em apenas 2 meses.",
      "Impactei 8 departamentos, beneficiando mais de 60 usuários.",
      "Reduzi o tempo gasto em reuniões e trocas de e-mails, melhorando a agilidade da comunicação entre equipes.",
      "Fui efetivado poucos meses depois, em reconhecimento aos resultados entregues.",
    ],
    technologies: ["JavaScript", "T-SQL", "PHP", "HTML", "CSS", "Bootstrap"],
  },
];

const Experience = () => {
  return (
    <section id="experiencias" className="pt-16 md:pt-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-10 md:mb-16">
          <p className="font-mono text-primary text-base md:text-sm mb-2">{"// Experiências"}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Onde já trabalhei
          </h2>
          <div className="w-20 h-1 bg-primary mt-4 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

              {/* Content */}
              <div className={`md:w-1/2 pl-6 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div
                  className={`bg-card rounded-xl p-5 md:p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg ${
                    exp.current ? "ring-2 ring-primary/20" : ""
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2 md:gap-0 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={18} className="text-primary flex-shrink-0 md:flex-shrink" />
                        <h3 className="text-lg md:text-base font-bold text-foreground">{exp.role}</h3>
                      </div>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 flex-shrink-0 md:flex-shrink bg-primary/10 text-primary text-sm md:text-xs font-medium rounded-full">
                        Atual
                      </span>
                    )}
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-muted-foreground text-base md:text-sm mb-4">
                    <Calendar size={14} />
                    <span className="font-mono">{exp.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 text-base md:text-sm mb-4">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-base md:text-sm text-foreground/60">
                        <ArrowRight size={14} className="text-primary mt-1 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-background text-foreground/70 text-sm md:text-xs rounded-md font-mono border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
