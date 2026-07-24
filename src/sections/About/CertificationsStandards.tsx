import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

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

interface SelectedCertificate {
  title: string;
  image: string;
}

const CertificationsStandards = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const [selectedCertificate, setSelectedCertificate] =
    useState<SelectedCertificate | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!selectedCertificate) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedCertificate]);

  const openCertificate = (title: string, image: string) => {
    setSelectedCertificate({
      title,
      image,
    });
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
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
                ),
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
                ),
              )
            : certificationsData.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  data-aos="fade-up"
                  data-aos-duration="550"
                  data-aos-delay={index * 70}
                  data-aos-easing="ease-out"
                  data-aos-offset="40"
                  data-aos-once="true"
                  className="h-full"
                >
                  <DirectionCard
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    image={item.image}
                    onPreview={() =>
                      openCertificate(item.title, item.image)
                    }
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
                  image={item.image}
                  onPreview={() =>
                    openCertificate(item.title, item.image)
                  }
                />
              )}
            />
          )}
        </div>
      </section>

      {selectedCertificate &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedCertificate.title} certificate preview`}
            onClick={closeCertificate}
            className="
              fixed
              inset-0
              z-[99999]
              flex
              items-center
              justify-center
              bg-black/80
              p-4
              backdrop-blur-sm
              md:p-8
            "
          >
            <button
              type="button"
              onClick={closeCertificate}
              aria-label="Close certificate preview"
              className="
                fixed
                right-4
                top-4
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-black/60
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:rotate-90
                hover:bg-red-01
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
                md:right-7
                md:top-7
              "
            >
              <X size={23} strokeWidth={2} />
            </button>

            <img
              src={selectedCertificate.image}
              alt={`${selectedCertificate.title} certificate`}
              onClick={(event) => event.stopPropagation()}
              className="
                block
                max-h-[90vh]
                max-w-[94vw]
                object-contain
                shadow-2xl
                md:max-h-[92vh]
                md:max-w-[90vw]
              "
            />
          </div>,
          document.body,
        )}
    </>
  );
};

export default CertificationsStandards;