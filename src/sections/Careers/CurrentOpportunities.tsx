import { useMemo, useState } from "react";

import TitleComponent from "../../components/shared/TitleComponent";
import CareerFilters from "./CareerFilters";
import LoadMoreButton from "../../components/shared/LoadMoreButton";
import JobCardSkeleton from "../../components/skeletons/JobCardSkeleton";
import JobCard from "./JobCard";
import JobDetailsModal from "./JobDetailsModal";

import { useJobs } from "../../hooks/queries/useJobs";
import type { Job } from "../../services/jobsApi";

const tabs = ["all", "open", "closed"] as const;

const INITIAL_ITEMS = 3;

type CareerTab = (typeof tabs)[number];

export default function CurrentOpportunities() {
  const [activeTab, setActiveTab] =
    useState<CareerTab>("all");

  const [search, setSearch] = useState("");

  const [selectedJob, setSelectedJob] =
    useState<Job | null>(null);

  const [isExpanded, setIsExpanded] =
    useState(false);

  const {
    data: jobs = [],
    isLoading,
    isError,
  } = useJobs();

  const filteredJobs = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    return jobs.filter((job) => {
      const isOpen =
        job.status === "published" &&
        new Date(job.deadline) >= new Date();

      const jobStatus: "open" | "closed" =
        isOpen ? "open" : "closed";

      const matchTab =
        activeTab === "all" ||
        jobStatus === activeTab;

      const matchSearch =
        job.title
          .toLowerCase()
          .includes(searchValue) ||
        job.department
          .toLowerCase()
          .includes(searchValue) ||
        job.location
          .toLowerCase()
          .includes(searchValue);

      return matchTab && matchSearch;
    });
  }, [jobs, activeTab, search]);

  const displayedJobs = isExpanded
    ? filteredJobs
    : filteredJobs.slice(0, INITIAL_ITEMS);

  const handleTabChange = (tab: CareerTab) => {
    setActiveTab(tab);
    setIsExpanded(false);
  };

  return (
    <section id="positions">
      <TitleComponent
        title="Current Opportunities"
        description="Shape the future of energy infrastructure with LSA."
      />

      <CareerFilters
        tabs={tabs}
        activeTab={activeTab}
        search={search}
        onTabChange={handleTabChange}
        onSearchChange={setSearch}
      />

      <div className="space-y-5">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <JobCardSkeleton key={index} />
          ))
        ) : isError ? (
          <div
            className="
              mt-10 rounded-2xl
              border border-red-200
              bg-red-50 p-10 text-center
            "
          >
            <h3
              className="
                text-xl font-bold
                text-red-600
              "
            >
              Unable to load positions
            </h3>

            <p
              className="
                mt-2 text-sm
                text-red-500
              "
            >
              Something went wrong while loading
              the available positions.
            </p>
          </div>
        ) : (
          displayedJobs.map((job) => (
            <JobCard
              key={job._id}
              job={job}
              onViewDetails={setSelectedJob}
            />
          ))
        )}
      </div>

      {!isLoading &&
        !isError &&
        filteredJobs.length === 0 && (
          <div
            className="
              mt-10 rounded-2xl
              border border-slate-200
              bg-white p-10 text-center
            "
          >
            <h3
              className="
                text-xl font-bold
                text-blue-01
              "
            >
              No positions found
            </h3>

            <p
              className="
                mt-2 text-sm
                text-slate-500
              "
            >
              Try changing the search keyword
              or selected filter.
            </p>
          </div>
        )}

      {!isLoading &&
        !isError &&
        filteredJobs.length > INITIAL_ITEMS && (
          <div
            className="
              mt-12 flex justify-center
            "
          >
            <LoadMoreButton
              isExpanded={isExpanded}
              onClick={() =>
                setIsExpanded((prev) => !prev)
              }
              loadMoreText="Load More Positions"
              showLessText="Show Less Positions"
            />
          </div>
        )}

      <JobDetailsModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </section>
  );
}