import {
    Briefcase,
    Clock,
    MapPin,
} from "lucide-react";
import ButtonComponent from "../../shared/ButtonComponent";
import { ArrowRight } from "lucide-react";
import type { CareerJob } from "../../../data/careersData";

interface JobCardProps {
    job: CareerJob;
    onViewDetails: (job: CareerJob) => void;
}

export default function JobCard({
    job,
    onViewDetails,
}: JobCardProps) {
    const isOpen = job.status === "open";

    return (
        <div
            data-aos="flip-left" data-aos-duration="800"

            className="
        group rounded-2xl border border-slate-200
        bg-white p-5 md:p-7 2xl:p-9
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:border-blue-01/30
        hover:shadow-xl
      "
        >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                <div>
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-bold text-blue-01 md:text-[22px] 2xl:text-[24px]">
                            {job.title}
                        </h3>

                        <span
                            className={`
                rounded-full px-3 py-1 text-xs font-bold uppercase
                ${isOpen
                                    ? "bg-blue-01/10 text-blue-01"
                                    : "bg-red-100 text-red-01"
                                }
              `}
                        >
                            {job.status}
                        </span>
                    </div>

                    <p className="mb-4 max-w-2xl text-sm leading-6 text-muted-blue md:text-base">
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
                    onClick={() => isOpen && onViewDetails(job)}
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
}