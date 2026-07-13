import { useEffect, useState } from "react";

import type { Project } from "../../data/projectsData";

import DetailedScopeSkeleton from "../../components/skeletons/DetailedScopeSkeleton";

interface DetailedScopeProps {
  project: Project;
}

export default function DetailedScope({
  project,
}: DetailedScopeProps) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, []);

  if (loading) {
    return <DetailedScopeSkeleton />;
  }

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      className="flex flex-col justify-between gap-8 lg:flex-row"
    >
      {/* Left Card */}
      <div
        className="
          group h-max w-full rounded-2xl border border-[#C5C5D333]
          bg-white p-8
          shadow-[0px_8px_10px_-6px_#00236F0D,0px_20px_25px_-5px_#00236F0D]
          transition-all duration-500
          hover:-translate-y-1
          hover:border-blue-01/15
          hover:shadow-[0_18px_40px_rgba(0,35,111,0.10)]
          lg:w-[31.75%] 2xl:w-[32.14%]
        "
      >
        <h4 className="border-l-4 border-l-red-01 pl-4 text-lg font-bold text-blue-01 transition-all duration-300 group-hover:translate-x-1 sm:text-2xl">
          PROJECT OVERVIEW
        </h4>

        <div className="mt-8 divide-y divide-[#C5C5D34D]">
          {project.overview.map((item) => (
            <div
              key={item.label}
              className="py-4 transition-all duration-300 hover:translate-x-1"
            >
              <span className="text-xs font-bold text-muted-blue">
                {item.label}
              </span>

              <h5 className="text-lg font-semibold text-[#111C2C]">
                {item.value}
              </h5>
            </div>
          ))}
        </div>
      </div>

      {/* Right Card */}
      <div
        className="
          group w-full rounded-2xl border border-[#C5C5D333]
          bg-white p-8
          shadow-[0px_8px_10px_-6px_#00236F0D,0px_20px_25px_-5px_#00236F0D]
          transition-all duration-500
          hover:-translate-y-1
          hover:border-blue-01/15
          hover:shadow-[0_18px_40px_rgba(0,35,111,0.10)]
          lg:w-[68.42%] 2xl:w-[66.10%]
        "
      >
        <h4 className="text-2xl font-bold text-blue-01 sm:text-[40px]">
          {project.scope.title}
        </h4>

        <div className="mt-3.5 space-y-3.5">
          {project.scope.paragraphs
            .slice(0, 2)
            .map((paragraph, index) => (
              <p
                key={`${project.id}-paragraph-${index}`}
                className={`text-lg ${
                  paragraph.primary
                    ? "font-medium text-[#111C2C]"
                    : "font-light text-[#444651E5]"
                }`}
              >
                {paragraph.text}
              </p>
            ))}

          <div className="flex flex-col justify-between gap-6 sm:flex-row">
            {project.scope.highlights.map((item) => (
              <div
                key={item.id}
                className="
                  rounded-xl
                  border-l-4 border-l-blue-01
                  bg-[#F9F9FF]
                  p-6
                "
              >
                <h5 className="text-lg font-bold text-blue-01">
                  {item.title}
                </h5>

                <p className="text-sm font-light text-[#444651E5]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {project.scope.paragraphs[2] && (
            <p className="mt-4 text-lg font-light text-[#444651E5]">
              {project.scope.paragraphs[2].text}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}