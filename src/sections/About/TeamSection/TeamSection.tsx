import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import TitleComponent from "../../../components/shared/TitleComponent";
import TeamCardSkeleton from "../../../components/skeletons/TeamCardSkeleton";
import Pagination from "../../../components/navigation/Pagination";
import SectionState from "../../../components/feedback/SectionState";

import TeamCard from "./TeamCard";

import {
  useTeamMembers,
} from "../../../hooks/queries/useTeamMembers";

// ======================================================
// Pagination
// ======================================================

const getTeamMembersPerPage = (
  width: number,
) => {
  if (width < 640) {
    return 2;
  }

  return 4;
};

// ======================================================
// Component
// ======================================================

export default function TeamSection() {
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
      return 4;
    }

    return getTeamMembersPerPage(
      window.innerWidth,
    );
  });

  const teamContainerRef =
    useRef<HTMLDivElement | null>(
      null,
    );

  // ====================================================
  // React Query
  // ====================================================

  const {
    data: teamMembers = [],
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useTeamMembers();

  // ====================================================
  // Responsive Pagination
  // ====================================================

  useEffect(() => {
    const handleResize = () => {
      const nextItemsPerPage =
        getTeamMembersPerPage(
          window.innerWidth,
        );

      setItemsPerPage(
        (previousValue) => {
          if (
            previousValue ===
            nextItemsPerPage
          ) {
            return previousValue;
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
    Math.ceil(
      teamMembers.length /
        itemsPerPage,
    ),
    1,
  );

  const safeCurrentPage = Math.min(
    currentPage,
    totalPages,
  );

  const paginatedTeamMembers =
    useMemo(() => {
      const startIndex =
        (safeCurrentPage - 1) *
        itemsPerPage;

      return teamMembers.slice(
        startIndex,
        startIndex +
          itemsPerPage,
      );
    }, [
      teamMembers,
      safeCurrentPage,
      itemsPerPage,
    ]);

  // ====================================================
  // Skeleton Items
  // ====================================================

  const skeletonItems =
    useMemo(
      () =>
        Array.from(
          {
            length:
              itemsPerPage,
          },
          (_, index) =>
            index,
        ),
      [itemsPerPage],
    );

  // ====================================================
  // Page Change
  // ====================================================

  const handlePageChange = (
    page: number,
  ) => {
    const nextPage = Math.min(
      Math.max(page, 1),
      totalPages,
    );

    setCurrentPage(nextPage);

    window.requestAnimationFrame(
      () => {
        teamContainerRef.current?.scrollIntoView(
          {
            behavior:
              "smooth",
            block: "start",
          },
        );
      },
    );
  };

  // ====================================================
  // Render
  // ====================================================

  return (
    <section
      id="meet-the-experts"
      className="
        pb-16
        md:pb-20
        lg:pb-24
        xl:pb-28
      "
    >
      {/* Title */}
      <div className="mb-10">
        <TitleComponent
          title="Meet the Experts"
          description="A team of seasoned engineers, project managers, and field specialists driving every LSA project from design to delivery."
        />
      </div>

      <div
        ref={
          teamContainerRef
        }
        className="scroll-mt-24"
      >
        {/* =================================================
            Loading
        ================================================= */}

        {isLoading ? (
          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              xl:grid-cols-4
            "
          >
            {skeletonItems.map(
              (item) => (
                <div
                  key={
                    item
                  }
                  className="h-full"
                >
                  <TeamCardSkeleton />
                </div>
              ),
            )}
          </div>
        ) : isError ? (
          /* =================================================
              Error
          ================================================= */

          <SectionState
            variant="error"
            title="Unable to load team members"
            message="We couldn't load our team members right now. Please try again in a moment."
            onRetry={() => {
              void refetch();
            }}
            isRetrying={
              isFetching
            }
          />
        ) : teamMembers.length ===
          0 ? (
          /* =================================================
              Empty
          ================================================= */

          <SectionState
            variant="empty"
            title="No team members added yet"
            message="Team members have not been published yet. They will appear here once available."
          />
        ) : (
          /* =================================================
              Success
          ================================================= */

          <>
            {/* Team Grid */}
            <div
              key={`${safeCurrentPage}-${itemsPerPage}`}
              className="
                grid
                grid-cols-1
                items-stretch
                gap-5
                animate-[fadeSlide_0.45s_ease-out]
                sm:grid-cols-2
                xl:grid-cols-4
              "
            >
              {paginatedTeamMembers.map(
                (
                  member,
                  index,
                ) => (
                  <div
                    key={
                      member._id
                    }
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay={
                      index *
                      60
                    }
                    data-aos-easing="ease-out"
                    data-aos-offset="30"
                    data-aos-once="true"
                    className="h-full"
                  >
                    <TeamCard
                      member={
                        member
                      }
                    />
                  </div>
                ),
              )}
            </div>

            {/* Pagination */}
            {teamMembers.length >
              itemsPerPage && (
              <div
                className="
                  mt-10
                  flex
                  justify-center
                  sm:mt-12
                  lg:mt-14
                "
              >
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
          </>
        )}
      </div>
    </section>
  );
}