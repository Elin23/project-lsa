import HeroSection from "../sections/HeroSection"
import DetailedScope from "../sections/ProjectDetails/DetailedScope"
import ProjectGallery from "../sections/ProjectDetails/ProjectGallery"
import projectHero from "../assets/imgs/projectDetailsHero.webp"

const ProjectDetailsPage = () => {
  return (
    <>
      <div className="space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28">
        <HeroSection
                  image={projectHero}
                  title='"24" Pipeline Najaf to Basra'
                  description="A monumental 18-month infrastructure project connecting Iraq's energy hubs through advanced EPC engineering and specialized pipeline construction.."
                />
        <DetailedScope />
        <ProjectGallery />
      </div>
    </>
  )
}

export default ProjectDetailsPage