import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import FeaturedProjectsCard from "../../components/common/FeaturedProjects/FeaturedProjectsCard";
import { featuredProjectsData } from "../../data/featuredProjectsData";

export default function FeaturedProjects() {
  return (
    <section>
      <TitleComponent
        title="Featured Projects"
        description="A showcase of our engineering scale and precision across the region's most challenging landscapes."
      />

      <div
        className="
          grid
          grid-cols-1
          gap-4

          md:grid-cols-2
          md:gap-6

          2xl:grid-cols-3
          2xl:gap-8
        "
      >
        {featuredProjectsData.map((project) => (
          <FeaturedProjectsCard
            key={project.id}
            image={project.image}
            category={project.category}
            title={project.title}
          />
        ))}
      </div>
    </section>
  );
}