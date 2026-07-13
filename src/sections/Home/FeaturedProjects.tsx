import { useEffect, useMemo, useState } from "react";

import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import FeaturedProjectsCard from "../../components/common/FeaturedProjects/FeaturedProjectsCard";
import FeaturedProjectsCardSkeleton from "../../components/skeletons/FeaturedProjectsCardSkeleton";

import { projectsData } from "../../data/projectsData";

const FEATURED_PROJECTS_COUNT = 6;

export default function FeaturedProjects() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, []);

  const featuredProjects = useMemo(() => {
    return projectsData.slice(0, FEATURED_PROJECTS_COUNT);
  }, []);

  return (
    <section>
      <TitleComponent
        title="Featured Projects"
        description="A showcase of our engineering scale and precision across the region's most challenging landscapes."
      />

      <div
        className="
          grid
          grid-cols-1
          gap-4

          md:grid-cols-2
          md:gap-6

          2xl:grid-cols-3
          2xl:gap-8
        "
      >
        {loading
          ? Array.from({ length: FEATURED_PROJECTS_COUNT }).map(
              (_, index) => (
                <FeaturedProjectsCardSkeleton key={index} />
              ),
            )
          : featuredProjects.map((project) => (
              <FeaturedProjectsCard
                key={project.id}
                image={project.image}
                category={project.category}
                title={project.title}
                  path={project.path}

              />
            ))}
      </div>
    </section>
  );
}