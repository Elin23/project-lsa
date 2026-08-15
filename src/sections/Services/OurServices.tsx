import {
  useEffect,
  useRef,
  useState,
} from "react";

import AOS from "aos";

import TitleComponent from "../../components/shared/TitleComponent";
import LoadMoreButton from "../../components/shared/LoadMoreButton";
import ServiceCardSkeleton from "../../components/skeletons/ServiceCardSkeleton";
import ServiceCard from "./ServiceCard";

import {
  usePublicServices,
} from "../../hooks/queries/useServices";

const INITIAL_VISIBLE_SERVICES = 3;
const SERVICES_PER_LOAD = 3;

const OurServices = () => {
  const [visibleCount, setVisibleCount] =
    useState(
      INITIAL_VISIBLE_SERVICES,
    );

  const sectionRef =
    useRef<HTMLElement | null>(
      null,
    );

  const {
    data: services = [],
    isLoading,
    isError,
  } = usePublicServices();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const refreshTimer =
      window.setTimeout(() => {
        AOS.refreshHard();
      }, 50);

    return () => {
      window.clearTimeout(
        refreshTimer,
      );
    };
  }, [
    isLoading,
    visibleCount,
  ]);

  const handleToggleServices =
    () => {
      const isExpanded =
        visibleCount >=
        services.length;

      if (isExpanded) {
        setVisibleCount(
          INITIAL_VISIBLE_SERVICES,
        );

        window.requestAnimationFrame(
          () => {
            sectionRef.current?.scrollIntoView(
              {
                behavior:
                  "smooth",
                block: "start",
              },
            );
          },
        );

        return;
      }

      setVisibleCount(
        (previousCount) =>
          Math.min(
            previousCount +
              SERVICES_PER_LOAD,
            services.length,
          ),
      );
    };

  const visibleServices =
    services.slice(
      0,
      visibleCount,
    );

  return (
    <section
      ref={sectionRef}
      id="our-services"
    >
      <div
        data-aos="fade-up"
        data-aos-duration="550"
        data-aos-easing="ease-out"
        data-aos-offset="40"
        data-aos-once="true"
      >
        <TitleComponent
          title="Our Services"
          description="Comprehensive EPC solutions designed for the oil and gas sector. Delivering precision, scale, and uncompromising quality in every project."
        />
      </div>

      <div className="space-y-8">
        {isLoading ? (
          Array.from({
            length:
              INITIAL_VISIBLE_SERVICES,
          }).map(
            (_, index) => (
              <ServiceCardSkeleton
                key={index}
                reverse={
                  index % 2 !== 0
                }
              />
            ),
          )
        ) : isError ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-10 text-center">
            <h3 className="text-xl font-bold text-red-600">
              Unable to load
              services
            </h3>

            <p className="mt-2 text-sm text-red-500">
              Something went wrong
              while loading our
              services.
            </p>
          </div>
        ) : (
          visibleServices.map(
            (
              service,
              index,
            ) => (
              <ServiceCard
                key={
                  service._id
                }
                id={
                  index + 1
                }
                slug={
                  service.slug
                }
                title={
                  service.title
                }
                description={
                  service
                    .serviceCard
                    .description
                }
                image={
                  service
                    .serviceCard
                    .image.url
                }
                imageAlt={
                  service
                    .serviceCard
                    .image.alt ||
                  service.title
                }
                features={
                  service
                    .serviceCard
                    .highlights
                }
                label={
                  service
                    .serviceCard
                    .label
                }
                reverse={
                  index % 2 !==
                  0
                }
                animationDelay={
                  (index %
                    3) *
                  70
                }
              />
            ),
          )
        )}
      </div>

      {!isLoading &&
        !isError &&
        services.length >
          INITIAL_VISIBLE_SERVICES && (
          <div
            data-aos="fade"
            data-aos-duration="450"
            data-aos-once="true"
            className="mt-10 flex justify-center"
          >
            <LoadMoreButton
              isExpanded={
                visibleCount >=
                services.length
              }
              onClick={
                handleToggleServices
              }
            />
          </div>
        )}
    </section>
  );
};

export default OurServices;