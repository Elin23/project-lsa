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

import {
  usePublicServiceBySlug,
} from "../hooks/queries/useServices";

const EngineeringServiceDeatilsPage =
  () => {
    const { slug } =
      useParams<{
        slug: string;
      }>();

    const {
      data,
      isLoading,
      isError,
    } =
      usePublicServiceBySlug(
        slug,
      );

    if (!slug) {
      return (
        <Navigate
          to="/services"
          replace
        />
      );
    }

    if (isLoading) {
      return (
        <ServiceDetailsPageSkeleton />
      );
    }

    if (
      isError ||
      !data?.service
    ) {
      return (
        <Navigate
          to="/services"
          replace
        />
      );
    }

    const service =
      data.service;

    const relatedProjects =
      data.relatedProjects ??
      [];

    const heroSlides: HeroSlide[] =
      [
        {
          id: service._id,
          type: "image",
          src:
            service
              .heroSection
              .image.url,
          position:
            "center",
        },
      ];

    const hasRelatedProjects =
      relatedProjects.length >
      0;

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
          slides={
            heroSlides
          }
          title={
            service
              .heroSection
              .title
          }
          description={
            service
              .heroSection
              .description
          }
        />

        <HotTappingProcess
          service={
            service
          }
        />

        <OperationalRangesSection
          service={
            service
          }
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