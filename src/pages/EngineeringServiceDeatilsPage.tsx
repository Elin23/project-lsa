import { Navigate, useParams } from "react-router-dom";

import HotTappingProcess from "../sections/ServiceDeatils/HotTappingProcess";
import RelatedProjects from "../sections/ServiceDeatils/RelatedProjects/RelatedProjects";
import HeroSection from "../sections/HeroSection";

import { servicesData2 } from "../data/servicesData2";
import {
  projectsData,
  type ProjectCategory,
} from "../data/projectsData";
import OperationalRangesSection from "../sections/ServiceDeatils/OperationalRangesSection/OperationalRangesSection";

const serviceCategoryMap: Record<string, ProjectCategory> = {
  "epc-projects": "EPC Projects",
  "pipeline-services": "Pipeline Services",
  "process-piping": "Process Piping",
  "hot-tapping": "Hot Tapping",
  "pipeline-integrity": "Pipeline Integrity",
  "storage-tanks": "Storage Tanks",
  "mechanical-works": "Mechanical Works",
  "cathodic-protection": "Cathodic Protection",
  "civil-works": "Civil Works",
  "electrical-instrumentation": "Electrical & Instrumentation",
  "auger-boring-hdd-crossing": "Auger Boring & HDD Crossing",
};

const getServiceDetailsHeroSlides = (
  service: (typeof servicesData2)[number],
) => [
  {
    id: service.slug,
    type: "image" as const,
    src: service.details.heroImage,
    position: "center",
  },
];

const EngineeringServiceDeatilsPage = () => {
  const { slug } = useParams();

  const service = servicesData2.find(
    (item) => item.slug === slug,
  );

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const serviceCategory = serviceCategoryMap[service.slug];

  const hasRelatedProjects = serviceCategory
    ? projectsData.some(
        (project) => project.category === serviceCategory,
      )
    : false;

  return (
    <div
      className={`
        space-y-16
        md:space-y-20
        lg:space-y-24
        xl:space-y-28
        ${
          hasRelatedProjects
            ? ""
            : "pb-16 md:pb-20 lg:pb-24 xl:pb-28"
        }
      `}
    >
      <HeroSection
        slides={getServiceDetailsHeroSlides(service)}
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