import { useEffect, useMemo, useState } from "react";
import OurCoreCapabilitiesCard from "../../components/common/OurCoreCapabilitiesComponents/OurCoreCapabilitiesCard";
import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import { ourCoreCapabilitiesData } from "../../data/OurCoreCapabilitiesData";
import Pagination from "../../components/shared/Pagination";

export default function OurCoreCapabilities() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(6);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  const totalPages = Math.ceil(
    ourCoreCapabilitiesData.length / itemsPerPage
  );

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;

    return ourCoreCapabilitiesData.slice(start, start + itemsPerPage);
  }, [currentPage, itemsPerPage]);

  return (
    <div>
      <TitleComponent
        title="Our Core Capabilities"
        description="Comprehensive engineering solutions tailored to the oil and gas sector."
      />

      <div
        key={currentPage}
        className="
          flex flex-wrap gap-6
          animate-[fadeSlide_0.45s_ease-out]
        "
      >
        {currentItems.map((item) => (
          <OurCoreCapabilitiesCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
        </div>
  );
}