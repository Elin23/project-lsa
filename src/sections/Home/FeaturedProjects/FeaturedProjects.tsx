import { useEffect, useMemo, useState } from "react";

import TitleComponent from "../../../components/shared/TitleComponent";
import Slider2 from "../../../components/shared/Slider2";
import FeaturedProjectsCardSkeleton from "../../../components/skeletons/FeaturedProjectsCardSkeleton";
import FeaturedProjectsCard from "./FeaturedProjectsCard";

import type { ProjectListItem } from "../../../Types/project";
import { getPublicProjects } from "../../../services/projectService";

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<ProjectListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        const response = await getPublicProjects();

        setProjects(response.data);
      } catch (error) {
        console.error(
          "Failed to fetch featured projects:",
          error,
        );
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProjects();
  }, []);

  const featuredProjects = useMemo(() => {
    return projects.filter(
      (project) => project.isFeatured,
    );
  }, [projects]);

  const skeletonItems = useMemo(
    () => Array.from({ length: 6 }, (_, index) => index),
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
        ) : featuredProjects.length > 0 ? (
          <Slider2
            items={featuredProjects}
            visibleItems={{
              default: 1,
              sm:
                featuredProjects.length >= 2
                  ? 2
                  : 1,
            }}
            gap={16}
            autoPlay
            autoPlayDelay={4000}
            showControls={featuredProjects.length > 1}
            renderItem={(project) => (
              <FeaturedProjectsCard
                key={project._id}
                image={project.cardImage.url}
                category={project.categoryLabel}
                title={project.title}
                path={`/projects/${project.slug}`}
              />
            )}
          />
        ) : null}
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
            <FeaturedProjectsCardSkeleton
              key={item}
            />
          ))
          : featuredProjects.map((project) => (
            <FeaturedProjectsCard
              key={project._id}
              image={project.cardImage.url}
              category={project.categoryLabel}
              title={project.title}
              path={`/projects/${project.slug}`}
            />
          ))}
      </div>
    </section>
  );
}