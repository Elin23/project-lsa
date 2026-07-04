import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CheckCircle,
  Clock,
  FileText,
  MapPin,
  Search,
  Upload,
  X,
} from "lucide-react";
import { careersData, type CareerJob } from "../../data/careersData";
import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import LoadMoreButton from "../../components/shared/LoadMoreButton";
import ButtonComponent from "../../components/shared/ButtonComponent";

const tabs = ["all", "open", "closed"] as const;

const CurrentOpportunities = () => {
  const [activeTab, setActiveTab] = useState<"all" | "open" | "closed">("all");
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState<CareerJob | null>(null);
  const [step, setStep] = useState<1 | 2>(1);
const [isExpanded, setIsExpanded] = useState(false);
  const filteredJobs = useMemo(() => {
    return careersData.filter((job) => {
      const matchTab = activeTab === "all" || job.status === activeTab;

      const searchValue = search.toLowerCase();

      const matchSearch =
        job.title.toLowerCase().includes(searchValue) ||
        job.department.toLowerCase().includes(searchValue) ||
        job.location.toLowerCase().includes(searchValue);

      return matchTab && matchSearch;
    });
  }, [activeTab, search]);

  const openModal = (job: CareerJob) => {
    setSelectedJob(job);
    setStep(1);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setStep(1);
  };

  const INITIAL_ITEMS = 3;


const displayedJobs = isExpanded
  ? filteredJobs
  : filteredJobs.slice(0, INITIAL_ITEMS);

  return (
    <section >


      <TitleComponent
        title="Current Opportunities"
        description="Shape the future of energy infrastructure with LSA."
      />


      <div className="flex justify-between items-center mb-10">


        <div className=" flex justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-6 py-2 text-sm font-semibold capitalize transition-all duration-300 ${activeTab === tab
                ? "bg-blue-01 text-white shadow-lg shadow-blue-01/20"
                : "bg-white text-slate-600 hover:bg-blue-01/10 hover:text-blue-01"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-[360px]">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search positions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm outline-none transition focus:border-blue-01 focus:ring-4 focus:ring-blue-01/10"
          />
        </div>
      </div>

      <div className="space-y-5">
        {displayedJobs.map((job) => {
          const isOpen = job.status === "open";

          return (
            <div
              key={job.id}
              className="group rounded-2xl border border-slate-200 bg-white  p-5 md:p-7 2xl:p-9 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-01/30 hover:shadow-xl"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold md:text-[22px] 2xl:text-[24px] text-blue-01">
                      {job.title}
                    </h3>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold uppercase ${isOpen
                        ? "bg-blue-01/10 text-blue-01"
                        : "bg-red-100 text-red-01"
                        }`}
                    >
                      {job.status}
                    </span>
                  </div>

                  <p className="mb-4 max-w-2xl text-sm leading-6 md:text-base text-muted-blue">
                    {job.overview}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {job.type}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Briefcase className="h-4 w-4" />
                      {job.department}
                    </span>
                  </div>
                </div>

<ButtonComponent
  onClick={() => isOpen && openModal(job)}
  disabled={!isOpen}
  icon={<ArrowRight className="h-4 w-4" />}
  iconPosition="right"
  hoverBg=""
  height="h-12"
  padding="px-6"
  rounded="rounded-xl"
>
  {isOpen ? "View Details" : "Closed"}
</ButtonComponent>
              </div>
            </div>
          );
        })}
      </div>

      {filteredJobs.length === 0 && (
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-10 text-center">
          <h3 className="text-xl font-bold text-blue-01">
            No positions found
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Try changing the search keyword or selected filter.
          </p>
        </div>
      )}

{filteredJobs.length > INITIAL_ITEMS && (
  <div className="mt-12 flex justify-center">
    <LoadMoreButton
      isExpanded={isExpanded}
      onClick={() => setIsExpanded(!isExpanded)}
      loadMoreText="Load More Positions"
      showLessText="Show Less Positions"
    />
  </div>
)}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-5 top-5 z-10 rounded-full bg-slate-100 p-2 text-slate-500 transition hover:bg-red-100 hover:text-red-01"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="border-b border-slate-100 p-6 md:p-8">
              <span className="mb-3 inline-block rounded-full bg-blue-01/10 px-3 py-1 text-xs font-bold uppercase text-blue-01">
                {step === 1 ? "Job Details" : "Application Form"}
              </span>

              <h3 className="pr-10 text-2xl font-bold text-blue-01 md:text-3xl">
                {selectedJob.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-blue-01" />
                  {selectedJob.location}
                </span>

                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-blue-01" />
                  {selectedJob.type}
                </span>

                <span className="flex items-center gap-1.5">
                  <Briefcase className="h-4 w-4 text-blue-01" />
                  {selectedJob.department}
                </span>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`h-2 flex-1 rounded-full ${step >= 1 ? "bg-blue-01" : "bg-slate-200"
                    }`}
                />
                <div
                  className={`h-2 flex-1 rounded-full ${step >= 2 ? "bg-blue-01" : "bg-slate-200"
                    }`}
                />
              </div>
            </div>

            {step === 1 && (
              <div className="p-6 md:p-8">
                <div className="mb-8 rounded-2xl bg-[#f7f8ff] p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-01" />
                    <h4 className="text-xl font-bold text-blue-01">
                      About the Role
                    </h4>
                  </div>

                  <p className="text-sm leading-7 text-slate-600">
                    {selectedJob.overview}
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-4 text-xl font-bold text-blue-01">
                      Responsibilities
                    </h4>

                    <div className="space-y-3">
                      {selectedJob.responsibilities.map((item, index) => (
                        <div key={index} className="flex gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-01" />
                          <p className="text-sm leading-6 text-slate-600">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-4 text-xl font-bold text-blue-01">
                      Requirements
                    </h4>

                    <div className="space-y-3">
                      {selectedJob.requirements.map((item, index) => (
                        <div key={index} className="flex gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-01" />
                          <p className="text-sm leading-6 text-slate-600">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-6 md:flex-row md:justify-end">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="h-12 rounded-xl border border-slate-200 px-8 text-sm font-bold text-slate-600 transition hover:bg-slate-100"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-01 px-8 text-sm font-bold text-white transition hover:bg-red-01"
                  >
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <form className="p-6 md:p-8">
                <p className="mb-6 text-sm leading-6 text-slate-500">
                  Please fill in your information and upload your CV to apply
                  for this position.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-blue-01">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-blue-01 focus:ring-4 focus:ring-blue-01/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-blue-01">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-blue-01 focus:ring-4 focus:ring-blue-01/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-blue-01">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="example@mail.com"
                      className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-blue-01 focus:ring-4 focus:ring-blue-01/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-blue-01">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+964 7XX XXX XXXX"
                      className="h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-blue-01 focus:ring-4 focus:ring-blue-01/10"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-blue-01">
                      Upload CV
                    </label>

                    <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center transition hover:border-blue-01 hover:bg-blue-01/5">
                      <Upload className="mb-3 h-8 w-8 text-blue-01" />

                      <span className="text-sm font-semibold text-blue-01">
                        Click to upload your CV
                      </span>

                      <span className="mt-1 text-xs text-slate-500">
                        PDF, DOC, DOCX
                      </span>

                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-6 md:flex-row md:justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 px-8 text-sm font-bold text-slate-600 transition hover:bg-slate-100"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>

                  <button
                    type="submit"
                    className="h-12 rounded-xl bg-blue-01 px-8 text-sm font-bold text-white transition hover:bg-red-01"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CurrentOpportunities;