import {
  ArrowRight,
  Briefcase,
  CalendarClock,
  Clock,
  MapPin,
} from "lucide-react";

import ButtonComponent from "../../components/shared/ButtonComponent";

import type { Job } from "../../services/jobsApi";

interface JobCardProps {
  job: Job;
  onViewDetails: (job: Job) => void;
  animationDelay?: number;
}

export default function JobCard({
  job,
  onViewDetails,
  animationDelay = 0,
}: JobCardProps) {
  const isOpen =
    job.status === "published" &&
    new Date(job.deadline) >= new Date();

  const formattedDeadline = new Date(
    job.deadline,
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="550"
      data-aos-delay={animationDelay}
      data-aos-easing="ease-out-cubic"
      data-aos-offset="40"
      data-aos-once="true"
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_4px_18px_rgba(0,35,111,0.05)] transition-[border-color,background-color,box-shadow] duration-300 ease-out hover:border-blue-01/25 hover:bg-[#FCFDFF] hover:shadow-[0_14px_35px_rgba(0,35,111,0.10)] md:p-7 2xl:p-9"
    >
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 rounded-r-full bg-blue-01 transition-transform duration-300 ease-out group-hover:scale-y-100"
      />

      <div className="relative z-10 flex min-w-0 flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="mb-3 flex min-w-0 flex-wrap items-center gap-3">
            <h3 className="min-w-0 wrap-break-word text-xl font-bold text-blue-01 md:text-[22px] 2xl:text-[24px]">
              {job.title}
            </h3>

            <span
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold uppercase transition-colors duration-300 ease-out ${isOpen
                  ? "bg-blue-01/10 text-blue-01 group-hover:bg-blue-01/15"
                  : "bg-red-100 text-red-01 group-hover:bg-red-100/80"
                }`}
            >
              {isOpen ? "Open" : "Closed"}
            </span>
          </div>

          <p className="mb-4 min-w-0 max-w-2xl wrap-break-word text-sm leading-6 text-muted-blue md:text-base">
            {job.shortDescription}
          </p>

          {isOpen && (
            <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-lg bg-amber-50 px-3 py-2 text-sm font-medium text-amber-700">
              <CalendarClock className="h-4 w-4 shrink-0" />

              <span className="min-w-0 wrap-break-word">
                Applications close on{" "}
                {formattedDeadline}
              </span>
            </div>
          )}

          <div className="flex min-w-0 flex-wrap gap-4 text-sm text-slate-500">
            <span className="flex min-w-0 max-w-full items-center gap-1.5 transition-colors duration-300 group-hover:text-slate-600">
              <MapPin className="h-4 w-4 shrink-0" />

              <span className="min-w-0 wrap-break-word">
                {job.location}
              </span>
            </span>

            <span className="flex min-w-0 max-w-full items-center gap-1.5 transition-colors duration-300 group-hover:text-slate-600">
              <Clock className="h-4 w-4 shrink-0" />

              <span className="min-w-0 wrap-break-word">
                {job.employmentType}
              </span>
            </span>

            <span className="flex min-w-0 max-w-full items-center gap-1.5 transition-colors duration-300 group-hover:text-slate-600">
              <Briefcase className="h-4 w-4 shrink-0" />

              <span className="min-w-0 wrap-break-word">
                {job.department}
              </span>
            </span>
          </div>
        </div>

        <div className="shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1">
          <ButtonComponent
            onClick={() =>
              isOpen && onViewDetails(job)
            }
            disabled={!isOpen}
            icon={
              <ArrowRight className="h-4 w-4" />
            }
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
    </div>
  );
}