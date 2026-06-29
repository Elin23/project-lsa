import HotTappingProcess from "../sections/ServiceDeatils/HotTappingProcess"
import OperationalRangesSection from "../sections/ServiceDeatils/OperationalRangesSection"
import RelatedProjects from "../sections/ServiceDeatils/RelatedProjects"
import serviceHero from "../assets/imgs/EquipmentsHero.webp"
import HeroSection from "../sections/HeroSection"

const EngineeringServiceDeatilsPage = () => {
  return (
    <>
      <div className="space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28">
        <HeroSection
          image={serviceHero}
          title='Hot Tapping & Stopple Services'
          description="Uninterrupted operations are critical. Our specialized hot tapping services allow for modifications, maintenance, and tie-ins to existing piping systems without halting production flow."
        />
        <HotTappingProcess />
        <OperationalRangesSection />
        <RelatedProjects />
      </div>
    </>
  )
}

export default EngineeringServiceDeatilsPage