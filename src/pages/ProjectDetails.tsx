import { useParams } from "react-router-dom";

import HeroSection from "../sections/HeroSection";
import DetailedScope from "../sections/ProjectDetails/DetailedScope";
import ProjectGallery from "../sections/ProjectDetails/ProjectGallery";

import { getProjectBySlug } from "../data/projectsData";

const ProjectDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="py-20 text-center text-xl font-semibold text-blue-01">
        Project not found.
      </div>
    );
  }

  return (
    <div className="space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28">
      <HeroSection
        image={project.heroImage}
        title={project.heroTitle}
        description={project.heroDescription}
      />

      <DetailedScope project={project} />

      <ProjectGallery project={project} />
    </div>
  );
};

export default ProjectDetailsPage;