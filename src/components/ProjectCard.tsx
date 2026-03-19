import { Link } from "react-router-dom";
import { ProjectSummary } from "@/lib/projects";

const ProjectCard = ({ project }: { project: ProjectSummary }) => {
  return (
    <div className="bg-card/60 border border-border rounded-2xl p-6 flex flex-col justify-between gap-6 shadow-sm shadow-foreground/5 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      <div>
        <p className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-3">
          Projeto pessoal
        </p>
        <h3 className="text-2xl font-semibold text-foreground mb-3">
          {project.title}
        </h3>
        <p className="text-foreground/70 text-sm leading-relaxed">
          {project.summary}
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-full text-sm font-semibold border border-border text-foreground/80 hover:text-foreground transition"
        >
          GitHub
        </a>
        <Link
          to={project.detailPath}
          className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90"
        >
          Mais detalhes
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
