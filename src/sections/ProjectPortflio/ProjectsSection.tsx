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
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeTab === "All Projects") return projectsData;

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
    } else {
      setVisibleCount((prev) =>
        Math.min(prev + LOAD_MORE_COUNT, filteredProjects.length)
      );
    }
  };

  return (
    <section>
      <TitleComponent
        title="Our Projects"
        description="Showcasing our engineering excellence and infrastructure development across the energy sector in Iraq."
      />

      <TabsComponent
        tabs={projectCategories}
        activeTab={activeTab}
        onChange={handleChangeTab}
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: INITIAL_VISIBLE_COUNT }).map((_, index) => (
            <ProjectCardSkeleton key={index} />
          ))
          : visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
      </div>

      {!loading && filteredProjects.length > INITIAL_VISIBLE_COUNT && (
        <div className="mt-10 flex justify-center">
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