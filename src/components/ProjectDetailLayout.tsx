import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { ProjectSummary } from "@/lib/projects";

const projectImageFolders = {
  paduni: "projeto01",
  "relatorio-ad-hoc": "projeto02",
  "pulsar-investimentos": "projeto03",
} as const;

const imageModules = import.meta.glob("/src/assets/images/**/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

type ProjectDetailLayoutProps = {
  project: ProjectSummary;
  neighbors?: { prev?: ProjectSummary; next?: ProjectSummary };
};

const getProjectImages = (slug: string) => {
  const folder = projectImageFolders[slug as keyof typeof projectImageFolders];
  if (!folder) return [];

  return Object.entries(imageModules)
    .filter(([path]) => path.includes(`/images/${folder}/`))
    .sort(([aPath], [bPath]) => {
      const aIsLogo = /\/logo\./i.test(aPath);
      const bIsLogo = /\/logo\./i.test(bPath);

      if (aIsLogo !== bIsLogo) return aIsLogo ? -1 : 1;
      return aPath.localeCompare(bPath);
    })
    .map(([, url]) => url);
};

const ProjectDetailLayout = ({ project, neighbors }: ProjectDetailLayoutProps) => {
  const images = getProjectImages(project.slug);
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveImage(0);
  }, [project.slug]);

  const hasImages = images.length > 0;
  const lightboxSlides = images.map((image) => ({ src: image }));

  const goToPreviousImage = () => {
    setActiveImage((current) => (current - 1 + images.length) % images.length);
  };

  const goToNextImage = () => {
    setActiveImage((current) => (current + 1) % images.length);
  };

  return (
    <section className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-12">
          <div>
            <p className="font-mono text-primary text-sm mb-1">{"// Projeto em destaque"}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{project.title}</h1>
            <p className="text-foreground/70 mt-3 max-w-3xl">{project.summary}</p>
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

          <div className="project-detail-grid">
            <div className="min-w-0 w-full bg-card border border-border rounded-3xl p-8 shadow-sm">
              <p className="text-lg font-semibold text-foreground mb-3">Resumo do projeto</p>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {project.detail.overview}
              </p>

              {hasImages && (
                <div className="mt-6 space-y-4">
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/30">
                    <button
                      type="button"
                      onClick={() => setLightboxOpen(true)}
                      className="block h-72 w-full cursor-zoom-in"
                      aria-label={`Ampliar imagem ${activeImage + 1}`}
                    >
                      <img
                        src={images[activeImage]}
                        alt={`${project.title} - imagem ${activeImage + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>

                    {images.length > 1 && (
                      <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-3">
                        <button
                          type="button"
                          onClick={goToPreviousImage}
                          className="rounded-full bg-background/90 p-2 text-foreground shadow-md transition hover:bg-background"
                          aria-label="Imagem anterior"
                        >
                          <ArrowLeft size={18} />
                        </button>
                        <button
                          type="button"
                          onClick={goToNextImage}
                          className="rounded-full bg-background/90 p-2 text-foreground shadow-md transition hover:bg-background"
                          aria-label="Próxima imagem"
                        >
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    )}
                  </div>

                  {images.length > 1 && (
                    <div className="flex flex-wrap gap-3">
                      {images.map((image, index) => (
                        <button
                          key={image}
                          type="button"
                          onClick={() => setActiveImage(index)}
                          className={`overflow-hidden rounded-xl border transition ${
                            index === activeImage
                              ? "border-primary ring-2 ring-primary/20"
                              : "border-border opacity-70 hover:opacity-100"
                          }`}
                          aria-label={`Selecionar imagem ${index + 1}`}
                        >
                          <img
                            src={image}
                            alt={`${project.title} miniatura ${index + 1}`}
                            className="h-16 w-20 object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={activeImage}
                slides={lightboxSlides}
                plugins={[Zoom, Thumbnails]}
                controller={{ closeOnBackdropClick: true }}
                on={{ view: ({ index }) => setActiveImage(index) }}
              />
            </div>

            <div className="min-w-0 w-full bg-card border border-border rounded-3xl p-8 shadow-sm">
              <p className="text-lg font-semibold text-foreground mb-4">Minha atuação</p>
              <ul className="space-y-3 text-foreground/70 text-sm list-disc list-inside">
                {project.detail.role.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="project-detail-grid">
            <div className="min-w-0 w-full bg-card border border-border rounded-3xl p-8 shadow-sm">
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

            <div className="min-w-0 w-full bg-card border border-border rounded-3xl p-8 shadow-sm">
              <p className="text-lg font-semibold text-foreground mb-6">Tecnologias utilizadas</p>
              <div className="space-y-5">
                {Object.entries(project.detail.technologies).map(([category, techList]) => (
                  <div key={category}>
                    <p className="text-sm font-semibold text-foreground mb-2">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {techList.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-muted/30 border border-border rounded-full font-mono text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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
              to="/portfolio/#projetos"
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
