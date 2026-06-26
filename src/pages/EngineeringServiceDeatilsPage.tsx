import HotTappingProcess from "../sections/ServiceDeatils/HotTappingProcess"
import OperationalRangesSection from "../sections/ServiceDeatils/OperationalRangesSection"
import RelatedProjects from "../sections/ServiceDeatils/RelatedProjects"
import serviceHero from "../assets/imgs/serviceDetailsHero.webp"
import HeroSection from "../sections/HeroSection"

const EngineeringServiceDeatilsPage = () => {
  return (
    <>
      <div className="space-y-24">
        <HeroSection
          image={serviceHero}
          title='"24" Pipeline Najaf to Basra'
          description="A monumental 18-month infrastructure project connecting Iraq's
energy hubs through advanced EPC engineering and specialized
pipeline construction.."
        />
        <HotTappingProcess />
        <OperationalRangesSection />
        <RelatedProjects />
      </div>
    </>
  )
}

export default EngineeringServiceDeatilsPage