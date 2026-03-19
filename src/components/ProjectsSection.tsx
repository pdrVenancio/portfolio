import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-primary text-sm mb-2">{"// Projetos Pessoais"}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Projetos pessoais
          </h2>
          <p className="text-foreground/70 mt-3">
            Cada projeto reúne desafios técnicos, decisões de arquitetura e um foco claro na entrega de valor aos usuários. Essas são três iniciativas que demonstram como transformamos pesquisas em funcionalidades tangíveis.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
