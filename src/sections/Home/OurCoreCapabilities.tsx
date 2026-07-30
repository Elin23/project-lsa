import { useEffect, useMemo, useState } from "react";

import OurCoreCapabilitiesCard from "../../components/common/OurCoreCapabilitiesComponents/OurCoreCapabilitiesCard";
import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import Pagination from "../../components/shared/Pagination";
import OurCoreCapabilitiesCardSkeleton from "../../components/skeletons/OurCoreCapabilitiesCardSkeleton";

import { ourCoreCapabilitiesData } from "../../data/OurCoreCapabilitiesData";

const getItemsPerPage = (width: number) => {
  if (width < 768) return 2;
  if (width < 1280) return 4;

  return 6;
};

export default function OurCoreCapabilities() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const [itemsPerPage, setItemsPerPage] = useState<number>(() => {
    if (typeof window === "undefined") {
      return 6;
    }

    return getItemsPerPage(window.innerWidth);
  });

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const nextItemsPerPage = getItemsPerPage(window.innerWidth);

      setItemsPerPage((previousItemsPerPage) => {
        if (previousItemsPerPage === nextItemsPerPage) {
          return previousItemsPerPage;
        }

        setCurrentPage(1);

        return nextItemsPerPage;
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalPages = Math.max(
    1,
    Math.ceil(ourCoreCapabilitiesData.length / itemsPerPage),
  );

  const safeCurrentPage = Math.min(currentPage, totalPages);

  const currentItems = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return ourCoreCapabilitiesData.slice(startIndex, endIndex);
  }, [safeCurrentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    const nextPage = Math.min(Math.max(page, 1), totalPages);

    setCurrentPage(nextPage);
  };

  return (
    <section className="relative overflow-hidden" id="projects">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-01/10 blur-3xl" />

        <div className="absolute bottom-10 right-0 h-64 w-64 rounded-full bg-red-01/5 blur-3xl" />
      </div>

      <div className="w-full p-0">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <TitleComponent
            title="Our Core Capabilities"
            description="Comprehensive engineering solutions tailored to the oil and gas sector."
          />
        </div>

        <div
          key={`${safeCurrentPage}-${itemsPerPage}`}
          className="
            grid
            grid-cols-1
            gap-5
            animate-[fadeSlide_0.45s_ease-out]
            sm:grid-cols-2
            sm:gap-6
            xl:grid-cols-3
            xl:gap-7
          "
        >
          {loading
            ? Array.from({ length: itemsPerPage }).map((_, index) => (
                <OurCoreCapabilitiesCardSkeleton key={index} />
              ))
            : currentItems.map((item) => (
                <OurCoreCapabilitiesCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  path={item.path}
                  description={item.description}
                />
              ))}
        </div>

        {!loading && totalPages > 1 && (
          <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
            <Pagination
              currentPage={safeCurrentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </section>
  );
}