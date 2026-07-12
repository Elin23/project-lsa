import { useEffect, useMemo, useState } from "react";

import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import ProjectCard from "../../components/ProjectCard";
import ProjectCardSkeleton from "../../components/skeletons/ProjectCardSkeleton";
import TabsComponent from "../../components/shared/TabsComponent";
import LoadMoreButton from "../../components/shared/LoadMoreButton";

import { projectCategories, projectsData } from "../../data/projectsData";

const INITIAL_VISIBLE_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const ProjectsSection = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState("All Projects");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeTab === "All Projects") {
      return projectsData;
    }

    return projectsData.filter(
      (project) => project.category === activeTab
    );
  }, [activeTab]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleChangeTab = (tab: string) => {
    setActiveTab(tab);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

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

  return (
    <section>
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

        <TabsComponent
          tabs={projectCategories}
          activeTab={activeTab}
          onChange={handleChangeTab}
        />
      </div>

      {/* Projects Grid */}
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
          ? Array.from({ length: INITIAL_VISIBLE_COUNT }).map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))
          : visibleProjects.map((project, index) => (
              <div
                key={project.id}
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

      {/* Empty State */}
      {!loading && filteredProjects.length === 0 && (
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
      {!loading && filteredProjects.length > INITIAL_VISIBLE_COUNT && (
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-out"
          data-aos-once="true"
          
          className="mt-10 flex justify-center"
        >
          <LoadMoreButton
            isExpanded={visibleCount >= filteredProjects.length}
            onClick={handleToggleProjects}
          />
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;