import { useEffect, useRef, useState } from "react";
import AOS from "aos";

import TitleComponent from "../../components/shared/TitleComponent";
import LoadMoreButton from "../../components/shared/LoadMoreButton";
import ServiceCardSkeleton from "../../components/skeletons/ServiceCardSkeleton";
import ServiceCard from "./ServiceCard";

import type { PublicService } from "../../Types/service";
import { getPublicServices } from "../../services/serviceService";

const INITIAL_VISIBLE_SERVICES = 3;
const SERVICES_PER_LOAD = 3;

const OurServices = () => {
  const [services, setServices] = useState<PublicService[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(
    INITIAL_VISIBLE_SERVICES,
  );

  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchServices = async () => {
      try {
        const data = await getPublicServices();

        if (isMounted) {
          setServices(data);
        }
      } catch (error) {
        console.error("Failed to fetch public services:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchServices();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (loading) {
      return;
    }

    const refreshTimer = window.setTimeout(() => {
      AOS.refreshHard();
    }, 50);

    return () => {
      window.clearTimeout(refreshTimer);
    };
  }, [loading, visibleCount]);

  const handleToggleServices = () => {
    const isExpanded = visibleCount >= services.length;

    if (isExpanded) {
      setVisibleCount(INITIAL_VISIBLE_SERVICES);

      window.requestAnimationFrame(() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });

      return;
    }

    setVisibleCount((previousCount) =>
      Math.min(
        previousCount + SERVICES_PER_LOAD,
        services.length,
      ),
    );
  };

  const visibleServices = services.slice(0, visibleCount);

  return (
    <section ref={sectionRef} id="our-services">
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
        {loading
          ? Array.from({ length: INITIAL_VISIBLE_SERVICES }).map(
              (_, index) => (
                <ServiceCardSkeleton
                  key={index}
                  reverse={index % 2 !== 0}
                />
              ),
            )
          : visibleServices.map((service, index) => (
              <ServiceCard
                key={service._id}
                id={index + 1}
                slug={service.slug}
                title={service.title}
                description={service.serviceCard.description}
                image={service.serviceCard.image.url}
                imageAlt={
                  service.serviceCard.image.alt || service.title
                }
                features={service.serviceCard.highlights}
                label={service.serviceCard.label}
                reverse={index % 2 !== 0}
                animationDelay={(index % 3) * 70}
              />
            ))}
      </div>

      {!loading && services.length > INITIAL_VISIBLE_SERVICES && (
        <div
          data-aos="fade"
          data-aos-duration="450"
          data-aos-once="true"
          className="mt-10 flex justify-center"
        >
          <LoadMoreButton
            isExpanded={visibleCount >= services.length}
            onClick={handleToggleServices}
          />
        </div>
      )}
    </section>
  );
};

export default OurServices;