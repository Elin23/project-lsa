import { useMemo, useState } from "react";

import TitleComponent from "../../components/shared/TitleComponent";
import ProjectCardSkeleton from "../../components/skeletons/ProjectCardSkeleton";
import TabsComponent from "../../components/shared/TabsComponent";
import LoadMoreButton from "../../components/shared/LoadMoreButton";
import ProjectCard from "../../components/cards/ProjectCard";

// استدعاء الهوك الجديد الخاص بـ React Query
import { usePublicProjects } from "../../hooks/queries/useProjects";

const INITIAL_VISIBLE_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const ProjectsSection = () => {
  // جلب البيانات عبر React Query فوراً
  const { data: response, isLoading: loading, isError, error } = usePublicProjects();

  // استخراج قائمة المشاريع من الـ response بشكل آمن
  const projects = useMemo(() => response?.data || [], [response]);

  const [activeTab, setActiveTab] = useState("All Projects");

  const [visibleCount, setVisibleCount] = useState(
    INITIAL_VISIBLE_COUNT
  );

  // ======================================================
  // Categories
  // ======================================================

  const projectCategories = useMemo(() => {
    const categories = Array.from(
      new Set(
        projects
          .map((project) => project.categoryLabel)
          .filter(Boolean)
      )
    );

    return [
      {
        label: "All Projects",
        value: "All Projects",
      },
      ...categories.map((category) => ({
        label: category,
        value: category,
      })),
    ];
  }, [projects]);

  // ======================================================
  // Filter Projects
  // ======================================================

  const filteredProjects = useMemo(() => {
    if (activeTab === "All Projects") {
      return projects;
    }

    return projects.filter(
      (project) => project.categoryLabel === activeTab
    );
  }, [projects, activeTab]);

  // ======================================================
  // Visible Projects
  // ======================================================

  const visibleProjects = filteredProjects.slice(
    0,
    visibleCount
  );

  // ======================================================
  // Change Category
  // ======================================================

  const handleChangeTab = (tab: string) => {
    setActiveTab(tab);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  // ======================================================
  // Load More / Show Less
  // ======================================================

  const handleToggleProjects = () => {
    if (visibleCount >= filteredProjects.length) {
      setVisibleCount(INITIAL_VISIBLE_COUNT);
      return;
    }

    setVisibleCount((previousCount) =>
      Math.min(
        previousCount + LOAD_MORE_COUNT,
        filteredProjects.length
      )
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

        {!loading && !isError && projectCategories.length > 1 && (
          <div className="flex justify-center">
            <TabsComponent
              tabs={projectCategories}
              activeTab={activeTab}
              onChange={handleChangeTab}
            />
          </div>
        )}
      </div>

      {/* Error State */}

      {!loading && isError && (
        <div
          className="
            mt-12
            text-center
            text-muted-blue
          "
        >
          {error?.message || "Unable to load projects. Please try again later."}
        </div>
      )}

      {/* Projects Grid */}

      {!isError && (
        <div
          key={`${activeTab}-${visibleCount}-${loading}`}
          className="
            mt-10
            grid
            items-stretch
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {loading
            ? Array.from({
              length: INITIAL_VISIBLE_COUNT,
            }).map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))
            : visibleProjects.map((project, index) => (
              <div
                key={project._id}
                data-aos="fade"
                data-aos-duration="500"
                data-aos-delay={index * 40}
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
                  <ProjectCard project={project} />
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Empty State */}

      {!loading &&
        !isError &&
        filteredProjects.length === 0 && (
          <div
            key={activeTab}
            className="
              mt-12
              animate-[projectEmptyFade_0.4s_ease-out_both]
              text-center
              text-muted-blue
            "
          >
            No projects were found in this category.
          </div>
        )}

      {/* Load More */}

      {!loading &&
        !isError &&
        filteredProjects.length > INITIAL_VISIBLE_COUNT && (
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-out"
            data-aos-once="true"
            className="mt-10 flex justify-center"
          >
            <LoadMoreButton
              isExpanded={
                visibleCount >= filteredProjects.length
              }
              onClick={handleToggleProjects}
            />
          </div>
        )}
    </section>
  );
};

export default ProjectsSection;