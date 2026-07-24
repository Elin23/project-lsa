import { useEffect, useMemo, useState } from "react";
import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import CareerFilters from "../../components/common/Careers/CareerFilters";
import JobCard from "../../components/common/Careers/JobCard";
import JobDetailsModal from "../../components/common/Careers/JobDetailsModal";
import LoadMoreButton from "../../components/shared/LoadMoreButton";
import {
  careersData,
  type CareerJob,
} from "../../data/careersData";
import JobCardSkeleton from "../../components/skeletons/JobCardSkeleton";
const tabs = ["all", "open", "closed"] as const;
const INITIAL_ITEMS = 3;
export default function CurrentOpportunities() {
  const [activeTab, setActiveTab] =
    useState<(typeof tabs)[number]>("all");
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState<CareerJob | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  const filteredJobs = useMemo(() => {
    return careersData.filter((job) => {
      const matchTab =
        activeTab === "all" ||
        job.status === activeTab;
      const searchValue =
        search.toLowerCase();
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
  }, [activeTab, search]);
  const displayedJobs = isExpanded
    ? filteredJobs
    : filteredJobs.slice(0, INITIAL_ITEMS);
  const handleTabChange = (
    tab: (typeof tabs)[number]
  ) => {
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
        {loading ? (
          Array
            .from({ length: 3 })
            .map((_, index) => (
              <JobCardSkeleton
                key={index}
              />
            ))
        ) : (
          displayedJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onViewDetails={setSelectedJob}
            />
          ))
        )}
      </div>
      {!loading &&
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
              Try changing the search keyword or selected filter.
            </p>
          </div>
        )}
      {!loading &&
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