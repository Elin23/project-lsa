import { Navigate, useParams } from "react-router-dom";

import HotTappingProcess from "../sections/ServiceDeatils/HotTappingProcess";
import OperationalRangesSection from "../sections/ServiceDeatils/OperationalRangesSection";
import RelatedProjects from "../sections/ServiceDeatils/RelatedProjects";
import HeroSection from "../sections/HeroSection";
import { servicesData2 } from "../data/servicesData2";

const EngineeringServiceDeatilsPage = () => {
  const { slug } = useParams();

  const service = servicesData2.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28">
      <HeroSection
        image={service.details.heroImage}
        title={service.details.heroTitle}
        description={service.details.heroDescription}
      />
      <HotTappingProcess service={service} />
      <OperationalRangesSection service={service} />
      <RelatedProjects service={service} />
    </div>
  );
};

export default EngineeringServiceDeatilsPage;
