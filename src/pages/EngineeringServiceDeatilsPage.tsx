import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import HeroSection, {
  type HeroSlide,
} from "../sections/HeroSection";

import HotTappingProcess from "../sections/ServiceDeatils/HotTappingProcess";
import OperationalRangesSection from "../sections/ServiceDeatils/OperationalRangesSection/OperationalRangesSection";
import RelatedProjects from "../sections/ServiceDeatils/RelatedProjects/RelatedProjects";

import Loader from "../components/feedback/Loader";

import type {
  Service,
  ServiceRelatedProject,
} from "../Types/service";

import { getPublicServiceBySlug } from "../services/serviceService";

const EngineeringServiceDeatilsPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const [service, setService] = useState<Service | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<
    ServiceRelatedProject[]
  >([]);
  const [loading, setLoading] = useState(Boolean(slug));
  const [requestFailed, setRequestFailed] = useState(false);

  useEffect(() => {
    if (!slug) {
      return;
    }

    let ignore = false;

    const fetchService = async () => {
      try {
        const data = await getPublicServiceBySlug(slug);

        if (ignore) {
          return;
        }

        setService(data.service);
        setRelatedProjects(data.relatedProjects);
      } catch (error) {
        if (ignore) {
          return;
        }

        console.error(
          "Failed to fetch public service details:",
          error,
        );

        setRequestFailed(true);
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    fetchService();

    return () => {
      ignore = true;
    };
  }, [slug]);

  if (!slug || requestFailed) {
    return <Navigate to="/services" replace />;
  }

  if (loading) {
    return <Loader isVisible />;
  }

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const heroSlides: HeroSlide[] = [
    {
      id: service._id,
      type: "image",
      src: service.heroSection.image.url,
      position: "center",
    },
  ];

  const hasRelatedProjects = relatedProjects.length > 0;

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
        slides={heroSlides}
        title={service.heroSection.title}
        description={service.heroSection.description}
      />

      <HotTappingProcess service={service} />

      <OperationalRangesSection service={service} />

      <RelatedProjects projects={relatedProjects} />
    </div>
  );
};

export default EngineeringServiceDeatilsPage;