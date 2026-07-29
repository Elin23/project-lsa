import { Navigate, useParams } from "react-router-dom";

import HeroSection, { type HeroSlide } from "../sections/HeroSection";
import DetailedScope from "../sections/ProjectDetails/DetailedScope";
import ProjectGallery from "../sections/ProjectDetails/ProjectGallery";
import ProjectCertificates from "../sections/ProjectDetails/ProjectCertificates";

import { getProjectBySlug } from "../data/projectsData";

const ProjectDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const projectHeroSlides: HeroSlide[] = [
    {
      id: `${project.slug}-hero`,
      type: "image",
      src: project.heroImage,
      position: "center",
    },
  ];

  return (
    <div className="space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28">
      <HeroSection
        slides={projectHeroSlides}
        title={project.heroTitle}
        description={project.heroDescription}
      />

      <DetailedScope project={project} />

      {project.certificates.length > 0 && (
        <ProjectCertificates certificates={project.certificates} />
      )}

      <ProjectGallery project={project} />
    </div>
  );
};

export default ProjectDetailsPage;