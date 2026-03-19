import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectSummary } from "@/lib/projects";

type ProjectDetailLayoutProps = {
  project: ProjectSummary;
  neighbors?: { prev?: ProjectSummary; next?: ProjectSummary };
};

const ProjectDetailLayout = ({ project, neighbors }: ProjectDetailLayoutProps) => {
  return (
    <section className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-12">
          <div>
            <p className="font-mono text-primary text-sm mb-1">{"// Projeto em destaque"}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {project.title}
            </h1>
            <p className="text-foreground/70 mt-3 max-w-3xl">
              {project.summary}
            </p>
            <div className="mt-6">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card/80 p-3 text-foreground/80 transition hover:bg-card hover:text-foreground"
                aria-label="Abrir repositório no GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.6fr,1fr]">
            <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
              <p className="text-lg font-semibold text-foreground mb-3">Resumo do projeto</p>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {project.detail.overview}
              </p>
            </div>
            <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
              <p className="text-lg font-semibold text-foreground mb-4">Minha atuação</p>
              <ul className="space-y-3 text-foreground/70 text-sm list-disc list-inside">
                {project.detail.role.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
              <p className="text-lg font-semibold text-foreground mb-6">Tecnologias utilizadas</p>
              <div className="space-y-5">
                {Object.entries(project.detail.technologies).map(([category, techList]) => (
                  <div key={category}>
                    <p className="text-sm font-semibold text-foreground mb-2">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {techList.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-muted/60 border border-border rounded-full font-mono text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
              <p className="text-lg font-semibold text-foreground mb-6">Desafios enfrentados</p>
              <div className="space-y-5">
                {project.detail.challenges.map((challenge) => (
                  <article key={challenge.title} className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">{challenge.title}</p>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {challenge.description}
                    </p>
                    {challenge.details && (
                      <ul className="list-disc list-inside text-foreground/70 text-xs space-y-1">
                        {challenge.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {neighbors?.prev && (
              <Link
                to={neighbors.prev.detailPath}
                className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground/70 hover:border-primary/50 hover:text-foreground transition"
              >
                <ArrowLeft size={16} />
                Projeto anterior
              </Link>
            )}
            <Link
              to="/#projetos"
              className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm font-semibold text-primary hover:text-primary/70 transition"
            >
              Voltar à página inicial
            </Link>
            {neighbors?.next && (
              <Link
                to={neighbors.next.detailPath}
                className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground/70 hover:border-primary/50 hover:text-foreground transition"
              >
                Próximo projeto
                <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailLayout;
