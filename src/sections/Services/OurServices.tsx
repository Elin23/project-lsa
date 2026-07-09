import { useEffect, useState } from "react";

import { servicesData2 } from "../../data/servicesData2";

import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import LoadMoreButton from "../../components/shared/LoadMoreButton";

import ServiceCard from "../../components/common/OurServices/ServiceCard";
import ServiceCardSkeleton from "../../components/skeletons/ServiceCardSkeleton";

const OurServices = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleCount, setVisibleCount] = useState<number>(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleToggleServices = () => {
    if (visibleCount >= servicesData2.length) {
      setVisibleCount(3);
    } else {
      setVisibleCount((prev) => Math.min(prev + 3, servicesData2.length));
    }
  };

  return (
    <section>
      <TitleComponent
        title="Our Services"
        description="Comprehensive EPC solutions designed for the oil and gas sector. Delivering precision, scale, and uncompromising quality in every project."
      />

      <div className="space-y-8">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
            <ServiceCardSkeleton
              key={index}
              reverse={index % 2 !== 0}
            />
          ))
          : servicesData2
            .slice(0, visibleCount)
            .map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                slug={service.slug}
                title={service.title}
                description={service.description}
                image={service.image}
                features={service.features}
                reverse={service.reverse}
              />
            ))}
      </div>

      {!loading && (
        <div className="mt-10 flex justify-center">
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