import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetailLayout from "@/components/ProjectDetailLayout";
import { getProjectBySlug, getProjectNeighbors } from "@/lib/projects";

const Projeto01 = () => {
  const project = getProjectBySlug("paduni");
  if (!project) return null;

  const neighbors = getProjectNeighbors("paduni");
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ProjectDetailLayout project={project} neighbors={neighbors} />
      <Footer />
    </div>
  );
};

export default Projeto01;
