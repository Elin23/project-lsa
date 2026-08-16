import {
  Navigate,
  useParams,
} from "react-router-dom";

import HeroSection, {
  type HeroSlide,
} from "../sections/HeroSection";

import HotTappingProcess from "../sections/ServiceDeatils/HotTappingProcess";

import OperationalRangesSection from "../sections/ServiceDeatils/OperationalRangesSection/OperationalRangesSection";

import RelatedProjects from "../sections/ServiceDeatils/RelatedProjects/RelatedProjects";

import ServiceDetailsPageSkeleton from "../components/skeletons/ServiceDetailsPageSkeleton";

import SectionState from "../components/feedback/SectionState";

import {
  usePublicServiceBySlug,
} from "../hooks/queries/useServices";

const EngineeringServiceDeatilsPage = () => {
  const { slug } =
    useParams<{
      slug: string;
    }>();

  const {
    data,
    isLoading,
    isError,
    isFetching,
    refetch,
  } =
    usePublicServiceBySlug(
      slug,
    );

  // Invalid route parameter
  if (!slug) {
    return (
      <Navigate
        to="/services"
        replace
      />
    );
  }

  // ====================================================
  // Loading
  // ====================================================

  if (isLoading) {
    return (
      <ServiceDetailsPageSkeleton />
    );
  }

  // ====================================================
  // Error
  // ====================================================

  if (isError) {
    return (
      <main
        className="
          flex
          min-h-[70svh]
          w-full
          items-center
          justify-center
          py-16
          md:py-20
          lg:py-24
        "
      >
        <div className="w-full">
          <SectionState
            variant="error"
            title="Unable to load service details"
            message="We couldn't load this service right now. Please try again in a moment."
            onRetry={() => {
              void refetch();
            }}
            isRetrying={
              isFetching
            }
          />
        </div>
      </main>
    );
  }

  // ====================================================
  // Empty / Missing Service
  // ====================================================

  if (!data?.service) {
    return (
      <main
        className="
          flex
          min-h-[70svh]
          w-full
          items-center
          justify-center
          py-16
          md:py-20
          lg:py-24
        "
      >
        <div className="w-full">
          <SectionState
            variant="empty"
            title="Service details are not available yet"
            message="The details for this service have not been published yet. Please check again later."
          />
        </div>
      </main>
    );
  }

  // ====================================================
  // Data
  // ====================================================

  const service =
    data.service;

  const relatedProjects =
    data.relatedProjects ?? [];

  const heroSlides: HeroSlide[] = [
    {
      id: service._id,
      type: "image",
      src:
        service.heroSection
          .image.url,
      position: "center",
    },
  ];

  const hasRelatedProjects =
    relatedProjects.length > 0;

  // ====================================================
  // Success
  // ====================================================

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
        title={
          service.heroSection
            .title
        }
        description={
          service.heroSection
            .description
        }
      />

      <HotTappingProcess
        service={service}
      />

      <OperationalRangesSection
        service={service}
      />

      <RelatedProjects
        projects={
          relatedProjects
        }
      />
    </div>
  );
};

export default EngineeringServiceDeatilsPage;