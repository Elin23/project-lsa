import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import HeroSection, { type HeroSlide } from "../sections/HeroSection";
import DetailedScope from "../sections/ProjectDetails/DetailedScope";
import ProjectGallery from "../sections/ProjectDetails/ProjectGallery";
import ProjectCertificates from "../sections/ProjectDetails/ProjectCertificates";

import type { Project } from "../Types/project";
import { getPublicProjectBySlug } from "../services/projectService";

const ProjectDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) {
      setNotFound(true);
      setLoading(false);
      return;
    }

    const loadProject = async () => {
      try {
        setLoading(true);
        setNotFound(false);

        const data = await getPublicProjectBySlug(slug);

        setProject(data);
      } catch (error) {
        console.error("Failed to load project:", error);

        setProject(null);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-svh bg-white">
        {/* لاحقاً منعمل Skeleton محترم للصفحة كاملة */}
      </div>
    );
  }

  if (notFound || !project) {
    return <Navigate to="/projects" replace />;
  }

  const projectHeroSlides: HeroSlide[] = [
    {
      id: `${project._id}-hero`,
      type: "image",
      src: project.hero.image.url,
      position: "center",
    },
  ];

  return (
    <div className="space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28">
      <HeroSection
        slides={projectHeroSlides}
        title={project.hero.title}
        description={project.hero.description}
      />

      <DetailedScope project={project} />

      {project.certificates.length > 0 && (
        <ProjectCertificates
          certificates={project.certificates}
        />
      )}

      <ProjectGallery project={project} />
    </div>
  );
};

export default ProjectDetailsPage;