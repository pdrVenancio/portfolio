import { Briefcase, Calendar, ArrowRight } from "lucide-react";

const experiences = [
  {
    role: "Desenvolvedor Full Stack",
    company: "1UP Technology",
    period: "10/2025 – Atual",
    current: true,
    description:
      "Atuo no desenvolvimento e manutenção do sistema de controle de acesso, criando novas funcionalidades e integrações entre o backend em .NET Web API e o frontend em Angular.",
    highlights: [
      "Implementação de endpoints REST e componentes modulares",
      "Otimizações de performance para maior estabilidade",
      "Gerenciamento de entradas e monitoramento de pessoas e veículos",
    ],
    technologies: ["C# (.NET)", "TypeScript", "Angular", "MongoDB", "Tailwind", "RabbitMQ"],
  },
  {
    role: "Desenvolvedor Full Stack",
    company: "APTIV",
    period: "11/2024 – 10/2025",
    current: false,
    description:
      "Responsável pela manutenção e refatoração de três sistemas críticos, melhorando a agilidade e eficiência dos processos nas equipes de Engenharia.",
    highlights: [
      "Desenvolvimento de funcionalidades para gestão de cotações de produtos",
      "Implantação de solução OCR com Python para automação de extração de dados",
      "Redução do tempo de processamento de dias para horas",
    ],
    technologies: ["JavaScript", "T-SQL", "Python", "PHP", "Bootstrap", "Apache ECharts"],
  },
  {
    role: "Estágio em Desenvolvimento Full Stack",
    company: "APTIV",
    period: "04/2024 – 11/2024",
    current: false,
    description:
      "Desenvolvi soluções de automação utilizando aplicações web para otimizar processos internos.",
    highlights: [
      "Economia superior a R$ 40K em apenas 2 meses",
      "Redução de tempo em reuniões e trocas de e-mails",
      "Impacto em 8 departamentos beneficiando mais de 60 usuários",
    ],
    technologies: ["JavaScript", "T-SQL", "PHP", "HTML", "CSS", "Bootstrap"],
  },
];

const Experience = () => {
  return (
    <section id="experiencias" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-primary text-sm mb-2">{"// Experiências"}</p>
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
              <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div
                  className={`bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg ${
                    exp.current ? "ring-2 ring-primary/20" : ""
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={18} className="text-primary" />
                        <h3 className="font-bold text-foreground">{exp.role}</h3>
                      </div>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        Atual
                      </span>
                    )}
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar size={14} />
                    <span className="font-mono">{exp.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 text-sm mb-4">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/60">
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
                        className="px-2 py-1 bg-background text-foreground/70 text-xs rounded-md font-mono border border-border"
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
