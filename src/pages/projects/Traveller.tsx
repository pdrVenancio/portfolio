import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetailLayout from "@/components/ProjectDetailLayout";
import { getProjectBySlug, getProjectNeighbors } from "@/lib/projects";

const Traveller = () => {
  const project = getProjectBySlug("traveller");
  if (!project) return null;

  const neighbors = getProjectNeighbors("traveller");
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ProjectDetailLayout project={project} neighbors={neighbors} />
      <Footer />
    </div>
  );
};

export default Traveller;
