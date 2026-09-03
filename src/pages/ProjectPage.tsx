import HeroSection from "../sections/HeroSection"
import ProjectsSection from "../sections/ProjectPortflio/ProjectsSection"
import HotTappingBanner from "../components/shared/CTA/HotTappingBanner"
import ProjectPortfolioHero from "../assets/Images/Projects/Hero/projectPortfolioHero.webp"

const ProjectPortfolioHeroSlides = [
  {
    id: 1,
    type: "image" as const,
    src: ProjectPortfolioHero,
    poster: ProjectPortfolioHero,
    position: "center",
  },
];

const ProjectPage = () => {
  return (
    <div className="space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28">
            <HeroSection
                slides={ProjectPortfolioHeroSlides}
                title="Project Portfolio"
                description="Showcasing engineering excellence and infrastructure development across Iraq’s energy sector. At Loaloat Shatt Al‑Arab (LSA), we deliver world‑class EPC, pipeline, and oilfield infrastructure projects for SOC and global oil majors.

From Majnoon, Rumaila, West Qurna, Zubair, Halfaya, Badra, Nasiriyah, Ratawi, Block 9, and Siba, our portfolio reflects nationwide capability, rapid mobilization, and benchmark performance in Iraq’s oil & gas industry."
            />
            <ProjectsSection />
            <HotTappingBanner className="pb-16 md:pb-24 2xl:pb-28" />
    </div>
  )
}

export default ProjectPage         
