import HeroSection from "../sections/HeroSection"
import projectHero from "../assets/imgs/projectPortfolioHero.webp"
import ProjectsSection from "../sections/ProjectPortflio/ProjectsSection"
import HotTappingBanner from "../components/shared/CTA/HotTappingBanner"

const ProjectPage = () => {
  return (
    <div className="space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28">
            <HeroSection
                image={projectHero}
                title="Project Portfolio"
                description="Showcasing engineering excellence and infrastructure development across the energy sector in Iraq."
            />
            <ProjectsSection />
            <HotTappingBanner className="pb-16 md:pb-24 2xl:pb-28" />
    </div>
  )
}

export default ProjectPage         
