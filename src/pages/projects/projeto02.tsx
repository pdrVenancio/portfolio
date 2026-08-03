import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetailLayout from "@/components/ProjectDetailLayout";
import { getProjectBySlug, getProjectNeighbors } from "@/lib/projects";

const Projeto02 = () => {
  const project = getProjectBySlug("relatorio-ad-hoc");
  if (!project) return null;

  const neighbors = getProjectNeighbors("relatorio-ad-hoc");
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ProjectDetailLayout project={project} neighbors={neighbors} />
      <Footer />
    </div>
  );
};

export default Projeto02;
