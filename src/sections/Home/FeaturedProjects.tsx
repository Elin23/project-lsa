import TitleComponent from '../../components/common/TitleComponent/TitleComponent'
import { featuredProjectsData } from '../../data/featuredProjectsData'
import FeaturedProjectsCard from '../../components/common/FeaturedProjects/FeaturedProjectsCard'
export default function FeaturedProjects() {
    return (
        <>
            <TitleComponent
                title="Featured Projects"
                description="A showcase of our engineering scale and precision across the region's
                most challenging landscapes."
            />
            <div className="flex flex-wrap gap-6 mt-16 md:mt-12 xl:mt-16 2xl:mt-20">
                {featuredProjectsData.map((project) => (
                    <FeaturedProjectsCard
                        key={project.id}
                        image={project.image}
                        category={project.category}
                        title={project.title}
                    />
                ))}


            </div>
        </>
    )
}
