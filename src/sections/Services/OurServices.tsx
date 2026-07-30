import { useEffect, useRef, useState } from "react";
import AOS from "aos";

import { servicesData2 } from "../../data/servicesData2";

import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import LoadMoreButton from "../../components/shared/LoadMoreButton";
import ServiceCard from "../../components/common/OurServices/ServiceCard";
import ServiceCardSkeleton from "../../components/skeletons/ServiceCardSkeleton";

const OurServices = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleCount, setVisibleCount] = useState<number>(3);

  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const refreshTimer = window.setTimeout(() => {
        AOS.refreshHard();
      }, 50);

      return () => window.clearTimeout(refreshTimer);
    }
  }, [loading, visibleCount]);

  const handleToggleServices = () => {
    const isExpanded = visibleCount >= servicesData2.length;

    if (isExpanded) {
      setVisibleCount(3);

      window.requestAnimationFrame(() => {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });

      return;
    }

    setVisibleCount((previousCount) =>
      Math.min(previousCount + 3, servicesData2.length)
    );
  };

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
          ? Array.from({ length: 3 }).map((_, index) => (
              <ServiceCardSkeleton
                key={index}
                reverse={index % 2 !== 0}
              />
            ))
          : servicesData2.slice(0, visibleCount).map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                slug={service.slug}
                title={service.title}
                description={service.description}
                image={service.image}
                features={service.features}
                reverse={service.reverse}
                animationDelay={(index % 3) * 70}
              />
            ))}
      </div>

      {!loading && (
        <div
          data-aos="fade"
          data-aos-duration="450"
          data-aos-once="true"
          className="mt-10 flex justify-center"
        >
          <LoadMoreButton
            isExpanded={visibleCount >= servicesData2.length}
            onClick={handleToggleServices}
          />
        </div>
      )}
    </section>
  );
};

export default OurServices;
