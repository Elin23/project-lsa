import RelatedProjectCard from "./RelatedProjectCard";
import RelatedProjectCardSkeleton from "../../../components/skeletons/RelatedProjectCardSkeleton";

import TitleComponent from "../../../components/shared/TitleComponent";
import Slider from "../../../components/shared/Slider";

import type {
  ServiceRelatedProject,
} from "../../../Types/service";

type RelatedProjectsProps = {
  projects: ServiceRelatedProject[];
  loading?: boolean;
};

export default function RelatedProjects({
  projects,
  loading = false,
}: RelatedProjectsProps) {
  const relatedProjects =
    projects.slice(0, 3);

  if (
    !loading &&
    relatedProjects.length === 0
  ) {
    return null;
  }

  return (
    <section className="pb-16 md:pb-20 lg:pb-24 xl:pb-28">
      <TitleComponent
        title="Related Projects"
        description="Specialized interventions across Iraq."
      />

      {/* Mobile Slider */}
      <div className="mt-8 md:hidden">
        {loading ? (
          <Slider
            items={[1]}
            showDots={false}
            renderItem={() => (
              <RelatedProjectCardSkeleton />
            )}
          />
        ) : (
          <Slider
            items={relatedProjects}
            showDots={
              relatedProjects.length > 1
            }
            renderItem={(project) => (
              <RelatedProjectCard
                category="LSA Project"
                title={project.title}
                description={
                  project.shortDescription
                }
                image={
                  project.cardImage.url
                }
                path={`/projects/${project.slug}`}
              />
            )}
          />
        )}
      </div>

      {/* Tablet & Desktop Grid */}
      <div
        className="
          mt-8
          hidden
          gap-6
          md:grid
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {loading
          ? Array.from({
              length: 3,
            }).map((_, index) => (
              <RelatedProjectCardSkeleton
                key={index}
              />
            ))
          : relatedProjects.map(
              (project) => (
                <RelatedProjectCard
                  key={project._id}
                  category="LSA Project"
                  title={project.title}
                  description={
                    project.shortDescription
                  }
                  image={
                    project.cardImage.url
                  }
                  path={`/projects/${project.slug}`}
                />
              ),
            )}
      </div>
    </section>
  );
}