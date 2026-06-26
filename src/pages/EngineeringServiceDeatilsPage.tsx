import HotTappingProcess from "../sections/ServiceDeatils/HotTappingProcess"
import OperationalRangesSection from "../sections/ServiceDeatils/OperationalRangesSection"
import RelatedProjects from "../sections/ServiceDeatils/RelatedProjects"

const EngineeringServiceDeatilsPage = () => {
  return (
    <>
      <div className="space-y-24">
        <HotTappingProcess />
        <OperationalRangesSection />
        <RelatedProjects />
      </div>
    </>
  )
}

export default EngineeringServiceDeatilsPage