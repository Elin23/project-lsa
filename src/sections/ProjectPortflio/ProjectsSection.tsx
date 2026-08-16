import {
  useMemo,
  useState,
} from "react";

import TitleComponent from "../../components/shared/TitleComponent";
import ProjectCardSkeleton from "../../components/skeletons/ProjectCardSkeleton";
import TabsComponent from "../../components/shared/TabsComponent";
import LoadMoreButton from "../../components/shared/LoadMoreButton";
import SectionState from "../../components/feedback/SectionState";

import ProjectCard from "../../components/cards/ProjectCard";

import {
  usePublicProjects,
} from "../../hooks/queries/useProjects";

const INITIAL_VISIBLE_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const ProjectsSection = () => {
  const [
    activeTab,
    setActiveTab,
  ] = useState("All Projects");

  const [
    visibleCount,
    setVisibleCount,
  ] = useState(
    INITIAL_VISIBLE_COUNT,
  );

  // ======================================================
  // React Query
  // ======================================================

  const {
    data: projects = [],
    isLoading,
    isError,
    isFetching,
    refetch,
  } = usePublicProjects();

  // ======================================================
  // Categories
  // ======================================================

  const projectCategories =
    useMemo(() => {
      const categories =
        Array.from(
          new Set(
            projects
              .map(
                (project) =>
                  project.categoryLabel,
              )
              .filter(Boolean),
          ),
        );

      return [
        {
          label: "All Projects",
          value: "All Projects",
        },

        ...categories.map(
          (category) => ({
            label: category,
            value: category,
          }),
        ),
      ];
    }, [projects]);

  // ======================================================
  // Filter Projects
  // ======================================================

  const filteredProjects =
    useMemo(() => {
      if (
        activeTab ===
        "All Projects"
      ) {
        return projects;
      }

      return projects.filter(
        (project) =>
          project.categoryLabel ===
          activeTab,
      );
    }, [
      projects,
      activeTab,
    ]);

  // ======================================================
  // Visible Projects
  // ======================================================

  const visibleProjects =
    filteredProjects.slice(
      0,
      visibleCount,
    );

  // ======================================================
  // Change Category
  // ======================================================

  const handleChangeTab = (
    tab: string,
  ) => {
    setActiveTab(tab);

    setVisibleCount(
      INITIAL_VISIBLE_COUNT,
    );
  };

  // ======================================================
  // Load More / Show Less
  // ======================================================

  const handleToggleProjects =
    () => {
      if (
        visibleCount >=
        filteredProjects.length
      ) {
        setVisibleCount(
          INITIAL_VISIBLE_COUNT,
        );

        return;
      }

      setVisibleCount(
        (previousCount) =>
          Math.min(
            previousCount +
              LOAD_MORE_COUNT,
            filteredProjects.length,
          ),
      );
    };

  // ======================================================
  // Render
  // ======================================================

  return (
    <section id="our-projects">
      {/* Title and Tabs */}

      <div
        data-aos="fade-up"
        data-aos-duration="650"
        data-aos-easing="ease-out-cubic"
        data-aos-offset="60"
        data-aos-once="true"
      >
        <TitleComponent
          title="Our Projects"
          description="Showcasing our engineering excellence and infrastructure development across the energy sector in Iraq."
        />

        {!isLoading &&
          !isError &&
          projects.length >
            0 &&
          projectCategories.length >
            1 && (
            <div className="flex justify-center">
              <TabsComponent
                tabs={
                  projectCategories
                }
                activeTab={
                  activeTab
                }
                onChange={
                  handleChangeTab
                }
              />
            </div>
          )}
      </div>

      {/* ==================================================
          Loading
      =================================================== */}

      {isLoading ? (
        <div
          className="
            mt-10
            grid
            items-stretch
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {Array.from({
            length:
              INITIAL_VISIBLE_COUNT,
          }).map(
            (_, index) => (
              <ProjectCardSkeleton
                key={index}
              />
            ),
          )}
        </div>
      ) : isError ? (
        /* ==================================================
           Error
        =================================================== */

        <div className="mt-10">
          <SectionState
            variant="error"
            title="Unable to load projects"
            message="We couldn't load our projects right now. Please try again in a moment."
            onRetry={() => {
              void refetch();
            }}
            isRetrying={
              isFetching
            }
          />
        </div>
      ) : projects.length ===
        0 ? (
        /* ==================================================
           Empty API State
        =================================================== */

        <div className="mt-10">
          <SectionState
            variant="empty"
            title="No projects added yet"
            message="Projects have not been published yet. They will appear here once available."
          />
        </div>
      ) : filteredProjects.length ===
        0 ? (
        /* ==================================================
           Empty Category State
        =================================================== */

        <div className="mt-10">
          <SectionState
            variant="empty"
            title="No projects in this category"
            message="There are currently no projects available in the selected category."
            compact
          />
        </div>
      ) : (
        /* ==================================================
           Success
        =================================================== */

        <>
          <div
            key={`${activeTab}-${visibleCount}`}
            className="
              mt-10
              grid
              items-stretch
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {visibleProjects.map(
              (
                project,
                index,
              ) => (
                <div
                  key={
                    project._id
                  }
                  data-aos="fade"
                  data-aos-duration="500"
                  data-aos-delay={
                    index * 40
                  }
                  data-aos-easing="ease-out"
                  data-aos-offset="30"
                  data-aos-once="true"
                  className="h-full"
                >
                  <div
                    className="
                      h-full
                      animate-[projectCardFilterFade_0.45s_ease-out_both]
                      motion-reduce:animate-none
                    "
                    style={{
                      animationDelay: `${index * 55}ms`,
                    }}
                  >
                    <ProjectCard
                      project={
                        project
                      }
                    />
                  </div>
                </div>
              ),
            )}
          </div>

          {/* Load More */}

          {filteredProjects.length >
            INITIAL_VISIBLE_COUNT && (
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="ease-out"
              data-aos-once="true"
              className="mt-10 flex justify-center"
            >
              <LoadMoreButton
                isExpanded={
                  visibleCount >=
                  filteredProjects.length
                }
                onClick={
                  handleToggleProjects
                }
              />
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default ProjectsSection;