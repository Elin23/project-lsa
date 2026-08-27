import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { certificationsData, certificationStats } from "../../../data/certificationsData";
import TitleComponent from "../../../components/shared/TitleComponent";
import CertificationStatCardSkeleton from "../../../components/skeletons/CertificationStatCardSkeleton";
import CertificationStatCard from "./CertificationStatCard";
import DirectionCardSkeleton from "../../../components/skeletons/DirectionCardSkeleton";
import Slider from "../../../components/shared/Slider";
import Pagination from "../../../components/navigation/Pagination";
import { DirectionCard } from "../StrategicDirectionsSection/StratigicDirectionsCard";

interface SelectedCertificate {
  title: string;
  image: string;
}

const CERTIFICATES_PER_PAGE = 4;

const CertificationsStandards = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCertificate, setSelectedCertificate] = useState<SelectedCertificate | null>(null);

  const certificatesContainerRef = useRef<HTMLDivElement | null>(null);

  // Simulated initial loading state
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  // Modal lock & keydown listener
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

  const totalPages = Math.max(
    Math.ceil(certificationsData.length / CERTIFICATES_PER_PAGE),
    1
  );

  const safeCurrentPage = Math.min(currentPage, totalPages);

  // Sync state if safeCurrentPage drifts
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedCertificates = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * CERTIFICATES_PER_PAGE;
    return certificationsData.slice(
      startIndex,
      startIndex + CERTIFICATES_PER_PAGE
    );
  }, [safeCurrentPage]);

  const openCertificate = (title: string, image: string) => {
    setSelectedCertificate({ title, image });
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  const handlePageChange = (page: number) => {
    const nextPage = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(nextPage);

    window.requestAnimationFrame(() => {
      certificatesContainerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const getCertificateGridClass = (index: number, itemsLength: number) => {
    const isLastItem = index === itemsLength - 1;
    const hasOddItemsCount = itemsLength % 2 !== 0;

    return isLastItem && hasOddItemsCount ? "md:col-span-2" : "";
  };

  return (
    <>
      <section id="certifications-standards">
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
            ? Array.from({ length: certificationStats.length }).map((_, index) => (
                <CertificationStatCardSkeleton key={`skeleton-stat-${index}`} />
              ))
            : certificationStats.map((stat, index) => (
                <div
                  key={stat.label}
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

        <div ref={certificatesContainerRef} className="scroll-mt-24">
          {/* Tablet & Desktop Grid */}
          <div className="mt-8 hidden items-stretch gap-4 md:grid md:grid-cols-2">
            {loading
              ? Array.from({ length: CERTIFICATES_PER_PAGE }).map((_, index) => (
                  <DirectionCardSkeleton key={`skeleton-card-${index}`} />
                ))
              : paginatedCertificates.map((item, index) => (
                  <div
                    key={item.title}
                    data-aos="fade-up"
                    data-aos-duration="550"
                    data-aos-delay={index * 70}
                    data-aos-easing="ease-out"
                    data-aos-offset="40"
                    data-aos-once="true"
                    className={`h-full ${getCertificateGridClass(
                      index,
                      paginatedCertificates.length
                    )}`}
                  >
                    <DirectionCard
                      title={item.title}
                      description={item.description}
                      icon={item.icon}
                      image={item.image}
                      onPreview={() => openCertificate(item.title, item.image)}
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
              <DirectionCardSkeleton />
            ) : paginatedCertificates.length > 0 ? (
              <Slider
                key={safeCurrentPage}
                items={paginatedCertificates}
                renderItem={(item) => (
                  <DirectionCard
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    image={item.image}
                    onPreview={() => openCertificate(item.title, item.image)}
                  />
                )}
              />
            ) : null}
          </div>

          {/* Pagination */}
          {!loading && totalPages > 1 && (
            <div className="mt-10">
              <Pagination
                currentPage={safeCurrentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>
      </section>

      {/* Fullscreen Certificate Image Modal */}
      {selectedCertificate &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedCertificate.title} certificate preview`}
            onClick={closeCertificate}
            className="fixed inset-0 z-99999 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-8"
          >
            <button
              type="button"
              onClick={closeCertificate}
              aria-label="Close certificate preview"
              className="fixed right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-red-01 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-7 md:top-7"
            >
              <X size={23} strokeWidth={2} />
            </button>

            <img
              src={selectedCertificate.image}
              alt={`${selectedCertificate.title} certificate`}
              onClick={(event) => event.stopPropagation()}
              className="block max-h-[90vh] max-w-[94vw] rounded-lg object-contain shadow-2xl md:max-h-[92vh] md:max-w-[90vw]"
            />
          </div>,
          document.body
        )}
    </>
  );
};

export default CertificationsStandards;