import { useEffect, useState } from "react";

import type { Project } from "../../Types/project";

import DetailedScopeSkeleton from "../../components/skeletons/DetailedScopeSkeleton";

interface DetailedScopeProps {
  project: Project;
}

export default function DetailedScope({ project }: DetailedScopeProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => window.clearTimeout(timer);
  }, [project._id]);

  if (loading) {
    return <DetailedScopeSkeleton />;
  }

  const details = [
    {
      label: "CLIENT",
      value: project.projectDetails.client,
    },
    {
      label: "LOCATION",
      value: project.projectDetails.location,
    },
    {
      label: "COMPLETION DATE",
      value: project.projectDetails.completionDate,
    },
    {
      label: "DURATION",
      value: project.projectDetails.duration,
    },
    {
      label: "STATUS",
      value: project.projectDetails.status,
    },
  ].filter((item) => item.value);

  return (
    <section data-aos="fade-up" data-aos-duration="800" className="flex flex-col justify-between gap-8 lg:flex-row">
      {/* Project Details */}
      <div
        className="group h-max w-full rounded-2xl border border-[#C5C5D333] bg-white p-8 shadow-[0px_8px_10px_-6px_#00236F0D,0px_20px_25px_-5px_#00236F0D] transition-all duration-500 hover:-translate-y-1 hover:border-blue-01/15 hover:shadow-[0_18px_40px_rgba(0,35,111,0.10)] lg:w-[31.75%] 2xl:w-[32.14%]"
      >
        <h4 className="border-l-4 border-l-red-01 pl-4 text-lg font-bold text-blue-01 transition-all duration-300 group-hover:translate-x-1 sm:text-2xl">
          PROJECT OVERVIEW
        </h4>

        {details.length > 0 ? (
          <div className="mt-8 divide-y divide-[#C5C5D34D]">
            {details.map((item) => (
              <div key={item.label} className="py-4 transition-all duration-300 hover:translate-x-1">
                <span className="text-xs font-bold text-muted-blue">{item.label}</span>

                <h5 className="text-lg font-semibold text-[#111C2C]">{item.value}</h5>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-8 text-sm text-muted-blue">Project details are currently unavailable.</p>
        )}
      </div>

      {/* Detailed Scope */}
      <div
        className="group w-full rounded-2xl border border-[#C5C5D333] bg-white p-8 shadow-[0px_8px_10px_-6px_#00236F0D,0px_20px_25px_-5px_#00236F0D] transition-all duration-500 hover:-translate-y-1 hover:border-blue-01/15 hover:shadow-[0_18px_40px_rgba(0,35,111,0.10)] lg:w-[68.42%] 2xl:w-[66.10%]"
      >
        <h4 className="text-2xl font-bold text-blue-01 sm:text-[40px]">{project.detailedScope.title}</h4>

        {project.detailedScope.description && (
          <p className="mt-3.5 text-lg font-light text-[#444651E5]">{project.detailedScope.description}</p>
        )}

        {project.detailedScope.items.length > 0 && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.detailedScope.items.map((item) => (
              <div
                key={`${project._id}-${item.title}`}
                className="rounded-xl border-l-4 border-l-blue-01 bg-[#F9F9FF] p-6 transition-all duration-300 hover:-translate-y-0.5"
              >
                <h5 className="text-lg font-bold text-blue-01">{item.title}</h5>

                <p className="mt-1 text-sm font-light text-[#444651E5]">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}