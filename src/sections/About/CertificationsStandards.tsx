import { useEffect, useState } from "react";

import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import Slider from "../../components/shared/Slider";
import { DirectionCard } from "../../components/StratigicDirectionsCard";
import CertificationStatCard from "../../components/common/CertificationStatCard/CertificationStatCard";
import CertificationStatCardSkeleton from "../../components/skeletons/CertificationStatCardSkeleton";
import DirectionCardSkeleton from "../../components/skeletons/DirectionCardSkeleton";

import {
  certificationStats,
  certificationsData,
} from "../../data/certificationsData";

const CertificationsStandards = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section>
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-easing="ease-out"
        data-aos-offset="50"
        data-aos-once="true"
      >
        <TitleComponent
          title="Certifications & Standards"
          description="Our commitment to international standards ensures the highest levels of quality, safety, and environmental responsibility across all operations."
        />
      </div>

      {/* Statistics */}
      <div className="grid items-stretch gap-4 md:grid-cols-3">
        {loading
          ? Array.from({ length: certificationStats.length }).map(
              (_, index) => (
                <CertificationStatCardSkeleton key={index} />
              )
            )
          : certificationStats.map((stat, index) => (
              <div
                key={`${stat.label}-${index}`}
                data-aos="fade-up"
                data-aos-duration="550"
                data-aos-delay={index * 70}
                data-aos-easing="ease-out"
                data-aos-offset="40"
                data-aos-once="true"
                className="h-full"
              >
                <CertificationStatCard
                  value={stat.value}
                  label={stat.label}
                  color={stat.color}
                />
              </div>
            ))}
      </div>

      {/* Desktop */}
      <div className="mt-8 hidden items-stretch gap-4 md:grid md:grid-cols-2">
        {loading
          ? Array.from({ length: certificationsData.length }).map(
              (_, index) => (
                <DirectionCardSkeleton key={index} />
              )
            )
          : certificationsData.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="h-full"
              >
                <DirectionCard
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              </div>
            ))}
      </div>

      {/* Mobile Slider */}
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-easing="ease-out"
        data-aos-offset="40"
        data-aos-once="true"
        className="mt-8 md:hidden"
      >
        {loading ? (
          <div className="space-y-4">
            {Array.from({ length: 2 }).map((_, index) => (
              <DirectionCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <Slider
            items={certificationsData}
            renderItem={(item) => (
              <DirectionCard
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            )}
          />
        )}
      </div>
    </section>
  );
};

export default CertificationsStandards;