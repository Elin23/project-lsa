import RelatedProjectCard from "../../components/common/RelatedProjects/RelatedProjectCard";
import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import Slider from "../../components/shared/Slider";
import { servicesData2 } from "../../data/servicesData2";

type RelatedProjectsProps = {
  service: (typeof servicesData2)[number];
};

export default function RelatedProjects({ service }: RelatedProjectsProps) {
  const relatedProjectsData = service.details.relatedProjects;

  return (
    <section className="pb-16 md:pb-20 lg:pb-24 xl:pb-28">
      <TitleComponent
        title="Related Projects"
        description="Specialized interventions across Iraq."
      />

      {/* Mobile Slider */}
      <div className="mt-8 md:hidden">
        <Slider
          items={relatedProjectsData}
          renderItem={(project) => (
            <RelatedProjectCard
              category={project.category}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          )}
        />
      </div>

      {/* Tablet & Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {relatedProjectsData.map((project) => (
          <RelatedProjectCard
            key={project.id}
            category={project.category}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}