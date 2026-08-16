import { useMemo } from "react";

import TitleComponent from "../../../components/shared/TitleComponent";
import Slider2 from "../../../components/shared/Slider2";

import FeaturedProjectsCardSkeleton from "../../../components/skeletons/FeaturedProjectsCardSkeleton";

import SectionState from "../../../components/feedback/SectionState";

import FeaturedProjectsCard from "./FeaturedProjectsCard";

import {
  usePublicProjects,
} from "../../../hooks/queries/useProjects";

const SKELETON_ITEMS = 6;

export default function FeaturedProjects() {
  // ====================================================
  // React Query
  // ====================================================

  const {
    data: projects = [],
    isLoading,
    isError,
    isFetching,
    refetch,
  } = usePublicProjects();

  // ====================================================
  // Featured Projects
  // ====================================================

  const featuredProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          project.isFeatured,
      ),
    [projects],
  );

  const skeletonItems = useMemo(
    () =>
      Array.from(
        {
          length:
            SKELETON_ITEMS,
        },
        (_, index) =>
          index,
      ),
    [],
  );

  // ====================================================
  // Render
  // ====================================================

  return (
    <section id="featured-projects">
      <TitleComponent
        title="Featured Projects"
        description="A showcase of our engineering scale and precision across the region's most challenging landscapes."
      />

      {/* ================================================
          Loading
      ================================================= */}

      {isLoading ? (
        <>
          {/* Mobile */}
          <div className="md:hidden">
            <Slider2
              items={
                skeletonItems
              }
              visibleItems={1}
              gap={16}
              autoPlay={false}
              showControls={
                false
              }
              renderItem={(
                item,
              ) => (
                <FeaturedProjectsCardSkeleton
                  key={
                    item
                  }
                />
              )}
            />
          </div>

          {/* Tablet & Desktop */}
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
            {skeletonItems.map(
              (item) => (
                <FeaturedProjectsCardSkeleton
                  key={
                    item
                  }
                />
              ),
            )}
          </div>
        </>
      ) : isError ? (
        /* ================================================
           Error
        ================================================= */

        <SectionState
          variant="error"
          title="Unable to load featured projects"
          message="We couldn't load our featured projects right now. Please try again in a moment."
          onRetry={() => {
            void refetch();
          }}
          isRetrying={
            isFetching
          }
        />
      ) : featuredProjects.length ===
        0 ? (
        /* ================================================
           Empty
        ================================================= */

        <SectionState
          variant="empty"
          title="No featured projects added yet"
          message="Featured projects have not been published yet. They will appear here once available."
        />
      ) : (
        /* ================================================
           Success
        ================================================= */

        <>
          {/* Mobile Slider */}
          <div className="md:hidden">
            <Slider2
              items={
                featuredProjects
              }
              visibleItems={{
                default: 1,
                sm:
                  featuredProjects.length >=
                  2
                    ? 2
                    : 1,
              }}
              gap={16}
              autoPlay={
                featuredProjects.length >
                1
              }
              autoPlayDelay={
                4000
              }
              showControls={
                featuredProjects.length >
                1
              }
              renderItem={(
                project,
              ) => (
                <FeaturedProjectsCard
                  key={
                    project._id
                  }
                  image={
                    project
                      .cardImage
                      .url
                  }
                  category={
                    project.categoryLabel
                  }
                  title={
                    project.title
                  }
                  path={`/projects/${project.slug}`}
                />
              )}
            />
          </div>

          {/* Tablet and Desktop Grid */}
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
            {featuredProjects.map(
              (
                project,
              ) => (
                <FeaturedProjectsCard
                  key={
                    project._id
                  }
                  image={
                    project
                      .cardImage
                      .url
                  }
                  category={
                    project.categoryLabel
                  }
                  title={
                    project.title
                  }
                  path={`/projects/${project.slug}`}
                />
              ),
            )}
          </div>
        </>
      )}
    </section>
  );
}