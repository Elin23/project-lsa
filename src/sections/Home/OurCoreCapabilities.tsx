import { useEffect, useMemo, useState } from "react";

import OurCoreCapabilitiesCard from "../../components/common/OurCoreCapabilitiesComponents/OurCoreCapabilitiesCard";
import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import Pagination from "../../components/shared/Pagination";
import OurCoreCapabilitiesCardSkeleton from "../../components/skeletons/OurCoreCapabilitiesCardSkeleton";

import { ourCoreCapabilitiesData } from "../../data/OurCoreCapabilitiesData";

export default function OurCoreCapabilities() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => window.clearTimeout(timer);

  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setItemsPerPage(2);
      } else if (width < 1280) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(6);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  const totalPages = Math.max(
    1,
    Math.ceil(ourCoreCapabilitiesData.length / itemsPerPage)
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return ourCoreCapabilitiesData.slice(startIndex, endIndex);

  }, [currentPage, itemsPerPage]);

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-01/10 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-64 w-64 rounded-full bg-red-01/5 blur-3xl" />
      </div>

      <div className=" w-full  p-0">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <TitleComponent
            title="Our Core Capabilities"
            description="Comprehensive engineering solutions tailored to the oil and gas sector."
          />
        </div>

        <div
          key={`${currentPage}-${itemsPerPage}`}
          className="
        grid grid-cols-1 gap-5
        animate-[fadeSlide_0.45s_ease-out]
        sm:grid-cols-2 sm:gap-6
        xl:grid-cols-3 xl:gap-7
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
            ))
          }
        </div>

        {!loading && totalPages > 1 && (
          <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </section>

  );
}
