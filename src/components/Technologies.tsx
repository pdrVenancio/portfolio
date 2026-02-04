import { Code, Database, Layout, Wrench } from "lucide-react";

const techCategories = [
  {
    title: "Front-end",
    icon: Layout,
    technologies: [
      { name: "Angular", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "React", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    title: "Back-end",
    icon: Code,
    technologies: [
      { name: "C# (.NET)", level: 90 },
      { name: "Node.js", level: 70 },
      { name: "Python", level: 75 },
      { name: "PHP", level: 70 },
    ],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    technologies: [
      { name: "SQL Server", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    title: "Outras Tecnologias",
    icon: Wrench,
    technologies: [
      { name: "Git/GitHub", level: 90 },
      { name: "RabbitMQ", level: 70 },
      { name: "Figma", level: 75 },
    ],
  },
];

const Technologies = () => {
  return (
    <section id="tecnologias" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-primary text-sm mb-2">
            {"// Tecnologias"}
          </p>
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

              {/* Technologies */}
              <div className="space-y-4">
                {category.technologies.map((tech, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-foreground/80 text-sm font-medium">
                        {tech.name}
                      </span>
                      <span className="text-muted-foreground text-xs font-mono">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Courses Section */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-foreground mb-6">
            Cursos Complementares
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Curso .NET Core", hours: "43h", instructor: "Welisson Arley" },
              { name: "Web Moderno com JavaScript", hours: "97.5h", instructor: "Cod3r" },
              { name: "Intensivão de JavaScript", hours: "8h", instructor: "Hashtag" },
              { name: "Jornada Python", hours: "8h", instructor: "Hashtag" },
              { name: "Imersão Front-end", hours: "5h", instructor: "Alura" },
            ].map((course, i) => (
              <div
                key={i}
                className="bg-background rounded-lg p-4 border border-border hover:border-primary/30 transition-colors"
              >
                <h4 className="font-medium text-foreground text-sm mb-1">
                  {course.name}
                </h4>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{course.instructor}</span>
                  <span className="font-mono text-primary">{course.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
