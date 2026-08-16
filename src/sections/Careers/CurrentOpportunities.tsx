import {
  useMemo,
  useState,
} from "react";

import TitleComponent from "../../components/shared/TitleComponent";
import CareerFilters from "./CareerFilters";
import LoadMoreButton from "../../components/shared/LoadMoreButton";
import JobCardSkeleton from "../../components/skeletons/JobCardSkeleton";
import SectionState from "../../components/feedback/SectionState";
import JobCard from "./JobCard";
import JobDetailsModal from "./JobDetailsModal";

import {
  useJobs,
} from "../../hooks/queries/useJobs";

import type {
  Job,
} from "../../services/jobsApi";

const tabs = [
  "all",
  "open",
  "closed",
] as const;

const INITIAL_ITEMS = 3;

type CareerTab =
  (typeof tabs)[number];

export default function CurrentOpportunities() {
  const [
    activeTab,
    setActiveTab,
  ] =
    useState<CareerTab>(
      "all",
    );

  const [
    search,
    setSearch,
  ] = useState("");

  const [
    selectedJob,
    setSelectedJob,
  ] =
    useState<Job | null>(
      null,
    );

  const [
    isExpanded,
    setIsExpanded,
  ] = useState(false);

  // ======================================================
  // React Query
  // ======================================================

  const {
    data: jobs = [],
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useJobs();

  // ======================================================
  // Filter Jobs
  // ======================================================

  const filteredJobs =
    useMemo(() => {
      const searchValue =
        search
          .toLowerCase()
          .trim();

      return jobs.filter(
        (job) => {
          const isOpen =
            job.status ===
              "published" &&
            new Date(
              job.deadline,
            ) >= new Date();

          const jobStatus:
            | "open"
            | "closed" =
            isOpen
              ? "open"
              : "closed";

          const matchTab =
            activeTab ===
              "all" ||
            jobStatus ===
              activeTab;

          const matchSearch =
            searchValue ===
              "" ||
            job.title
              .toLowerCase()
              .includes(
                searchValue,
              ) ||
            job.department
              .toLowerCase()
              .includes(
                searchValue,
              ) ||
            job.location
              .toLowerCase()
              .includes(
                searchValue,
              );

          return (
            matchTab &&
            matchSearch
          );
        },
      );
    }, [
      jobs,
      activeTab,
      search,
    ]);

  // ======================================================
  // Visible Jobs
  // ======================================================

  const displayedJobs =
    isExpanded
      ? filteredJobs
      : filteredJobs.slice(
          0,
          INITIAL_ITEMS,
        );

  // ======================================================
  // Handlers
  // ======================================================

  const handleTabChange = (
    tab: CareerTab,
  ) => {
    setActiveTab(tab);
    setIsExpanded(false);
  };

  const handleSearchChange = (
    value: string,
  ) => {
    setSearch(value);
    setIsExpanded(false);
  };

  // ======================================================
  // Render
  // ======================================================

  return (
    <section id="positions">
      <TitleComponent
        title="Current Opportunities"
        description="Shape the future of energy infrastructure with LSA."
      />

      {/* Filters */}
      {!isError && (
        <CareerFilters
          tabs={tabs}
          activeTab={
            activeTab
          }
          search={
            search
          }
          onTabChange={
            handleTabChange
          }
          onSearchChange={
            handleSearchChange
          }
        />
      )}

      {/* ==================================================
          Loading
      =================================================== */}

      {isLoading ? (
        <div className="space-y-5">
          {Array.from({
            length:
              INITIAL_ITEMS,
          }).map(
            (_, index) => (
              <JobCardSkeleton
                key={index}
              />
            ),
          )}
        </div>
      ) : isError ? (
        /* ==================================================
           Error
        =================================================== */

        <div className="mt-10">
          <SectionState
            variant="error"
            title="Unable to load positions"
            message="We couldn't load the available career opportunities right now. Please try again in a moment."
            onRetry={() => {
              void refetch();
            }}
            isRetrying={
              isFetching
            }
          />
        </div>
      ) : jobs.length === 0 ? (
        /* ==================================================
           Empty API State
        =================================================== */

        <div className="mt-10">
          <SectionState
            variant="empty"
            title="No positions added yet"
            message="There are no career opportunities published at the moment. New positions will appear here once available."
          />
        </div>
      ) : filteredJobs.length ===
        0 ? (
        /* ==================================================
           No Filter / Search Results
        =================================================== */

        <div className="mt-10">
          <SectionState
            variant="empty"
            title="No matching positions found"
            message="No positions match your current search or selected status. Try changing the filter or using a different keyword."
            compact
          />
        </div>
      ) : (
        /* ==================================================
           Success
        =================================================== */

        <>
          <div className="space-y-5">
            {displayedJobs.map(
              (job) => (
                <JobCard
                  key={
                    job._id
                  }
                  job={
                    job
                  }
                  onViewDetails={
                    setSelectedJob
                  }
                />
              ),
            )}
          </div>

          {/* Load More */}
          {filteredJobs.length >
            INITIAL_ITEMS && (
            <div className="mt-12 flex justify-center">
              <LoadMoreButton
                isExpanded={
                  isExpanded
                }
                onClick={() =>
                  setIsExpanded(
                    (
                      previous,
                    ) =>
                      !previous,
                  )
                }
                loadMoreText="Load More Positions"
                showLessText="Show Less Positions"
              />
            </div>
          )}
        </>
      )}

      {/* Job Details */}
      <JobDetailsModal
        job={
          selectedJob
        }
        onClose={() =>
          setSelectedJob(
            null,
          )
        }
      />
    </section>
  );
}