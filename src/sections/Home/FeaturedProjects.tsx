import { useEffect, useMemo, useState } from "react";

import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import FeaturedProjectsCard from "../../components/common/FeaturedProjects/FeaturedProjectsCard";
import FeaturedProjectsCardSkeleton from "../../components/skeletons/FeaturedProjectsCardSkeleton";
import Slider from "../../components/shared/Slider";

import { projectsData } from "../../data/projectsData";

const FEATURED_PROJECTS_COUNT = 6;

export default function FeaturedProjects() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const featuredProjects = useMemo(() => {
    return projectsData.slice(0, FEATURED_PROJECTS_COUNT);
  }, []);

  const skeletonItems = useMemo(() => {
    return Array.from(
      { length: FEATURED_PROJECTS_COUNT },
      (_, index) => index,
    );
  }, []);

  return (
    <section id="featured-projects">
      <TitleComponent
        title="Featured Projects"
        description="A showcase of our engineering scale and precision across the region's most challenging landscapes."
      />

      {/* Mobile Slider */}
      <div className="block w-full min-w-0 md:hidden">
        {loading ? (
          <Slider
            items={skeletonItems}
            autoPlayDelay={4000}
            showDots={false}
            renderItem={() => (
              <FeaturedProjectsCardSkeleton />
            )}
          />
        ) : (
          <Slider
            items={featuredProjects}
            autoPlayDelay={4000}
            showDots={featuredProjects.length > 1}
            renderItem={(project) => (
              <FeaturedProjectsCard
                image={project.image}
                category={project.category}
                title={project.title}
                path={project.path}
              />
            )}
          />
        )}
      </div>

      {/* Tablet/Desktop Grid */}
      <div
        className="
          hidden
          gap-6
          md:grid
          md:grid-cols-2
          2xl:grid-cols-3
          2xl:gap-8
        "
      >
        {loading
          ? skeletonItems.map((item) => (
              <FeaturedProjectsCardSkeleton key={item} />
            ))
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