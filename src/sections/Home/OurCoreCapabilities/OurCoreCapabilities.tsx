import {
  useEffect,
  useMemo,
  useState,
} from "react";

import TitleComponent from "../../../components/shared/TitleComponent";

import OurCoreCapabilitiesCardSkeleton from "../../../components/skeletons/OurCoreCapabilitiesCardSkeleton";

import OurCoreCapabilitiesCard from "./OurCoreCapabilitiesCard";

import Pagination from "../../../components/navigation/Pagination";

import {
  usePublicHomeCapabilities,
} from "../../../hooks/queries/useServices";

const getItemsPerPage = (
  width: number,
) => {
  if (width < 768) {
    return 2;
  }

  if (width < 1024) {
    return 4;
  }

  return 6;
};

export default function OurCoreCapabilities() {
  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);

  const [
    itemsPerPage,
    setItemsPerPage,
  ] = useState(() => {
    if (
      typeof window ===
      "undefined"
    ) {
      return 6;
    }

    return getItemsPerPage(
      window.innerWidth,
    );
  });

  // ====================================================
  // React Query
  // ====================================================

  const {
    data: capabilities = [],
    isLoading,
    isError,
  } =
    usePublicHomeCapabilities();

  // ====================================================
  // Responsive Pagination
  // ====================================================

  useEffect(() => {
    const handleResize = () => {
      const nextItemsPerPage =
        getItemsPerPage(
          window.innerWidth,
        );

      setItemsPerPage(
        (
          previousItemsPerPage,
        ) => {
          if (
            previousItemsPerPage ===
            nextItemsPerPage
          ) {
            return previousItemsPerPage;
          }

          setCurrentPage(1);

          return nextItemsPerPage;
        },
      );
    };

    window.addEventListener(
      "resize",
      handleResize,
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize,
      );
    };
  }, []);

  // ====================================================
  // Pagination
  // ====================================================

  const totalPages = Math.max(
    1,
    Math.ceil(
      capabilities.length /
        itemsPerPage,
    ),
  );

  const safeCurrentPage =
    Math.min(
      currentPage,
      totalPages,
    );

  const currentItems =
    useMemo(() => {
      const startIndex =
        (safeCurrentPage -
          1) *
        itemsPerPage;

      const endIndex =
        startIndex +
        itemsPerPage;

      return capabilities.slice(
        startIndex,
        endIndex,
      );
    }, [
      capabilities,
      safeCurrentPage,
      itemsPerPage,
    ]);

  const handlePageChange = (
    page: number,
  ) => {
    const nextPage =
      Math.min(
        Math.max(
          page,
          1,
        ),
        totalPages,
      );

    setCurrentPage(
      nextPage,
    );
  };

  // ====================================================
  // Render
  // ====================================================

  return (
    <section
      className="relative overflow-hidden"
      id="projects"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-01/10 blur-3xl" />

        <div className="absolute bottom-10 right-0 h-64 w-64 rounded-full bg-red-01/5 blur-3xl" />
      </div>

      <div className="w-full p-0">
        {/* Title */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <TitleComponent
            title="Our Core Capabilities"
            description="Comprehensive engineering solutions tailored to the oil and gas sector."
          />
        </div>

        {/* Cards */}
        <div
          key={`${safeCurrentPage}-${itemsPerPage}`}
          className="
            grid
            grid-cols-1
            gap-5
            animate-[fadeSlide_0.45s_ease-out]
            sm:grid-cols-2
            sm:gap-6
            lg:grid-cols-3
            lg:gap-7
          "
        >
          {isLoading ? (
            Array.from({
              length:
                itemsPerPage,
            }).map(
              (_, index) => (
                <OurCoreCapabilitiesCardSkeleton
                  key={
                    index
                  }
                />
              ),
            )
          ) : isError ? (
            <div
              className="
                col-span-full
                rounded-2xl
                border
                border-red-200
                bg-red-50
                p-10
                text-center
              "
            >
              <h3 className="text-xl font-bold text-red-600">
                Unable to load
                capabilities
              </h3>

              <p className="mt-2 text-sm text-red-500">
                Something went
                wrong while
                loading our core
                capabilities.
              </p>
            </div>
          ) : (
            currentItems.map(
              (
                item,
                index,
              ) => (
                <OurCoreCapabilitiesCard
                  key={
                    item._id
                  }
                  id={String(
                    (safeCurrentPage -
                      1) *
                      itemsPerPage +
                      index +
                      1,
                  ).padStart(
                    2,
                    "0",
                  )}
                  title={
                    item
                      .homeCapability
                      .title
                  }
                  path={`/services/${item.slug}`}
                  description={
                    item
                      .homeCapability
                      .shortDescription
                  }
                />
              ),
            )
          )}
        </div>

        {/* Pagination */}
        {!isLoading &&
          !isError &&
          totalPages > 1 && (
            <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
              <Pagination
                currentPage={
                  safeCurrentPage
                }
                totalPages={
                  totalPages
                }
                onPageChange={
                  handlePageChange
                }
              />
            </div>
          )}
      </div>
    </section>
  );
}