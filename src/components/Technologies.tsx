import { Code, Database, Layout, Wrench } from "lucide-react";

const techCategories = [
  {
    title: "Front-end",
    icon: Layout,
    technologies: ["Angular", "React", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Back-end",
    icon: Code,
    technologies: ["C# (.NET)", "Node.js", "Python", "PHP", "RabbitMQ", "Redis", "Apache Pulsar"],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    technologies: ["SQL Server", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Outras Tecnologias",
    icon: Wrench,
    technologies: ["Git/GitHub", "Figma", "Azure DevOps", "Docker"],
  },
];

const Technologies = () => {
  return (
    <section id="tecnologias" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-primary text-sm mb-2">{"// Tecnologias"}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Minhas habilidades
          </h2>
          <div className="w-20 h-1 bg-primary mt-4 rounded-full" />
        </div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-bold text-foreground text-lg">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-foreground/90">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-full bg-muted/40 border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
