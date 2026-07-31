import { useEffect, useMemo, useState } from "react";
import { projectsData } from "../../../data/projectsData";
import TitleComponent from "../../../components/shared/TitleComponent";
import Slider2 from "../../../components/shared/Slider2";
import FeaturedProjectsCardSkeleton from "../../../components/skeletons/FeaturedProjectsCardSkeleton";
import FeaturedProjectsCard from "./FeaturedProjectsCard";



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

  const skeletonItems = useMemo(
    () =>
      Array.from(
        { length: FEATURED_PROJECTS_COUNT },
        (_, index) => index,
      ),
    [],
  );

  return (
    <section id="featured-projects">
      <TitleComponent
        title="Featured Projects"
        description="A showcase of our engineering scale and precision across the region's most challenging landscapes."
      />

      {/* Mobile slider */}
      <div className="md:hidden">
        {loading ? (
          <Slider2
            items={skeletonItems}
            visibleItems={1}
            gap={16}
            autoPlay={false}
            showControls={false}
            renderItem={(item) => (
              <FeaturedProjectsCardSkeleton key={item} />
            )}
          />
        ) : (
          <Slider2
            items={featuredProjects}
            visibleItems={{
              default: 1,
              sm: featuredProjects.length >= 2 ? 2 : 1,
            }}
            gap={16}
            autoPlay
            autoPlayDelay={4000}
            showControls={featuredProjects.length > 1}
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

      {/* Tablet and desktop grid */}
      <div
        className="
          hidden
          gap-6
          md:grid
          md:grid-cols-2
          lg:grid-cols-3
          lg:gap-8
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