import {
  useMemo,
  useRef,
  useState,
} from "react";

import TitleComponent from "../../../components/shared/TitleComponent";
import TeamCardSkeleton from "../../../components/skeletons/TeamCardSkeleton";
import Slider from "../../../components/shared/Slider";
import Pagination from "../../../components/navigation/Pagination";

import TeamCard from "./TeamCard";

import { useTeamMembers } from "../../../hooks/queries/useTeamMembers";

const TEAM_MEMBERS_PER_PAGE = 4;

export default function TeamSection() {
  const [currentPage, setCurrentPage] =
    useState<number>(1);

  const teamContainerRef =
    useRef<HTMLDivElement | null>(null);

  const {
    data: teamMembers = [],
    isLoading,
  } = useTeamMembers();

  const totalPages = Math.max(
    Math.ceil(
      teamMembers.length /
      TEAM_MEMBERS_PER_PAGE,
    ),
    1,
  );

  const safeCurrentPage = Math.min(
    currentPage,
    totalPages,
  );

  const paginatedTeamMembers = useMemo(() => {
    const startIndex =
      (safeCurrentPage - 1) *
      TEAM_MEMBERS_PER_PAGE;

    return teamMembers.slice(
      startIndex,
      startIndex + TEAM_MEMBERS_PER_PAGE,
    );
  }, [teamMembers, safeCurrentPage]);

  const skeletonItems = useMemo(
    () =>
      Array.from(
        {
          length:
            TEAM_MEMBERS_PER_PAGE,
        },
        (_, index) => index,
      ),
    [],
  );

  const handlePageChange = (
    page: number,
  ) => {
    const nextPage = Math.min(
      Math.max(page, 1),
      totalPages,
    );

    setCurrentPage(nextPage);

    window.requestAnimationFrame(() => {
      teamContainerRef.current?.scrollIntoView(
        {
          behavior: "smooth",
          block: "start",
        },
      );
    });
  };

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
      <div className="mb-10">
        <TitleComponent
          title="Meet the Experts"
          description="A team of seasoned engineers, project managers, and field specialists driving every LSA project from design to delivery."
        />
      </div>

      <div
        ref={teamContainerRef}
        className="scroll-mt-24"
      >
        <div className="w-full min-w-0 sm:hidden">
          {isLoading ? (
            <TeamCardSkeleton />
          ) : (
            <Slider
              items={teamMembers}
              autoPlayDelay={4000}
              showDots
              renderItem={(member) => (
                <TeamCard member={member} />
              )}
            />
          )}
        </div>

        <div
          className="
            hidden
            flex-wrap
            items-stretch
            justify-start
            gap-5
            sm:flex
          "
        >
          {isLoading
            ? skeletonItems.map(
              (item) => (
                <div
                  key={item}
                  className="
                      flex
                      w-[calc(50%-10px)]
                      lg:w-[calc(33.333333%-14px)]
                      xl:w-[calc(25%-15px)]
                    "
                >
                  <div className="w-full">
                    <TeamCardSkeleton />
                  </div>
                </div>
              ),
            )
            : paginatedTeamMembers.map(
              (member) => (
                <div
                  key={member._id}
                  className="
                      flex
                      w-[calc(50%-10px)]
                      lg:w-[calc(33.333333%-14px)]
                      xl:w-[calc(25%-15px)]
                    "
                >
                  <div className="w-full">
                    <TeamCard
                      member={member}
                    />
                  </div>
                </div>
              ),
            )}
        </div>

        {!isLoading &&
          totalPages > 1 && (
            <div className="mt-10 hidden sm:block">
              <Pagination
                currentPage={
                  safeCurrentPage
                }
                totalPages={totalPages}
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